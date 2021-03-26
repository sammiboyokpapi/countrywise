var dateFormat = require('dateformat');
var mysql = require('../model/mysql');

var generate_report = function(req,res){


/////calculate the total rows from the database in mysql
/// if the latest record is less than yesterday date /// run function to spool data from elasticsearch and populate 


//res.send("alright");

			console.log("working now");

	mysql.retrieve_report(req,res);


}




module.exports = {
   generate_report : generate_report
}