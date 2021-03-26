const express = require('express')
const router = express.Router()
const app = express()
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const session = require('express-session');

var login = require('../model/login');
var mysql = require('../model/mysql');
var elasticsearch = require('../model/elasticsearch');
//var log = require('../model/log');


app.use(bodyParser.json()); 
app.use(upload.array()); 



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

  res.render('logs',param)
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

		  console.log(req);

		  res.render('logs',param);
		});






		router.post('/getdata', (req, res) => {




		  elasticsearch.getlog(req.body.search1,req.body.search2,req.body.search3,function(response){

		  		  res.json(response);

		  });

	
		});
	
		



module.exports = router