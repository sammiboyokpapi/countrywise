const express = require('express')
const router = express.Router()
const app = express()
const fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const session = require('express-session');

var mssql = require('../model/mssql');
var mysql = require('../model/mysql');
var merchant = require('../model/merchant');
var elasticsearch = require('../model/elasticsearch');
var log = require('../model/log');


//app.use(fileUpload());

router.get('/', (req, res) => {
	//loginRequired(req,res);
	console.log(sess);
		params = {};
	params.sess = sess;
		    if(sess.priviledge == "sadmin"){
    params.sess.sadmin = "sadmin";
  }
      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }

  res.render('generate_merchant',params)
 //login.verifysession(req,res);
})


router.post('/', (req, res) => {
	//loginRequired(req,res);
	//console.log(sess);
 //console.log(req.files);

  	params = {};
	params.sess = sess;
	if(sess.priviledge == "sadmin"){
   		params.sess.sadmin = "sadmin";
 	}
    if(sess.priviledge == "admin"){
    	params.sess.admin = "sadmin";
  	}
 params.notification = {};



      if(typeof req.body.termids === 'undefined' || req.body.termids  === null){
	        console.log(req.body);


			 if(!req.files){

			 			console.log(req.body);
						var resp = mssql.store_merchant_rec(req.body,function(state,param){
							log.log_success("Merchant","Successfully Stored  Newly Generated Terminals " ,"204",sess.username,sess.priviledge);
    
	 				 res.render('generate_merchant',param);

	 				});

				 }else{
				//  console.log(req.files.filetoupload);
				    var file;
					//console.log(req.body);
					    	merchant.file_process(res,params,req);
					    	log.log_success("Merchant","Successfully Stored  Newly Generated Terminals Via Batch Upload " ,"205",sess.username,sess.priviledge);
					
				//  res.render('generate_merchant',params)
				 //login.verifysession(req,res);
				}


	}else{

  	/// start fetching records from mysql and write the data to the json to excel parser
  	console.log( req.body.termids );



  			  	mysql.Ajo_Thrift_excel(req.body.termids,function(state,param){
		  		console.log("mysql result");

		  		console.log(param);
		  		if(state != "error"){
		  			//write to excel for download
		  			log.log_success("Merchant","Successfully generated Batch Merchant Terminals Report  :"+ param.length ,"203",sess.username,sess.priviledge);
    
		  			elasticsearch.search_merchant_doc_query_mysql(param,res);


		  		}else{
		  			log.log_error("Merchant","Failed to Generate Batch Merchant data Report, Reason: "+ param,"103",sess.username,sess.priviledge);
    
		  			 params.notification.falsedata = "Failed to Generate Merchant Report, Reason: "+ param;
		  			res.render("terminal",params);

		  		}
		  	});


//		  			res.render("generate_merchant");



	}


})






module.exports = router
