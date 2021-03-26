const express = require('express')
const router = express.Router()
const app = express()
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const session = require('express-session');
const querystring = require('querystring');

var elasticsearch = require('../model/elasticsearch');
//login.f1();
//express.use(express.static(__dirname + '/views'));

//app.use(express.static('./views'));
//app.use(session({ secret: 'anything', resave: true, saveUninitialized: true }));
app.use(bodyParser.json()); 
app.use(upload.array()); 

//var sess;


router.get('/', (req, res) => {
	//loginRequired(req,res);
	console.log(req.query);

//initiate serach request to elastic search 

var result = elasticsearch.search_merchant_doc_get(req.query, res);

//console.log(result);
 // res.render('search',{ title: 'Express' })
 //login.verifysession(req,res);
})

router.post('/', (req, res) => {
	//loginRequired(req,res);
	//console.log(sess);

//initiate serach request to elastic search 
var result = elasticsearch.search_merchant_doc(req, res);

//console.log(result);
 // res.render('search',{ title: 'Express' })
 //login.verifysession(req,res);
})


router.post('/getdata', (req, res) => {
	//loginRequired(req,res);
	//console.log(sess);

//initiate serach request to elastic search 



req.body.search = req.body.search.replace(/&quot;/g,'"');

elasticsearch.get_table_result(req.body,res);
//console.log(req.body);
//console.log();


 // res.render('search',{ title: 'Express' })
 //login.verifysession(req,res);
})






module.exports = router
