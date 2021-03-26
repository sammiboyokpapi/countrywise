  var mysql      = require('mysql');
  var dateFormat = require('dateformat');
  var log = require('../model/log');
  
  var outt;
   var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'merchant_portal',multipleStatements: true
  });

  connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn");    
    } else {
        console.log("Error connecting database ... nn");    
    }
  });



var  store_merchant_rec = function(req,callback){
//store record to mysql database 
var data = req;
console.log("storing new merchant data");
console.log(data);
data.initiator = sess.username;

var merchant = require('../model/merchant');
var elasticsearch = require('../model/elasticsearch');

merchant.merchant_generate(data.Ajo_Thrift,function(merchantid){

        sess.terminals = [];
         data.STATUS = "active";
        var terminaldata = merchantid[1].toString();

        console.log("merchantid details");
        console.log(merchantid);
        /*

         var sql = 'INSERT INTO merchant (MERCHANTNAME, CONTACTTITLE, CONTACTNAME, MOBILEPHONE, EMAIL,\
         EMAILALERTS, PHYSICALADDRESS, user_code, Ajo_Thrift, BANKCODE, BANKACCTYPE,\
         SLIPHEADER, SLIPFOOTER, BUSINESSOCCUPATIONCODE, BVN, STATECODE, nill,\
          nillACQUIRERIDNUMBER, nill, TERMINALOWNERCODE, LGALCDA, POSTCODE, URL,\
           MERCHANTACCOUNTNAME, PTSP, DEVICETYPE, nill, DEVICESN, APPNAME,\
           APPVERSION, NETWORKTYPE) VALUES ( `data.MerchantName`,data.CONTACTTITLE,data.CONTACTNAME,data.MOBILEPHONE,data.EMAIL,data.EmailAlerts,data.PHYSICALADDRESS,data.user_code,data.Ajo_Thrift,data.BANKCODE,data.BANKACCTYPE,data.SLIPHEADER,data.SLIPFOOTER,data.BUSINESSOCCUPATIONCODE,data.BVN,data.STATECODE,data.nill,data.nillACQUIRERIDNUMBER,data.nill,data.TERMINALOWNERCODE,data.LGALCDA,data.POSTCODE,data.URL,data.MERCHANTACCOUNTNAME,data.PTSP,data.DEVICETYPE,data.nill,data.DEVICESN,data.APPNAME,data.APPVERSION,data.NETWORKTYPE )';
        */

        if("MERCHANTID" in data){
        merchantid[0] = data.MERCHANTID;

        console.log("fire on boy");
        }

          merchantid[1].forEach(function(value){
         data.Ajo_Thrift_VALUE = value;

         console.log("TERMINAL :" + data.Ajo_Thrift_VALUE);

        var sql = "INSERT INTO ?? (??, ??,??, ??, ??, ??,\
         ??, ??, ??, ??, ??, ??,\
         ??, ??, ??, ??, ??, ??,\
          ??, ??, ??, ??, ??, ??,\
           ??, ??, ??, ??, ??, ??,\
           ??, ??, ??,??,??,??) VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ; SELECT LAST_INSERT_ID() as newid from merchant limit 1;";
        //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';

        console.log(data.initiator);
            let poolquery = mysql.format(sql,["merchant","MERCHANTID","MERCHANTNAME","CONTACTTITLE","CONTACTNAME","MOBILEPHONE","EMAIL",
              "EMAILALERTS","PHYSICALADDRESS","user_code","Ajo_Thrift","BANKCODE","BANKACCTNO","BANKACCTYPE","SLIPHEADER",
              "SLIPFOOTER","BUSINESSOCCUPATIONCODE","BVN","STATECODE","nill",
              "nillACQUIRERIDNUMBER","nill","TERMINALOWNERCODE","LGALCDA","POSTCODE","URL",
              "MERCHANTACCOUNTNAME","PTSP","DEVICETYPE","nill","DEVICESN","APPNAME","APPVERSION","NETWORKTYPE","STATUS","initiator","partner",merchantid[0],data.MERCHANTNAME,data.CONTACTTITLE,data.CONTACTNAME,data.MOBILEPHONE,data.EMAIL,data.EMAILALERTS,data.PHYSICALADDRESS,data.user_code, data.Ajo_Thrift_VALUE,data.BANKCODE,data.BANKACCTNO,data.BANKACCTYPE,data.SLIPHEADER,data.SLIPFOOTER,data.BUSINESSOCCUPATIONCODE,data.BVN,data.STATECODE,data.nill,data.nillACQUIRERIDNUMBER,data.nill,data.TERMINALOWNERCODE,data.LGALCDA,data.POSTCODE,data.URL,data.MERCHANTACCOUNTNAME,data.PTSP,data.DEVICETYPE,data.nill,data.DEVICESN,data.APPNAME,data.APPVERSION,data.NETWORKTYPE, data.STATUS,data.initiator,data.partner]);
        console.log(poolquery);

          connection.query(poolquery, function (err, result) {
             if (!err){
                console.log(result);

                  console.log('The solution is: ok');
                  console.log(value);
                //write final record to elastic search 

                   //   var mid = merchant_generatelite(result[0].newid);
                      data.MERCHANTID =  merchantid[0];
                     // data.Ajo_Thrifts = terminaldata;
                      ////store terminal ID details to session 
                      //var newsession  = sess;
                      
                      sess.terminals.push(value);

                             elasticsearch.store_merchant_details(data,value,function(daf){
                             console.log("Elasticsearch storage value "+ value);
                           //  console.log(data);
                    });

                }else{
                    callback("error",err);
                    console.log('Error while performing Query.' + err);

                }
              });
           });

            callback("success",merchantid[1]);
//         console.log(sess);
        });

  }



    var update_Ajo_Thrift = function(req,res){

     // res.render('terminal');
    //select from DB where merchant ID = value limit 1
      var merchantid = req.merchantid;
           var  terminalno =  req.terminals;
           var partner = req.partner;

          var sql = "select * from merchant where MERCHANTID =  ? limit 1";
             connection.query(sql,[merchantid],function(err, rows, fields) {
              if (!err){
                rows[0].partner = partner;
                        add_terminals_to_db(rows[0], terminalno,res);      
               }else{
                  console.log('Error while performing Query.');
              }
            });

    }


    function add_terminals_to_db(param,terminalno,res){

      console.log(param);

      var data ={};
     data.MERCHANTID = param.MERCHANTID;
      data.MERCHANTNAME = param.MERCHANTNAME;
      data.CONTACTTITLE = param.CONTACTTITLE;
      data.CONTACTNAME = param.CONTACTNAME;
      data.MOBILEPHONE = param.MOBILEPHONE;
      data.EMAIL = param.EMAIL;
      data.EMAILALERTS = param.EMAILALERTS;
      data.PHYSICALADDRESS = param.PHYSICALADDRESS;
      data.user_code = param.user_code;
      data.Ajo_Thrift = terminalno;
      data.BANKCODE = param.BANKCODE;
      data.BANKACCTNO = param.BANKACCTNO;
      data.BANKACCTYPE = param.BANKACCTYPE;
      data.SLIPHEADER = param.SLIPHEADER;
      data.SLIPFOOTER = param.SLIPFOOTER;
      data.BUSINESSOCCUPATIONCODE = param.BUSINESSOCCUPATIONCODE;
      data.BVN = param.BVN;
      data.STATECODE = param.STATECODE;
      data.nill = param.nill;
      data.nillACQUIRERIDNUMBER = param.nillACQUIRERIDNUMBER;
      data.nill = param.nill;
      data.TERMINALOWNERCODE = param.TERMINALOWNERCODE;
      data.LGALCDA = param.LGALCDA;
      data.POSTCODE = param.POSTCODE;
      data.URL = param.URL;
      data.MERCHANTACCOUNTNAME = param.MERCHANTACCOUNTNAME;
      data.PTSP = param.PTSP;
      data.DEVICETYPE = param.DEVICETYPE;
      data.nill = param.nill;
      data.DEVICESN = param.DEVICESN;
      data.APPNAME = param.APPNAME;
      data.APPVERSION = param.APPVERSION;
      data.NETWORKTYPE = param.NETWORKTYPE;
      data.partner = param.partner;


     

      store_merchant_rec(data,function(state,paramss){


 console.log(sess);
  console.log({new : paramss});





  params = {};
  params.sess = sess;
    if(sess.priviledge == "sadmin"){
    params.sess.sadmin = "sadmin";
  }
      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }


params.notification = {};
params.notification.result = paramss;

  if(state == "success"){
    log.log_success("Merchant","Successfully generated Additional Terminals :"+ paramss.length +", To merchant : "+param.MERCHANTID,"205",sess.username,sess.priviledge);
    
 params.notification.truedata = "Successfully generated Terminal Details, Total: "+paramss.length;
    res.render('terminal',params)
  }else{
    log.log_error("Merchant","Failed to generate Additional Terminals :"+ paramss.length +", To merchant : "+paramss.MERCHANTID,"205",sess.username,sess.priviledge);
    
 params.notification.falsedata = "Failed to Generate Merchant data, Reason: "+ param;
    res.render('terminal',params)
  }
    });


    }




  var retrieve_report = function(req,res){
      var d = new Date(); // Today!
      var d10 = new Date();
      outt = res;
      d.setDate(d.getDate() - 1); // Yesterday!
      d10.setDate(d10.getDate() - 10);



      var parameters = {};
     //  parameters.type = "";
      //  parameters.name = "";

          if(typeof req.query.type == 'undefined' || req.query.type  == null || req.query.type == "undefined"){
                 parameters.type = "";
                 parameters.name = "";
          
          }else{
             console.log("passed");
             parameters.type = decodeURI(req.query.type);
             parameters.name = decodeURI(req.query.name);
             parameters.id = decodeURI(req.query.id);  

               if(parameters.type == "aggregators"){
                get_linked_partners(parameters.id,function(links){

                    var data_links = [];
                      links.forEach(function(value){

                           // parameters.links = links;
                            data_links.push(value.partner);
                          });

                          parameters.links = data_links;
                });
               }

          }

          console.log(parameters);
          //get the latest date and yesterday date .... if the last spool record is not yesterday  ...the run the spooling function 

      var yesterday_date=dateFormat(d, "yyyy-mm-dd");
      var ten_days_date = dateFormat(d10, "yyyy-mm-dd");
      console.log(yesterday_date);
      var current_date=dateFormat(new Date(), "yyyy-mm-dd");

      ///get yesterday date from mysql database ....if null .....manually get the last spool date and polulate records to the DB table  and 
      /// store records to 

        get_last_report_date(yesterday_date,function(returnValue) {
        // use the return value here instead of like a regular (non-evented) return value
          
           if (typeof returnValue === 'string' || returnValue instanceof String){
              // it's a string
                console.log("string value");
                ///generate the last records and store to mysql
                  ////select * from merchant and group all the records by date higher than string value 
             //   var days_diff = date_diff_indays(yesterday_date,returnValue);
                // console.log(f);
                // if(days_diff < )

                console.log(returnValue + "    " + yesterday_date );

                    generate_daily_reports(yesterday_date,returnValue,function(returndata){

                      console.log("return data");
                       console.log(returndata);
                        //data generated now write to mysqlDB
                        insert_into_reportdb(returndata,yesterday_date,returnValue,function(state,jsonoutput){

                          console.log(state);

                       //   outt.json(jsonoutput);

                          ////now read data from mysql and output res

                          retrieve_report(req,res);

                        });

                    });


              }
              else{
                //object ...get todays report only and send output
               
                spool_dashboard_report(current_date,ten_days_date,parameters,function(response){

                    outt.json(response);

                });
              }



        });

  }




  function spool_dashboard_report(current_date,ten_days_date,parameters,callback){



      spool_report(current_date,ten_days_date,parameters,function(result){
                    var response = [];
                    var response_date = [];
                    var finalarr = [];
                    var date_exist  = false;

                    console.log("spool report data");

                    console.log(result);

                    result.forEach(function(value){
                      var arr ={};
                       value.time= dateFormat(new Date(value.time), "yyyy-mm-dd");
                       arr.active = value.active;
                       arr.inactive = value.inactive;
                       arr.time = value.time;
                         arr.partner = value.partner
                         response_date.push(value.time);
                       if(arr.time == current_date){
                        date_exist = "exists";
                        //dont add new array 
                         var newarr = { active: value.active, inactive: value.inactive, time: current_date, partner: '' };
                      finalarr.unshift(newarr);
                       }
                       //search if exist
                       console.log(arr);
                     
                       response.push(arr);
                    });

                    if(date_exist != "exists"){
                      response.pop();
                      var newarr = { active: '0', inactive: '0', time: current_date, partner: '' };
                      finalarr.unshift(newarr);
                       console.log("why naw");
                      response.push(newarr);
                    }


                       var days_diff = date_diff_indays(current_date,ten_days_date);


                       
       days_diff.forEach(function(value){
                  var arr = {}
         // value.time= dateFormat(new Date(value.time), "yyyy-mm-dd");
            console.log(value);
            console.log(response_date);
            console.log(response_date.indexOf(value));
           if(response_date.indexOf(value) >= 0){
            var index = response_date.indexOf(value);
              var resultnew = result[index];

               resultnew.time= dateFormat(new Date(resultnew.time), "yyyy-mm-dd");
                       arr.active = resultnew.active;
                       arr.inactive = resultnew.inactive;
                       arr.time = resultnew.time;
                         arr.partner = resultnew.partner;
              

           }else{
            arr = { active: '0', inactive: '0', time: value, partner: '' };
           }      

            finalarr.push(arr);
           });
                      console.log("final");
                      console.log(finalarr);

                       console.log(days_diff);

                    var all = {};
                     all.daily_report = finalarr;
                    total_terminals(all,parameters,function(newresponse1){

                       ///run command to add json data for chart3 
                       total_generated_records(newresponse1,parameters,function(newresponse){

                                        callback(newresponse);
                                      //    outt.json(newresponse);
                                      //    console.log(newresponse);

                       });

                    });



                     
                     // outt.render('dashboard');
                  });


  }


function get_linked_partners(id,callback){

     var sql = "select partner from linked_partners where aggregator = ?;";
         connection.query(sql,[id],function(err, rows, fields) {
          if (!err){
          //  rows[0].time = dateFormat(new Date(value.time), "yyyy-mm-dd");
        
        
          callback(rows);

           }else{
              console.log('Error while performing Query.'+ err);
              console.log(err);
          }
        });

}


  function total_generated_records(data,parameters,callback){

    //mysql get all the data per date 
      //  select SUM(total_terminals) ,DATE(date) from generated_report WHERE date >= ( CURDATE() - INTERVAL 10 DAY )  group by DATE(date) ;

 var sql = "select SUM(total_terminals) as num ,DATE(date) as date from generated_report WHERE date >= ( CURDATE() - INTERVAL 10 DAY )  group by DATE(date);";
         connection.query(sql,function(err, rows, fields) {
          if (!err){
                  //  rows[0].time = dateFormat(new Date(value.time), "yyyy-mm-dd");

                  var spool = [];
                  var spool2 = [];
                   var spool3 = [];
              rows.forEach(function(value){
               //  console.log(value);
                  var newdata = {}
                  newdata.num = value.num;
                  newdata.date =dateFormat(new Date(value.date), "yyyy-mm-dd");
                 spool.push(newdata);
                   spool3.push(newdata.date.replace("-",""));



               });   

              console.log("mehhhn");
              console.log(spool3);

                var spool4 = [];
                data.daily_report.forEach(function(value){
                   console.log("ok");

                    console.log(value);
                 
                    if(spool3.indexOf(value.time.replace("-","")) >= 0 ){
                        //leave alone
                        var int = spool3.indexOf(value.time.replace("-",""));
                        console.log("exists");
                        console.log(value.time);
                        spool4.push(spool[int]);
                    }else{
                          var newdata = {}
                  newdata.num = 0;
                  newdata.date =dateFormat(new Date(value.time), "yyyy-mm-dd");
                 spool4.push(newdata);
                    }

                });

                  console.log(spool4);

                   // console.log(rows);

                   data.generated_reports = spool4;

                  callback(data);

           }else{
              console.log('Error while performing Query.');
              console.log(err);
          }
        });


   // callback(data);



  }





function total_terminals(data, parameters,callback){
  ///get total active and inactive ever 

var  queries = [];

    if(parameters.type == ""){
      //select all records
  var sql = "select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL))'inactive' from merchant limit 1;";
  queries = [];
  //"select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL)) 'inactive',DATE(time) as time,partner from merchant where time like ? group by day(time) UNION select total_active as active, total_inactive as inactive, date as time , partner from report where date >= ? order by time desc;";
     
    }else{
  //verify if type is partner or aggregator

      if(parameters.type == "partners"){

          var sql = "select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL))'inactive' from merchant where partner = ? limit 1;";
          queries = [parameters.id];
      }else{
        //get all aggregated partners

        var links = parameters.links;//.toString();
          var sql = "select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL))'inactive' from merchant where partner in (?) limit 1;";
          queries = [parameters.links];

      }


    }


         connection.query(sql,queries,function(err, rows, fields) {
          if (!err){
          //  rows[0].time = dateFormat(new Date(value.time), "yyyy-mm-dd");
          arr = {}
          arr.total_active = rows[0].active;
          arr.total_inactive = rows[0].inactive;

          data.total_terminals = arr;
          callback(data);

           }else{
              console.log('Error while performing Query.');
              console.log(err);
          }
        });


}


  function  spool_report(current_date,days_ten,parameters,callback){

    ///select * from report min 10 and  current time
    /*
    select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL)) 'inactive',DATE(time)
     as time from merchant,report where time like '2019-05-27%' group by day(time) UNION select total_active as active,
      total_inactive as inactive, date as time from report order by time asc limit 12;
    */
    current_date = current_date + "%";

    console.log(current_date);
    var queries = [];

    if(parameters.type == ""){
      //select all records
  var sql = "select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL)) 'inactive',DATE(time) as time,partner from merchant where time like ? group by day(time) UNION select total_active as active, total_inactive as inactive, date as time , partner from report where date >= ? group by date order by time desc;";
  queries = [current_date,days_ten];
  //"select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL)) 'inactive',DATE(time) as time,partner from merchant where time like ? group by day(time) UNION select total_active as active, total_inactive as inactive, date as time , partner from report where date >= ? order by time desc;";
     
    }else{
  //verify if type is partner or aggregator

      if(parameters.type == "partners"){

          var sql = "select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL)) 'inactive',DATE(time) as time,partner from merchant where time like ?  and partner = ? group by day(time) UNION select total_active as active, total_inactive as inactive, date as time , partner from report where date >= ? and partner = ? group by date order by time desc;";
          queries = [current_date,parameters.id,days_ten,parameters.id];
      }else{
        //get all aggregated partners

        var links = parameters.links;//.toString();
         var sql = "select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL)) 'inactive',DATE(time) as time,partner from merchant where time like ?  and partner in (?) group by day(time) UNION select total_active as active, total_inactive as inactive, date as time , partner from report where date >= ? and partner in (?) group by date order by time desc;";
          queries = [current_date,links,days_ten,links];

      }


    }

   //   var sql = "select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL)) 'inactive',DATE(time) as time, partner from merchant where time like ? group by day(time),partner UNION select total_active as active, total_inactive as inactive, date as time , partner from report where date >= ? group by partner order by time desc;";
      //"select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL)) 'inactive',DATE(time) as time from merchant where time like ? group by day(time) UNION select total_active as active, total_inactive as inactive, date as time from report order by time desc limit 10;";
         connection.query(sql,queries,function(err, rows, fields) {
          if (!err){
          //  rows[0].time = dateFormat(new Date(value.time), "yyyy-mm-dd");

           console.log("report from DB");
          console.log(rows);
                   callback(rows);     
           }else{
              console.log('Error while performing Query.');
              console.log(err);
          }
        });


  };


  function insert_into_reportdb(data,yesterday_date,lastvalue,callback){

     var days_diff = date_diff_indays(yesterday_date,lastvalue);


    //console.log(days_diff);
    // exit();
     var newdata = [];
      var newdata2 = [];
     var x = 0;
      var y = 0;

       data.forEach(function(value){
          value.time= dateFormat(new Date(value.time), "yyyy-mm-dd");
          newdataz = {};
          newdataz.active = value.active;
           newdataz.inactive = value.inactive;
            newdataz.STATUS = value.STATUS;
             newdataz.time = value.time;
             newdataz.partner = value.partner
             newdata.push(newdataz);
         // console.log(value);
          
          
           if(days_diff.indexOf(value.time) >= 0){
                    console.log("days diff :" + days_diff);
                    console.log(value.time);
                    console.log("index of :" +days_diff.indexOf(value.time));
               days_diff.splice( days_diff.indexOf(value.time), 1 );
            }
          x = x + 1;
      }); 

     //exit();
     //  console.log(newdata);
   //    console.log(days_diff);

 //      console.log(newdata);
     //exit();

      days_diff.forEach(function(value){

        value= dateFormat(new Date(value), "yyyy-mm-dd");

        console.log("date diff :" + value);
        newdata.push({active: 0, inactive: 0, STATUS: 'active',time: value,partner : ''});
        y = y + 1;
      }); 

      console.log("writing newdaTA TO DB");

      console.log(newdata);

      insert_data_records(newdata,newdata.length,function(value){

          callback(value,newdata);
         // callback2(newdata);

      });



  }





  function generate_daily_reports(yesterday_date,returnValue,callback){

    
  
    yesterday_date = yesterday_date + ' 23:59:59';
    //  var sql = "select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL)) 'inactive',STATUS, time from merchant where time between ? AND ? group by day(time);";
      
      var sql = "select COUNT(IF(STATUS='active',1, NULL)) 'active',COUNT(IF(STATUS='inactive',1, NULL)) 'inactive',STATUS, time ,partner from merchant where time between ? AND ? group by day(time),partner;";

         connection.query(sql,[returnValue,yesterday_date],function(err, rows, fields) {
          if (!err){
                    callback(rows);      
           }else{
              console.log('Error while performing Query.');
          }
        });


  }



   function date_diff_indays(date1, date2) {
    dt2 = new Date(date1);
    dt1 = new Date(date2);
    var count =  Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    data = [];
    var x = 0;
    //console.log(count);
      for (var i = 1; i <= count; i++) {
      //   console.log(i);
           var d = new Date(); // Today!
      d.setDate(d.getDate() - i); // Yesterday!

          //get the latest date and yesterday date .... if the last spool record is not yesterday  ...the run the spooling function 

      var yesterday_date=dateFormat(d, "yyyy-mm-dd");
     // console.log(yesterday_date);

        data[x] = yesterday_date;

        x = x+ 1;
      }
    //  console.log(data);
      return data;
    }



  function insert_data_records(results,legnth,callback){
    var x = 1;

        results.forEach(function(data){

            var sql = 'INSERT INTO ?? (??,??,??,??) VALUES (?,?,?,?)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["report","date","total_active","total_inactive","partner",data.time,data.active,data.inactive,data.partner]);
           

              connection.query(poolquery, function (err, result) {


                 if (!err){
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                  
                    }else{

                        console.log('Error while performing Query.' + err);

                    }
                    console.log(legnth);
              if(x == legnth){
                console.log("hahahahaahahah");

                 callback("true");

              }

              x = x + 1;
              });

          });

  }







  function get_last_report_date(yesterday_date, callback){

        connection.query('SELECT * from report order by date desc limit 10', function(err, rows, fields) {
          if (!err){
         //  console.log(rows);
              
            returned_date =dateFormat(new Date(rows[0].date), "yyyy-mm-dd");
            // console.log(returned_date);
                if(returned_date == yesterday_date){
                     console.log('true');
                    callback(rows); 
                }else{
                    console.log("false have to generate" + returned_date);
                     callback(returned_date);
                }

           }else{
              console.log('Error while performing Query.');
          }
        });


 

  }

  function createuser(req,callback){

    console.log(req);
    var username = req.username;
    var password = req.password;
    var firstname = req.firstname;
    var lastname = req.lastname;
    var priviledge = req.optionyes;
    var email = req.email;


            var sql = 'INSERT INTO ?? (??,??,??,??,??,??) VALUES (?,SHA1(?),?,?,?,?)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["profile","username","password","priviledge","firstname","lastname","email",username,password,priviledge,firstname,lastname,email]);
           
                console.log(poolquery);
              connection.query(poolquery, function (err, result) {
                  if (!err){
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                     callback(result);      
                  
                    }else{

                        console.log('Error while performing Query.' + err);

                         callback(err);  
                    }
              });


  }




  var verifycredentials = function(username,password,callback){

     var sql = "select * from profile where username = ? AND password = ?";
         connection.query(sql,[username,password],function(err, rows, fields) {
          if (!err){
                    callback(rows);      
           }else{
              console.log('Error while performing Query dd.');
          }
        });

  }


  function verifyuser(req,callback){
   var  username =  req.username;

      var sql = "select count(*) as result from profile where username = ?";
         connection.query(sql,[username],function(err, rows, fields) {
          if (!err){
                    callback(rows);      
           }else{
              console.log('Error while performing Query.');
          }
        });

  }

  function verify_merchant(req,res){

console.log(req.query);
var result = {};
//res.json(req.query);

if("merchantid" in req.query){

     var sql = "select COUNT(*) as result from merchant where MERCHANTID = ?";
         connection.query(sql,[req.query.merchantid],function(err, rows, fields) {
          if (!err){
                    
                    console.log(rows[0]);
                    if(rows[0].result > 0){
                       result.value = 1;
                     }   else{
                       result.value = 0;
                     }

                      res.json(result);



           }else{
              console.log('Error while performing Query.');
          }
        });



}else{
  result.value = 0;
  res.json(result);
}

  }

  var Ajo_Thrift_excel = function(param,callback){
///get the data and spool result from mysql;
var dd = param;
//SELECT * FROM `merchant` WHERE `Ajo_Thrift` IN ('2ISW9136')
param = param.toString();
param = param.split(",");

console.log("to String");
console.log(param);

       var sql = "select * from merchant WHERE Ajo_Thrift IN (?)";
         let poolquery = mysql.format(sql,[param]);
           

           console.log(poolquery);
         connection.query(poolquery,function(err, rows, fields) {
          if (!err){
                    
                 //   console.log(rows);
                    callback("success",rows);


           }else{

              console.log('Error while performing Query.');
              callback("error");
          }
        });


  }



  var insert_generated_report = function(param){
    //mysql insert records into table 
    var user = sess.username;
                var sql = 'INSERT INTO ?? (??,??) VALUES (?,?)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["generated_report","user","total_terminals",user,param]);
           

              connection.query(poolquery, function (err, result) {


                 if (!err){
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                  
                    }else{

                        console.log('Error while performing Query.' + err);

                    }
             
   
              });


  }



  var document_uploaded = function(param){
    //mysql insert records into table 
    var user = sess.username;
                var sql = 'INSERT INTO ?? (??,??,??) VALUES (?,?,?)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["documents","user","name","status",user,param,"pending"]);
           

              connection.query(poolquery, function (err, result) {


                 if (!err){
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                  
                    }else{

                        console.log('Error while performing Query.' + err);

                    }
             
   
              });


  }

  var create_partner = function(param,callback){
    //mysql insert records into table 
    var data = {};
    var partner = param.partnername;
                var sql = 'INSERT INTO ?? (??) VALUES (?)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["partners","name",partner]);
           

              connection.query(poolquery, function (err, result) {


                 if (!err){
                   data.status = "success";
            data.value = result;
              callback(data);
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                  
                    }else{
                       data.status = "error";
            data.reason = err;
            callback(data);
                        console.log('Error while performing Query.' + err);

                    }
             
   
              });


  }

  var create_aggregator = function(param,callback){
    //mysql insert records into table 
    var data = {};
    var aggregator = param.aggregatorname;
                var sql = 'INSERT INTO ?? (??) VALUES (?)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["aggregators","name",aggregator]);
           

              connection.query(poolquery, function (err, result) {


                 if (!err){
                   data.status = "success";
            data.value = result;
              callback(data);
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                  
                    }else{
                       data.status = "error";
            data.reason = err;
            callback(data);
                        console.log('Error while performing Query.' + err);

                    }
             
   
              });


  }


  var create_kyc = function(param,callback){
    //mysql insert records into table 
    var data = {};
    var name = param.kycname;
    var email = param.kycemail;
    var password = param.kycpassword;

                var sql = 'INSERT INTO ?? (??,??,??,??) VALUES (?,?,?,SHA1(?))';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["profile","username","email","priviledge","password",name,email,"kyc",password]);
           
                console.log(poolquery);
              connection.query(poolquery, function (err, result) {


                 if (!err){
                   data.status = "success";
            data.value = result;
              callback(data);
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                  
                    }else{
                       data.status = "error";
            data.reason = err;
            callback(data);
                        console.log('Error while performing Query.' + err);

                    }
             
   
              });


  }


  var delete_partner = function(param,callback){
    //mysql insert records into table 
    var data = {};
    var partner = param.partnernameparameter;
                var sql = 'DELETE from ?? where id = ?';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["partners",partner]);
           

              connection.query(poolquery, function (err, result) {


                 if (!err){
                   data.status = "success";
            data.value = result;
              callback(data);
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                  
                    }else{
                       data.status = "error";
            data.reason = err;
            callback(data);
                        console.log('Error while performing Query.' + err);

                    }
             
   
              });


  }

  var delete_aggregator= function(param,callback){
    //mysql insert records into table 
    var data = {};
    var aggregator = param.aggregatornameparameter;
                var sql = 'DELETE from ?? where id = ?';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["aggregators",aggregator]);
           

              connection.query(poolquery, function (err, result) {


                 if (!err){
                   data.status = "success";
            data.value = result;
              callback(data);
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                  
                    }else{
                       data.status = "error";
            data.reason = err;
            callback(data);
                        console.log('Error while performing Query.' + err);

                    }
             
   
              });


  }
  

  var delete_kyc =  function(param,callback){
    //mysql insert records into table 
    var data = {};
    var name = param.kyc_username;
                var sql = "DELETE from ?? where username = ? and priviledge = 'kyc'";
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';

                let poolquery = mysql.format(sql,["profile",name]);
            console.log(poolquery);

              connection.query(poolquery, function (err, result) {


                 if (!err){
                   data.status = "success";
            data.value = result;
              callback(data);
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                     console.log(result);
                  
                    }else{
                       data.status = "error";
            data.reason = err;
            callback(data);
                        console.log('Error while performing Query.' + err);

                    }
             
   
              });


  }



  var documents_result = function(callback){

    var user = sess.username;
if(sess.priviledge == "kyc"){
    user = sess.username;
    var sql = "select * from kyc_document where created_by = ? order by date desc limit 10";
}else{
    user = "pending";
           var sql = "select * from kyc_document where status = ? order by date desc limit 10";
        }
         connection.query(sql,[user],function(err, rows, fields) {
          if (!err){        
            // console.log();

              callback(rows);
           }else{
              console.log('Error while performing Query. :' + err);
          }
        });
  }


  var documents_update_status = function(body,callback){

    var user = sess.username;
    var creator = body.user;
    var id = body.val;
           var sql = "update kyc_document set status = ? , approved_by = ? where id = ? limit 1";
         connection.query(sql,["approved",user,id],function(err, rows, fields) {
          if (!err){
                    
            // console.log();
            /////send email to creator of document
            get_doc_creator(creator,function(response){


                callback(response);

            });

            
           }else{
              console.log('Error while performing Query.');
          }
        });



  }


  function get_doc_creator(name, callback){

      var sql = "select * from profile where username = ? limit 1";
      connection.query(sql,[name],function(err, rows, fields) {
          if (!err){        
            // console.log();

              callback(rows);
           }else{
              console.log('Error while performing Query. :' + err);
          }
        });
  }





  var getprofiles = function(callback) {
       var sql = 'select *, "partners" from ?? union select *, "aggregators" from ??';

     connection.query(sql,["partners","aggregators"],function(err, rows, fields) {
          if (!err){        
            // console.log();

              callback(rows);
           }else{
              console.log('Error while performing Query. :' + err);
          }
        });
    // body...
  }




var write_documents = function(req,dirname,callback){

var result = {};
var formdata = req.body;
var files = req.files.fileuploadnew;

result = formdata;

  result.businesstype=formdata.businesstype;
  result.autopay=formdata.autopay;
  result.quickteller=formdata.quickteller;
  result.paydirect=formdata.paydirect;
  result.webpay=formdata.webpay;
  result.payphone=formdata.payphone;
  result.vtucare=formdata.vtucare;
  result.nillecash=formdata.nillecash;
  result.smartcard=formdata.smartcard;
  result.androidpos=formdata.androidpos;
  result.paycode=formdata.paycode;
  result.idp=formdata.idp;
  result.retailpay=formdata.retailpay;
  result.customizepossolution=formdata.customizepossolution;
  result.iipp=formdata.iipp;
  result.ipg=formdata.ipg;
  result.others=formdata.others;
  result.businessname=formdata.businessname;
  result.registrationnumber=formdata.registrationnumber;
  result.natureofbusiness=formdata.natureofbusiness
  result.sectorindustry=formdata.sectorindustry
  result.operatingbusiness=formdata.operatingbusiness;
  result.registeredbusiness=formdata.registeredbusiness;
  result.officeemail=formdata.officeemail;
  result.officephone=formdata.officephone;
  result.dor=formdata.dor;
  result.tin=formdata.tin;
  result.emailaddress=formdata.emailaddress;
  result.websiteurl=formdata.websiteurl;
  result.description=formdata.description;
  result.pcp=formdata.pcp;
  result.scp=formdata.scp;
  result.pcpdesignation=formdata.pcpdesignation;
  result.scpdesignation=formdata.scpdesignation;
  result.pcpopn=formdata.pcpopn;
  result.scpopn=formdata.scpopn;
  result.pcpmpn=formdata.pcpmpn;
  result.scpmpn=formdata.scpmpn;
  result.accountname=formdata.accountname;
  result.accountnumber=formdata.accountnumber;
  result.accounttype=formdata.accounttype;
  result.accountbank=formdata.accountbank;
  result.otherinfo=formdata.otherinfo;




if(result.businesstype == "Private Limited Liability Company Registration Form"){
  result.businesstype_code = 1;
 
}else if(result.businesstype == "Sole Proprietor Registration Form"){
  result.businesstype_code = 2;

}else if(result.businesstype == "Public Limited Liability Company Registration Form"){
  result.businesstype_code = 3;

}else if(result.businesstype == "Non-Governmental Organization, Charities and Religious Organizations"){
  result.businesstype_code = 4;

}


result.file = [];
console.log("names");
if(files.length == 'undefined' || files.length == null){

result.file[0] = files.name;

}else{
  files.forEach(function(values){
    result.file.push(values.name);
  });
}

for(var i = result.file.length; i < 7; i ++){

  result.file.push("");

}






  var sql = 'INSERT INTO ?? (??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,\
            ??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,\
              ??,??,??,??,??,??,??,??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,\
              ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                var poolquery = mysql.format(sql,["kyc_document","businesstype","businesstype_code",
                  "cat_autopay","cat_quickteller","cat_paydirect","cat_webpay","cat_payphone","cat_vtucare",
                  "cat_nillecash","cat_smartcard","cat_androidpos","cat_paycode","cat_ <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
_digital_product",
                  "cat_retailpay","cat_customizepossolution","cat_iip","cat_ipg","cat_others","org_businessname",
                  "org_registrationnumber","org_natureofbusiness","org_sectorindustry","org_operatingbusiness",
                  "org_registeredbusiness","org_officeemail","org_officephone","org_dor","org_tin",
                  "org_emailaddress","org_websiteurl","org_description","con_pcp","con_scp",
                  "con_pcpdesignation","con_scpdesignation","con_pcpopn","con_scpopn","con_pcpmpn","con_scpmpn",
                  "con_accountname","con_accountnumber","con_accounttype","con_accountbank","con_otherinfo",
                  "dirname","filename1","filename2","filename3","filename4","filename5","filename6","filename7","status","created_by",result.businesstype,result.businesstype_code,
                  result.autopay,result.quickteller,result.paydirect,result.webpay,result.payphone,result.vtucare,
                  result.nillecash,result.smartcard,result.androidpos,result.paycode,result.idp,result.retailpay,result.customizepossolution,
                  result.iipp,result.ipg,result.others,result.businessname,result.registrationnumber,result.natureofbusiness,result.sectorindustry
                  ,result.operatingbusiness,result.registeredbusiness,result.officeemail,result.officephone,result.dor,result.tin,result.emailaddress,
                  result.websiteurl,result.description,result.pcp,result.scp,result.pcpdesignation,result.scpdesignation,
                  result.pcpopn,result.scpopn,result.pcpmpn,result.scpmpn,result.accountname,result.accountnumber,
                  result.accounttype,result.accountbank,result.otherinfo,dirname,result.file[0],result.file[1],"","","","","","pending",sess.username]);


//console.log(poolquery);
console.log(result);

 var jsdata = {};

              connection.query(poolquery, function (err, result) {
                 if (!err){
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                       jsdata.status = "success";
                   jsdata.reason = "Successfully stored record";
                   callback(jsdata);
                  
                    }else{
                         jsdata.status = "error";
                         jsdata.reason = err;
                         callback(jsdata);
                        console.log('Error while performing Query.' + err);
                    }
               });



//console.log(result);

}


var selectusers = function(username, callback){
  param = {};

  username = username + "%";

var sql = 'select * from profile where username like ? and priviledge in (?) order by username asc limit 5';

     connection.query(sql,[username,["sadmin","admin","user"]],function(err, rows, fields) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = rows;
              callback(param);
           }else{
                param.status = "error";
            param.resason = err;
             callback(param);
              console.log('Error while performing Query. :' + err);
          }
        });
}


var selectpartner = function(username, callback){
  param = {};

  username = username + "%";

var sql = 'select * from partners where name like ? order by name asc limit 5';

     connection.query(sql,[username],function(err, rows, fields) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = rows;
              callback(param);
           }else{
                param.status = "error";
            param.resason = err;
             callback(param);
              console.log('Error while performing Query. :' + err);
          }
        });
}


var selectpartnerall = function(username, callback){
  param = {};

  username = username + "%";

var sql = 'select * from partners where name like ? order by name asc';

     connection.query(sql,[username],function(err, rows, fields) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = rows;
              callback(param);
           }else{
                param.status = "error";
            param.resason = err;
             callback(param);
              console.log('Error while performing Query. :' + err);
          }
        });
}

var selectallpartner = function(callback){
  param = {};

  //username = username + "%";

var sql = 'select * from partners order by name asc';

     connection.query(sql,[],function(err, rows, fields) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = rows;
              callback(param);
           }else{
                param.status = "error";
            param.resason = err;
             callback(param);
              console.log('Error while performing Query. :' + err);
          }
        });
}



var selectaggregator = function(username, callback){
  param = {};

  username = username + "%";

var sql = 'select * from aggregators where name like ? order by name asc limit 5';

     connection.query(sql,[username],function(err, rows, fields) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = rows;
              callback(param);
           }else{
                param.status = "error";
            param.resason = err;
             callback(param);
              console.log('Error while performing Query. :' + err);
          }
        });
}


var select_aggregated_partners = function(id, callback){
  param = {};

  aggregator_id = id;

var sql = 'select a.partner as partnerid,b.name as partnername from linked_partners a,partners b where a.partner = b.id and a.aggregator = ?;'

     connection.query(sql,[aggregator_id],function(err, rows, fields) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = rows;
              callback(param);
           }else{
                param.status = "error";
            param.resason = err;
             callback(param);
              console.log('Error while performing Query. :' + err);
          }
        });
}

var modify_password = function(param,callback){

  var password = param.newpassword2;
  var username = param.usernameparameter;

  var data = {};
        var sql = "update profile set password = SHA1(?) where username = ? limit 1";
         connection.query(sql,[password,username],function(err, rows, fields) {
          if (!err){
                    
            // console.log();
            data.status = "success";
            data.value = rows;
              callback(rows);
           }else{
            data.status= "error";
            data.reason = err;
              console.log('Error while performing Query.' + err);
          }
        });



}


var password_kyc = function(param,callback){

  var password = param.password2;
  var username = param.kycuser_name;

  var data = {};
        var sql = "update profile set password = SHA1(?) where username = ? and priviledge ='kyc' limit 1";
         connection.query(sql,[password,username],function(err, rows, fields) {
          if (!err){
                    
            // console.log();
            data.status = "success";
            data.value = rows;
              callback(rows);
           }else{
            data.status= "error";
            data.reason = err;
              console.log('Error while performing Query.' + err);
          }
        });



}

var modify_profile = function(param,callback){

  var email = param.emailmodify;
  var roles = param.rolesmodify;
  var firstname = param.firstnamemodify;
  var lastname = param.lastnamemodify;
  var username = param.usernameparameter;

  var data = {};
        var sql = "update profile set email = ?,priviledge = ?,firstname = ?, lastname = ? where username = ? limit 1";
         connection.query(sql,[email,roles,firstname,lastname,username],function(err, rows, fields) {
          if (!err){
                    
            // console.log();
            data.status = "success";
            data.value = rows;
              callback(rows);
           }else{
            data.status= "error";
            data.reason = err;
              console.log('Error while performing Query.' + err);
          }
        });



}


var modify_partner = function(param,callback){

  var partner_id = param.partnernameparameter;
  var partner_name = param.newpartner;


  var data = {};
        var sql = "update partners set name = ? where id = ? limit 1";
         connection.query(sql,[partner_name,partner_id],function(err, rows, fields) {
          if (!err){
                    
            // console.log();
            data.status = "success";
            data.value = rows;
              callback(rows);
           }else{
            data.status= "error";
            data.reason = err;
              console.log('Error while performing Query.' + err);
          }
        });



}


var modify_aggregator = function(param,callback){

  var aggregator_id = param.aggregatornameparameter;
  var aggregator_name = param.newaggregatorname;
  var linked_partners_data = param.multi;

  var data = {};
    //update name

        var sql = "update aggregators set name = ? where id = ? limit 1";
         connection.query(sql,[aggregator_name,aggregator_id],function(err, rows, fields) {
          if (!err){
                    
            // console.log(sql);
            //data.status = "success";
            //data.value = rows;
             // callback(rows);
             //delete * and insert new links 
             linked_partners(aggregator_id,linked_partners_data,function(response){

                if(response.status == "success"){
                     data.status = "success";
                      data.value = rows;
                     callback(rows);
                }else{
                  data.status= "error";
                  data.reason = response.reason;
                   console.log('Error while performing Query.' + err);
                }

             });



           }else{
            data.status= "error";
            data.reason = err;
              console.log('Error while performing Query.' + err);
          }
        });



}


 function linked_partners(aggregator_id,linked_partners_data,callback){

  //delete first


       var sql = 'DELETE from ?? where aggregator = ?';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["linked_partners",aggregator_id]);
           

              connection.query(poolquery, function (err, result) {


                 if (!err){
                    var x = 0;
                      linked_partners_data.forEach(function(value){
                        console.log(value);

                        insert_linked_partners(aggregator_id,value);

                        x = x + 1;
                            if(x == linked_partners_data.length){

                              data.status = "success";
                              data.value = result;

                              callback(data);

                            }
                       });


                  
                    }else{
                       data.status = "error";
            data.reason = err;
            callback(data);
                        console.log('Error while performing delete Query.' + err);

                    }
             
   
              });

 }

  function insert_linked_partners(aggregator_id,value){


            var sql = 'INSERT INTO ?? (??,??) VALUES (?,?)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["linked_partners","aggregator","partner",aggregator_id,value]);
           

              connection.query(poolquery, function (err, result) {


                 if (!err){
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                  
                    }else{

                        console.log('Error while performing Query.' + err);

                    }
              });
  }



  var kyc_add_partners = function(param,callback){
    data = {};
    var username = param.kyc_username;
    //get the  id of the kyc user and add thje partner to the linkied kyc
    var sql = 'select id from profile where username = ? limit 1';

     connection.query(sql,[username],function(err, rows, fields) {
          if (!err){        
            // console.log();
           //  param.status = "success";
            //  param.result = rows;
             // callback(param);
             add_kyc_partner(rows[0].id, param.kyc_partners,function(values){
              callback(values);
            });
           }else{
                data.status = "error";
            data.resason = err;
             callback(data);
              console.log('Error while performing Query. :' + err);
          }
        });


  }



  var get_kyc_partner = function(id,callback){
    data = {};
    var identification = id;
    //get the  id of the kyc user and add thje partner to the linkied kyc
    var sql = 'select * from partners where id = (select partner from linked_kyc where kyc_user =? limit 1) limit 1;';

     connection.query(sql,[identification],function(err, rows, fields) {
          if (!err){        
            // console.log();
             data.status = "success";
              data.result = rows;
              callback(data);
             //add_kyc_partner(rows[0].id, param.kyc_partners,function(values){
            //  callback(rows);
           
           }else{
                data.status = "error";
            data.resason = err;
             callback(data);
              console.log('Error while performing Query. :' + err);
          }
        });


  }

function add_kyc_partner(kyc_id,partner_id,callback){

  data = {};
var sql = 'INSERT INTO ?? (??,??) VALUES (?,?)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
                let poolquery = mysql.format(sql,["linked_kyc","kyc_user","partner",kyc_id,partner_id]);
            

              connection.query(poolquery, function (err, result) {


                 if (!err){
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                    data.status = "success";
                    data.result = result;
                    callback(data);
                  
                    }else{
                      data.status = "error";
                      data.reason = err;
                        console.log('Error while performing Query.' + err);
                        callback(data);

                    }
              });


}





module.exports = {
   store_merchant_rec : store_merchant_rec,
   verifyuser : verifyuser,
   createuser : createuser,
   Ajo_Thrift_excel : Ajo_Thrift_excel,
   verifycredentials : verifycredentials,
   update_Ajo_Thrift : update_Ajo_Thrift,
   verify_merchant : verify_merchant,
   insert_generated_report : insert_generated_report,
   document_uploaded : document_uploaded,
   documents_result : documents_result,
   documents_update_status : documents_update_status,
   write_documents : write_documents,
   getprofiles : getprofiles,
   selectusers : selectusers,
   modify_password : modify_password,
   modify_profile : modify_profile,
   selectpartner : selectpartner,
   create_partner : create_partner,
   delete_partner : delete_partner,
   modify_partner : modify_partner,
   selectaggregator : selectaggregator,
   select_aggregated_partners : select_aggregated_partners,
   selectallpartner : selectallpartner,
   create_aggregator : create_aggregator,
   delete_aggregator : delete_aggregator,
   modify_aggregator : modify_aggregator,
   create_kyc : create_kyc,
   password_kyc : password_kyc,
   delete_kyc : delete_kyc,
   selectpartnerall : selectpartnerall,
   kyc_add_partners : kyc_add_partners,
   get_kyc_partner : get_kyc_partner,
   retrieve_report : retrieve_report
}