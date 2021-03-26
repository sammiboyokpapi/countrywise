const express = require('express')
const router = express.Router()
const app = express()
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const session = require('express-session');

var login = require('../model/login');
var mysql = require('../model/mysql');
var mssql = require('../model/mssql');
var log = require('../model/log');

//login.f1();
//express.use(express.static(__dirname + '/views'));

//app.use(express.static('./views'));
//app.use(session({ secret: 'anything', resave: true, saveUninitialized: true }));
app.use(bodyParser.json()); 
app.use(upload.array()); 

//var sess;




router.get('/', (req, res) => {



	//loginRequired(req,res);
//	console.log(sess);
	param = {};
	param.sess = sess;
		if(sess.priviledge == "sadmin"){
		param.sess.sadmin = "sadmin";
	}
	      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }


	console.log(param.sess);

  res.render('register',param)
 //login.verifysession(req,res);
})




router.get('/username', (req, res) => {



	console.log(req.query);
	param = {};
		if(typeof req.query.username === 'undefined' || req.query.username  === null){
			param.status = "error";
			param.reason = "Username cannot be NULL";
		}else{
				//start pooling result from database limit 5
				mssql.selectusers(req.query.username,function(result){


					res.json(result);

				});


		}
})





router.post('/', (req, res) => {
	//loginRequired(req,res);
	//console.log(sess);
			param = {};
		param.sess = sess;
		if(sess.priviledge == "sadmin"){
			param.sess.sadmin = "sadmin";
		}
		if(sess.priviledge == "admin"){
		    params.sess.admin = "sadmin";
		  }


	console.log(req.body);
	if("modify_form" in req.body){
				mssql.modify_profile(req.body,function(response){

				if(response.status == "error"){
					param.notification = {};
					log.log_error("User","Failed to Modify User Profile :"+  req.body.usernameparameter ,"106",sess.username,sess.priviledge);
    
					 param.notification.falsedata = "Failed to Modify User Profile: "+ req.body.usernameparameter;

					res.render('register',param);
				}else{
					log.log_success("User","Successfully Modify User Profile :"+  req.body.usernameparameter ,"206",sess.username,sess.priviledge);
    
					param.notification = {};
					 param.notification.truedata = "Successfully Modified User Profile: "+ req.body.usernameparameter;

					res.render('register',param);
				}
		});
	}
	else if("password_form" in req.body){
		mssql.modify_password(req.body,function(response){

				if(response.status == "error"){
					param.notification = {};
					 param.notification.falsedata = "Failed to Modify User password: "+ req.body.usernameparameter;
					 log.log_error("User","Failed to Modify User Password :"+  req.body.usernameparameter ,"107",sess.username,sess.priviledge);
    
					res.render('register',param);
				}else{
					param.notification = {};
					 param.notification.truedata = "Successfully Modified User password: "+ req.body.usernameparameter;
					 log.log_success("User","Successfully Modify User password :"+  req.body.usernameparameter ,"207",sess.username,sess.priviledge);
    
					res.render('register',param);
				}
		});



	}else{

				if(req.body.optionyes){
					login.verifynewuser(req.body,res,function(status){
					//	console.log("sfdadf");
					//	console.log(status[0]);


					param.notification = {};

						if(status[0].result > 0){
							//user already exists ... throw error
							console.log("user already exists");
							log.log_error("User","Failed to New User, The Username already exist:"+  req.body.username ,"108",sess.username,sess.priviledge);
    
							 param.notification.falsedata = "The User already exists, Username :"+ req.body.username;
							res.render('register',param);
						}else{
							//create new user
							login.createnewuser(req.body,function(state){


								console.log({new : state});
								log.log_success("User","Successfully Created New User, Username :"+  req.body.username ,"208",sess.username,sess.priviledge);
								 param.notification.truedata = "Successfully Created New User, Username: "+req.body.username;
								res.render('register',param);
							});
						}

					});
				}
	}

	
  //res.render('register')
 //login.verifysession(req,res);
})










module.exports = router
