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

//app.use('/stylesheets/fontawesome', express.static(__dirname + 'node_modules/@fortawesome/fontawesome-free/'));
app.use(express.static(__dirname + 'node_modules/@fortawesome/fontawesome-free/fontawesome-free'));
//var sess;



router.get('/', (req, res) => {

	param = {};
	param.sess = sess;
		if(sess.priviledge == "sadmin"){
		param.sess.sadmin = "sadmin";
	}      
	if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }


	console.log(param.sess);

  res.render('kycuser',param)
 //login.verifysession(req,res);
})


	router.post('/', (req, res) => {
			param = {};
		param.sess = sess;
		if(sess.priviledge == "sadmin"){
			param.sess.sadmin = "sadmin";
		}
		 if(sess.priviledge == "admin"){
		    params.sess.admin = "sadmin";
		  }
		console.log(req.body);
			if("create_kyc" in req.body){
						mssql.create_kyc(req.body,function(response){

						if(response.status == "error"){
							param.notification = {};
							 param.notification.falsedata = "Failed to Create kyc User : " + req.body.kycname +", Reason :"+ response.reason;
							   log.log_error("kycuser","Failed to Create New kyc user : "+ req.body.kycname +" , Reason :"+  response.reason ,"116",sess.username,sess.priviledge);
    
							res.render('kycuser',param);
						}else{
							param.notification = {};
							 param.notification.truedata = "Successfully Created kyc user Profile: "+ req.body.kycname;
							 log.log_success("kycuser","Successfully Created New kyc user : "+ req.body.kycname ,"216",sess.username,sess.priviledge);
    
							res.render('kycuser',param);
						}
				});
			}
			else if("kycuser_change_password" in req.body){
						mssql.password_kyc(req.body,function(response){

						if(response.status == "error"){
							param.notification = {};
							 param.notification.falsedata = "Failed to Modify kyc user password : " + req.body.kycuser_name +", Reason :"+ response.reason;
							 log.log_error("kycuser","Failed to Modify kyc user password : " + req.body.kycuser_name +", Reason :"+ response.reason,"117",sess.username,sess.priviledge);
    
							res.render('kycuser',param);
						}else{
							param.notification = {};
							 param.notification.truedata = "Successfully Modified Password Profile: "+ req.body.kycuser_name;
							 log.log_success("kycuser","Successfully Modified password : "+ req.body.kycuser_name ,"217",sess.username,sess.priviledge);
    
							res.render('kycuser',param);
						}
				});
			}
			else if("delete_kyc" in req.body){
						mssql.delete_kyc(req.body,function(response){
							console.log(response);
						if(response.status == "error"){
							param.notification = {};
							 param.notification.falsedata = "Failed to delete kyc user  : " + req.body.kyc_username +", Reason :"+ response.reason;
							 log.log_error("kycuser","Failed to delete kyc user  : " + req.body.kyc_username +", Reason :"+ response.reason,"118",sess.username,sess.priviledge);
    

							res.render('kycuser',param);
						}else{
							param.notification = {};
							 param.notification.truedata = "Successfully Deleted kyc Profile: "+ req.body.kyc_username;
							 log.log_success("kycuser","Successfully Deleted kyc Profile: "+ req.body.kyc_username,"218",sess.username,sess.priviledge);
    

							res.render('kycuser',param);
						}
				});
			}
						else if("kyc_add_partners" in req.body){
						mssql.kyc_add_partners(req.body,function(response){
							console.log(response);
						if(response.status == "error"){
							param.notification = {};
							 param.notification.falsedata = "Failed to add partner to kyc user  : " + req.body.kyc_username +", Reason :"+ response.reason;
							  log.log_error("kycuser","Failed to add partner to kyc user  : " + req.body.kyc_username +", Reason :"+ response.reason,"219",sess.username,sess.priviledge);
    

							res.render('kycuser',param);
						}else{
							param.notification = {};
							 param.notification.truedata = "Successfully added partner to kyc Profile: "+ req.body.kyc_username;
							 log.log_success("kycuser","Successfully added partner to kyc Profile: "+ req.body.kyc_username,"219",sess.username,sess.priviledge);
    
							res.render('kycuser',param);
						}
				});
			}
			

	});







module.exports = router