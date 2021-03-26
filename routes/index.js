const express = require('express')
var mssql = require('../model/mssql');
const router = express.Router()

router.get('/', (req, res) => {
mssql.trap("aaa",function(aaa){

});
  res.render('index')
})



module.exports = router
