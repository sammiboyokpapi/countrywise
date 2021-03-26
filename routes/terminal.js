const express = require('express')
const router = express.Router()
const app = express()
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const session = require('express-session');

var mysql = require('../model/mysql');
var elasticsearch = require('../model/elasticsearch');
var log = require('../model/log');


router.get('/', (req, res) => {
	//loginRequired(req,res);
	//console.log(sess);
		params = {};
	params.sess = sess;
		    if(sess.priviledge == "sadmin"){
    params.sess.sadmin = "sadmin";
  }
      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }
  
  res.render('terminal',params);
})


router.post('/', (req, res) => {

	if(typeof req.body.termids === 'undefined' || req.body.termids  === null){
				console.log(req.body);

		//retrieve merchant details from DB and spool new terminal IDs
	
			mysql.update_Ajo_Thrift(req.body,res);

	}else{

			params = {};
			params.sess = sess;
			params.notification = {};
		if(sess.priviledge == "sadmin"){
	   			 params.sess.sadmin = "sadmin";
	  	}
	    if(sess.priviledge == "admin"){
	    		params.sess.admin = "sadmin";
	  	}
  	/// start fetching records from mysql and write the data to the json to excel parser

console.log(req.body);

		  	mysql.Ajo_Thrift_excel(req.body.termids,function(state,param){
		  		console.log("mysql result");

		  		console.log(param);
		  		if(state != "error"){
		  			//write to excel for download
		  			log.log_success("Terminal","Successfully generated Batch Merchant Terminals Report  :"+ param.length ,"203",sess.username,sess.priviledge);
    
		  			elasticsearch.search_merchant_doc_query_mysql(param,res);


		  		}else{
		  			log.log_error("Terminal","Failed to generate Batch Merchant Terminals Report  :"+ param.length ,"103",sess.username,sess.priviledge);
    
		  			 params.notification.falsedata = "Failed to Generate Merchant Report, Reason: "+ param;
		  			res.render("terminal",params);

		  		}
		  	});

	}
//  res.render('terminal')
 ////login.verifysession(req,res);
})







module.exports = router
