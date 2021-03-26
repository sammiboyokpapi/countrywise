const express = require('express')
const router = express.Router()

var login = require('../model/login');


router.get('/', (req, res) => {

	 login.deletesession(req,res);

//  res.render('index')
})



module.exports = router
