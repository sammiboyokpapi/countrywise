const express = require('express')
const router = express.Router()
const app = express()
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const session = require('express-session');

var login = require('../model/login');
var report = require('../model/report');


//login.f1();
//express.use(express.static(__dirname + '/views'));

//app.use(express.static('./views'));
//app.use(session({ secret: 'anything', resave: true, saveUninitialized: true }));
app.use(bodyParser.json()); 
app.use(upload.array()); 
//app.use("",express.static(__dirname + "/views/assets/img/demo/pages_icon_2x.png"));
var sess;

//app.use('/main',loginRequired);

router.post('/', (req, res) => {
//	sess = req.session;
//	sess.password = req.body.password;
//	console.log(sess);
	// res.end('done');

	login.loginRequired(req,res);
 // res.render('dashboard')
})

router.get('/', (req, res) => {
	//loginRequired(req,res);
 // res.render('dashboard')
 login.verifysession(req,res);
})

router.get('/logout', (req, res) => {
	//loginRequired(req,res);
 // res.render('dashboard')
 login.deletesession(req,res);

 res.render("index");
})

router.get('/report', (req, res) => {
	//loginRequired(req,res);
 // res.render('dashboard')

report.generate_report(req,res);


})




module.exports = router
