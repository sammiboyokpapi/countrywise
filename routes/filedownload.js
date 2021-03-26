const express = require('express')
const router = express.Router()
const app = express()
const fileUpload = require('express-fileupload');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const session = require('express-session');

var mysql = require('../model/mysql');
var merchant = require('../model/merchant');
var elasticsearch = require('../model/elasticsearch');


//app.use(fileUpload());

router.get('/', (req, res) => {
	//loginRequired(req,res);
	//console.log(sess);

	 console.log(req);
  //res.render('search')
 //login.verifysession(req,res);

res.status(200).end("asdff");



})


router.post('/', (req, res) => {
	//loginRequired(req,res);
	//console.log(sess);
/////// post request and spool data from elastic search 
///parse data to elasticsearch module 

elasticsearch.search_merchant_doc_query(req.body, res);
		
	//	  res.render('search')
//res.status(200).end(JSON.stringify(req.body));
		 //login.verifysession(req,res);
		
})






module.exports = router
