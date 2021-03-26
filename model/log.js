var dateFormat = require('dateformat');
var fss = require("fs");
//var elasticsearch = require('../model/elasticsearch');
 var current_date=dateFormat(new Date(), "yyyy-mm-dd");





var infoStream = fss.createWriteStream("logs/"+current_date+"_log.txt", { flags: 'a' });


var log_success = function(module_name,msg,code,user,priviledge) {
var message=dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");

//var message = new Date().toISOString();
data = {};
data.date = message;
data.severity = "SUCCESS";
data.module = module_name;
data.code = code;
data.message = msg;
data.user = user;
data.priviledge = priviledge

infoStream.write(JSON.stringify(data)+ "\n");

store_to_es(data);
}

var log_info = function(module_name,msg,code,user,priviledge) {
  var message=dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
  //var message = new Date().toISOString();
data = {};
data.date = message;
data.severity = "INFO";
data.module = module_name;
data.code = code;
data.message = msg;
data.user = user;
data.priviledge = priviledge

infoStream.write(JSON.stringify(data)+ "\n");
store_to_es(data);

}

var log_error = function(module_name,msg,code,user,priviledge) {
  var message=dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
  
//var message = new Date().toISOString();
data = {};
data.date = message;
data.severity = "ERROR";
data.module = module_name;
data.code = code;
data.message = msg;
data.user = user;
data.priviledge = priviledge

infoStream.write(JSON.stringify(data)+ "\n");
store_to_es(data);
}




function store_to_es(param){
/*	elasticsearch.store_log_details(data,function(response){

	console.log(response);
	}); */
	var elastic_log_url = "https://search-samtest-noiakk4d5co5heeythu7cii5aq.eu-west-1.es.amazonaws.com/merchantapp_log/log";


//app.use(myParser.json({extended : true}));
//console.log(JSON.stringify(param));

//elastic  search write to index table 
var current_date=dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss");
//param.date = current_date;


    var request = require("request");

    var options = { method: 'POST',
      url: elastic_log_url,
      headers: 
       {'Content-Type': 'application/json' },
      body: param,
      json: true };

    request(options, function (error, response, body) {
      if (!error){//throw new Error(error);
console.log("stored log data to database");
      //callback("ok");
      }else{

      callback("failed");
        console.log("failed to store log data");

		}
     // console.log(body);
    });



  

}

 
module.exports = {
   log_success : log_success,
   log_info : log_info,
   log_error : log_error
}