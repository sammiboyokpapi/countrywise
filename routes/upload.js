const express = require('express')
const router = express.Router()
const app = express()
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const session = require('express-session');
const querystring = require('querystring');
var dateFormat = require('dateformat');

var elasticsearch = require('../model/elasticsearch');
var mysql = require('../model/mysql');
var merchant = require('../model/merchant');
var mail = require('../model/mail');



app.use(bodyParser.json()); 
app.use(upload.array()); 




router.get('/download',(req, res)=>{

	var dir = __dirname;
	dir = dir.replace("routes","");
	
  const file = `${dir}/documents/${req.query.path}.zip`;
  console.log(file);
  res.download(file); // Set disposition and send it.

});



router.get('/', (req, res) => {

	params = {};
	params.sess = sess;
		    if(sess.priviledge == "sadmin"){
    params.sess.sadmin = "sadmin";
  }
      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }      
  if(sess.priviledge == "user"){
    params.sess.user = "user";
  }
    if(sess.priviledge == "kyc"){
    params.sess.kyc = "kyc";

    mysql.get_kyc_partner(sess.identification,function(result3){
    	if(result3.status =="success"){
    		if(result3.result.length > 0){
    			params.sess.kyc_link = result3.result[0];
    		}
    	}

    });
    
    //verify if user has partners allocated
  }
		mysql.documents_result(function(result){

			params.hits = [];

			
				process_result(result,function(news){
					params.hits.push(news);
				});
			//	


			console.log("data to display");
			console.log(params);

	  		res.render('upload',params);

		});



})



	function process_result(result,callback){

 			result.forEach(function(value){
		 	var news = {};
		 	news.files = [];
		 	for(var i = 1; i < 7; i++){
			 	
			 	if(value.filename+i != ""){
			 		news.files.push(value.filename+i);
			 	}
		 	}

		 	news.user = value.created_by;
		 	news.status = value.status;
		 	news.businesstype = value.businesstype;
		 	news.date = dateFormat(new Date(value.date), "yyyy-mm-dd h:MM:ss");//value.date;
		 	news.id = value.id;
		 	news.dirname = value.dirname;



		 			    if(sess.priviledge == "sadmin" ||  sess.priviledge == "admin"){

		 			    		news.priviledge = "true";
  							}

		 				if(news.status == "pending"){

							news.truepending = "pen";

						}

		 	callback(news);
		 });
	}




router.post('/', (req, res) => {

//console.log(req);

	params = {};
	params.sess = sess;
		    if(sess.priviledge == "sadmin"){
    params.sess.sadmin = "sadmin";
  }
      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }   if(sess.priviledge == "user"){
    params.sess.user = "user";
  }    if(sess.priviledge == "kyc"){
    params.sess.kyc = "kyc";
  }





   //if(typeof req.body.termids === 'undefined' || req.body.termids  === null){

			if(!req.files){
				// login.deletesession(req,res);
				//write to database to update
						console.log(req.body);

							mysql.documents_update_status(req.body,function(result2){

												console.log("result");
												console.log(result2[0]);

												params.creator = result2[0];
												mail.sendmaildocs_approved(req.body,params);

											mysql.documents_result(function(result){

												params.hits = [];


														process_result(result,function(news){

															params.hits.push(news);
														});

											//	console.log(params);

												
												//send mail to admin

										  		res.render('upload',params);

											});
								});

			}else{



				if(typeof req.body.documentupload != 'undefined' || req.body.documentupload  != null){

						//POST DATA FOR DOCUMENTS EXISTS
							//create function to parse all records to database 

							//console.log(req.files.fileuploadnew);

								merchant.file_document_process_new(req,function(param){

									if(param.status == "error"){

										res.render('upload',params);

									}else{

										//continue and write to database now 
											console.log("parametersss");
											console.log(param);
										//	req.dirname = param.dirname;

												mysql.write_documents(req,param.dirname,function(resultss){


														console.log(req.body);
														console.log("results");
														console.log(resultss);
														if(resultss.status == "success"){
																	console.log("sending mails :"  + param.dirname);
																	mail.sendmaildocs(req.body,params,param.dirname);


																	mysql.documents_result(function(result){

																		params.hits = [];

																				process_result(result,function(news){
																					params.hits.push(news);
																				});

																			console.log(params);


																		//send mail to admin

																  		res.render('upload',params);

																	});


														}


												});


										}
								//	console.log(param);


								});

					}else{
							/*
						
							*/
					}


			}



})



module.exports = router
