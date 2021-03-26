var dateFormat = require('dateformat');
var express = require("express");
var myParser = require("body-parser");
var app = express();
const excel = require('exceljs');
const querystring = require('querystring');
var mail = require('../model/mail');
var mysql = require('../model/mysql');
var log = require('../model/log');


var elastic_url = 'https://search-samtest-noiakk4d5co5heeythu7cii5aq.eu-west-1.es.amazonaws.com/merchantapp/merchantdetails';

var elastic_log_url = "https://search-samtest-noiakk4d5co5heeythu7cii5aq.eu-west-1.es.amazonaws.com/merchantapp_log/log";


var store_merchant_details = function(param,termid,callback){
//app.use(myParser.json({extended : true}));
//console.log(JSON.stringify(param));

//elastic  search write to index table 
var current_date=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
param.date = current_date;

param.Ajo_Thrift_VALUE = termid;
  console.log(param.Ajo_Thrift_VALUE);


    var request = require("request");

    var options = { method: 'POST',
      url: elastic_url,
      headers: 
       {'Content-Type': 'application/json' },
      body: param,
      json: true };

    request(options, function (error, response, body) {
      if (!error){//throw new Error(error);

        callback("ok");
        }else{

        callback("failed");
          console.log("failed to store merchant data");

        }
             // console.log(body);
            });



  }


var store_log_details = function(param,callback){
//app.use(myParser.json({extended : true}));
//console.log(JSON.stringify(param));

//elastic  search write to index table 
var current_date=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
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

      callback("ok");
      }else{

      callback("failed");
        console.log("failed to store merchant data");

}
     // console.log(body);
    });



  }


function string_escape(data){

  //.   + - && || ! ( ) { } [ ] ^ " ~ * ? : \
    data =  data.replace("^", "\\^");
     data =  data.replace('"', '\\"');

  return data;
}


function search_query(param){
var data = {};
console.log(param);

///param.searchall

///loop  through all the records 
              var x = 0;
               data.search  = [];
             // console.log(param.searchall.length;


             if(typeof param.searchall === 'string'){

             param.searchall =  string_escape(param.searchall);

              console.log("true");
                   if(param.criteria1 == "ALLRECORDS"){
                       data.search.push({ query_string:{query:'*'+param.searchall+'*'}});
                  }else if(param.criteria1 == "Ajo_Thrift"){
                     param.criteria1 = "Ajo_Thrift_VALUE";
                    data.search.push({query_string:{default_field: param.criteria1,query : '*'+param.searchall+'*'}});
                  }else{
                    //write the function back to search in only columns

                    data.search.push({query_string:{default_field: param.criteria1,query : '*'+param.searchall+'*'}});
                    // data.search.push({query_string:{default_field: param.criteria1,query : '*'+param.searchall+'*'}});
            //    data.search[1] = ("{ query_string: { query: '**' } }");
              }
             // data.search = JSON.stringify(data.search);
             }else{

              param.searchall.forEach(function(value){

                  value = string_escape(value);
                 //reaad the values and analyze what to do 

                     console.log(value);
                      console.log(x);


                        if(param.criteria1[x] == "ALLRECORDS"){
                             data.search.push({ query_string:{query:'*'+  value +'*'}});
                        }else if(param.criteria1[x] == "Ajo_Thrift"){
                      param.criteria1[x] = "Ajo_Thrift_VALUE";
                            data.search.push({query_string:{default_field: param.criteria1[x],query : '*'+value+'*'}});
                      }else{
                              //start soecifying other columns for searching 
                                  data.search.push({query_string:{default_field: param.criteria1[x],query : '*'+value+'*'}});
                        }
                     x = x + 1;

              });

            }
           //  data.search = JSON.stringify(data.search);
           //  data.search = JSON.parse(data.search);


/*

    if(param.searchall == ""){
        data.search ='**';
    }else{
      data.search ='*'+param.searchall+'*';
    } */
    
    if(param.startDate == ""){
        data.startDate ='1901-12-16 00:00:00';
    }else{
     // data.startDate = dateFormat(new Date(param.startDate), "yyyy-mm-dd h:MM:ss")
      data.startDate = dateFormat(new Date(param.startDate), "yyyy-mm-dd")
      data.startDate  = data.startDate + " 00:00:00";
    }

    if(param.endDate == ""){
        data.endDate = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
    }else{
   //   data.endDate = dateFormat(new Date(param.endDate), "yyyy-mm-dd h:MM:ss");   //param.endDate;
    data.endDate = dateFormat(new Date(param.endDate), "yyyy-mm-dd"); 
     data.endDate =  data.endDate + " 23:59:59";

    //  var datum = dateFormat(new Date('05/10/2019'), "yyyy-mm-dd h:MM:ss");;
    }
//data.search = "{ query_string: { query: '**' } },";

console.log(data.search);

return data;
}




var search_merchant_doc_get = function(param, res){



  console.log(param);
        params = {};
  params.sess = sess;
        if(sess.priviledge == "sadmin"){
    params.sess.sadmin = "sadmin";
  }
      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }


    if(param.index == undefined || param.index > 9){

             res.render('search',params);                
                
    }else{
  
      var querydata = {};
       querydata.search = { query_string:{query:'**'}};

      var d = new Date(); // Today!
      outt = res;
      d.setDate(d.getDate() - param.index); // Yesterday!

          //get the latest date and yesterday date .... if the last spool record is not yesterday  ...the run the spooling function 
     // var yesterday_date=dateFormat(d, "yyyy-mm-dd");
            querydata.startDate = dateFormat(d, "yyyy-mm-dd")
      querydata.startDate  = querydata.startDate + " 00:00:00";

              querydata.endDate = dateFormat(d, "yyyy-mm-dd")
      querydata.endDate  = querydata.endDate + " 23:59:59";



      console.log(querydata);

         var request = require("request");

              var options = { method: 'POST',
                url: 'https://search-samtest-noiakk4d5co5heeythu7cii5aq.eu-west-1.es.amazonaws.com/merchantapp/merchantdetails/_search',
                headers: 
                 { 'Postman-Token': 'a24660f7-ea6a-a65f-c580-fb1ba37fb504',
                   'Cache-Control': 'no-cache',
                   'Content-Type': 'application/json' },
                body: 
                 { query: 
                    { bool: 
                       { must: 
                          [ querydata.search,
                            { range: { date: { lt: querydata.endDate, gt: querydata.startDate } } } ],
                         must_not: [],
                         should: [] } },
                   from: 0,
                   size: 100,
                   sort: { date: { order: 'desc' } } },
                json: true };

              request(options, function (error, response, body) {
                if (error) throw new Error(error);

              //     data = body;
              //  console.log(body.hits.hits);
           // res.render('search',body.hits.hits[0]._source)
           var spool = {};
           spool.search = JSON.stringify(querydata.search);
            spool.endDate =  querystring.escape(querydata.endDate);
            spool.startDate = querystring.escape(querydata.startDate);
            body.hits.spool = spool;
            body.sess =  params.sess;
            console.log(body);

            console.log(body.hits.spool);

            body.hits.notification = {}
            if(body.hits.total > 0){
              body.hits.notification.truedata = "Successfully Generated Result Total :" + body.hits.total;

            }else{
              body.hits.notification.falsedata = "Total Result Generated : 0";
            }

       // console.log("result:" +params);
          //  console.log(querystring.unescape(spool.enddate));
           res.render('search',body)

          });   

    }




}


  var search_merchant_doc = function(param,res){
//app.use(myParser.json({extended : true}));
//console.log(JSON.stringify(param));

//write algorithm to process request form to json for Elastic DB
    console.log(param.body.searchall);
        params = {};
  params.sess = sess;
        if(sess.priviledge == "sadmin"){
    params.sess.sadmin = "sadmin";
  }
      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }


    if(param.body.searchall == undefined){

             res.render('search',params);                
                
    }else{
    
  //  log.log_info("search","Searched for query " + JSON.stringify(param.body),"300",sess.username,sess.priviledge);
      var querydata = search_query(param.body);

      console.log(querydata);

         var request = require("request");

              var options = { method: 'POST',
                url: 'https://search-samtest-noiakk4d5co5heeythu7cii5aq.eu-west-1.es.amazonaws.com/merchantapp/merchantdetails/_search',
                headers: 
                 { 'Postman-Token': 'a24660f7-ea6a-a65f-c580-fb1ba37fb504',
                   'Cache-Control': 'no-cache',
                   'Content-Type': 'application/json' },
                body: 
                 { query: 
                    { bool: 
                       { must: 
                          [ querydata.search,
                            { range: { date: { lt: querydata.endDate, gt: querydata.startDate } } } ],
                         must_not: [],
                         should: [] } },
                   from: 0,
                   size: 100,
                   sort: { date: { order: 'desc' } } },
                json: true };

              request(options, function (error, response, body) {
               // if (error) throw new Error(error);
                if(!error){
log.log_success("search","Successfully performed query : "+ JSON.stringify(querydata.search),"201",sess.username,sess.priviledge);
                          //     data = body;
                          //  console.log(body.hits.hits);
                       // res.render('search',body.hits.hits[0]._source)
                       var spool = {};
                       spool.search = JSON.stringify(querydata.search);
                        spool.endDate =  querystring.escape(querydata.endDate);
                        spool.startDate = querystring.escape(querydata.startDate);
                        body.hits.spool = spool;
                        body.sess =  params.sess;
                        console.log(body);

                        console.log(body.hits.spool);

                        body.hits.notification = {}
                        if(body.hits.total > 0){
                          body.hits.notification.truedata = "Successfully Generated Result Total :" + body.hits.total;

                        }else{
                          body.hits.notification.falsedata = "Total Result Generated : 0";
                        }

                   // console.log("result:" +params);
                      //  console.log(querystring.unescape(spool.enddate));
                       res.render('search',body)
                 }else{
                        log.log_error("search","Failed to perform query : " + error,"101",sess.username,sess.priviledge);
                 }

          });   

    }

  }




  var search_merchant_doc_query = function(param,res){
//app.use(myParser.json({extended : true}));
//console.log(JSON.stringify(param));

//write algorithm to process request form to json for Elastic DB
    console.log(param);

        params = {};
  params.sess = sess;
        if(sess.priviledge == "sadmin"){
    params.sess.sadmin = "sadmin";
  }
      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }


    if(param.search == undefined){

             res.render('search',params);                
                
    }else{
  
      var querydata = {};
      querydata.search = JSON.parse(param.search);
      querydata.endDate = querystring.unescape(param.enddate);
      querydata.startDate = querystring.unescape(param.startdate);

      //search_query(param);

      console.log(querydata);

         var request = require("request");

              var options = { method: 'POST',
                url: 'https://search-samtest-noiakk4d5co5heeythu7cii5aq.eu-west-1.es.amazonaws.com/merchantapp/merchantdetails/_search',
                headers: 
                 { 'Postman-Token': 'a24660f7-ea6a-a65f-c580-fb1ba37fb504',
                   'Cache-Control': 'no-cache',
                   'Content-Type': 'application/json' },
                body: 
                 { query: 
                    { bool: 
                       { must: 
                          [ querydata.search,
                            { range: { date: { lt: querydata.endDate, gt: querydata.startDate } } } ],
                         must_not: [],
                         should: [] } },
                   from: 0,
                   size: 10000,
                   sort: { date: { order: 'desc' } } },
                json: true };

              request(options, function (error, response, body) {
                if (error) throw new Error(error);

              //     data = body;
              //  console.log(body);
           // res.render('search',body.hits.hits[0]._source)
           var spool = {};
           spool.search = JSON.stringify(querydata.search);
            spool.endDate = JSON.stringify(querydata.endDate);
            spool.startDate = JSON.stringify(querydata.startDate);
            body.hits.spool = spool;
            //console.log(body.hits);


            /////parse data to json to excel encoder


            generate_excel_binary(body.hits,res);


         //  res.render('search',body.hits)
     //    res.status(200).end(JSON.stringify(body.hits));

              });   

    }

  }




 var search_merchant_doc_query_mysql = function(param,res){

        console.log(param.length);




     let workbook = new excel.Workbook(); //creating workbook
     let worksheet = workbook.addWorksheet('Customers'); //creating worksheet
            worksheet.columns = [
                { header: 'MERCHANT ID', key: 'MERCHANTID', width: 60 },
              //  { header: 'Ajo_Thrift', key: 'Ajo_Thrift', width: 60 },
               // { header: 'DATE', key: 'DATE', width: 60},
                { header: 'MERCHANT NAME', key: 'MERCHANTNAME', width: 60},
                { header: 'CONTACT TITLE', key: 'CONTACTTITLE', width: 60},
                { header: 'CONTACT NAME', key: 'CONTACTNAME', width: 60},
                { header: 'MOBILE PHONE', key: 'MOBILEPHONE', width: 60},
                { header: 'EMAIL', key: 'EMAIL', width: 60},
                { header: 'EMAIL ALERTS', key: 'EMAILALERTS', width: 60},
                { header: 'PHYSICAL ADDR', key: 'PHYSICALADDRESS', width: 60},
                { header: 'TERMINAL MODEL CODE', key: 'user_code', width: 60},
                 { header: 'TERMINAL ID', key: 'Ajo_Thrift', width: 60 },

                { header: 'BANK CODE', key: 'BANKCODE', width: 60},
                { header: 'OLD BANK ACC NO', key: 'BANKACCTNO', width: 60},

                { header: 'NEW BANK ACC NO', key: 'NEWBANKACCTNO', width: 60},

                 { header: 'BANK ACC TYPE', key: 'BANKACCTYPE', width: 60},
                { header: 'SLIP HEADER', key: 'SLIPHEADER', width: 60},
                { header: 'SLIP FOOTER', key: 'SLIPFOOTER', width: 60},
                { header: 'BUSINESS OCCUPATION CODE', key: 'BUSINESSOCCUPATIONCODE', width: 60},
                { header: 'MERCHANT CATEGORY CODE', key: 'BVN', width: 60},
                { header: 'STATE CODE', key: 'STATECODE', width: 60},
                { header: 'VISA ACQUIRER ID NUMBER', key: 'nill', width: 60},
                { header: 'nill ACQUIRER ID NUMBER', key: 'nillACQUIRERIDNUMBER', width: 60},
                { header: 'MASTERCARD ACQUIRER ID NUMBER', key: 'nill', width: 60},
                { header: 'TERMINAL OWNER CODE', key: 'TERMINALOWNERCODE', width: 60},
                { header: 'LGA/LCDA', key: 'LGALCDA', width: 60},
                { header: 'POST CODE', key: 'POSTCODE', width: 60},
                { header: 'URL', key: 'URL', width: 60},
                { header: 'MERCHANT ACCOUNT NAME', key: 'MERCHANTACCOUNTNAME', width: 60},
                { header: 'PTSP', key: 'PTSP', width: 60},
                { header: 'DEVICETYPE', key: 'DEVICETYPE', width: 60},
                { header: 'nill', key: 'nill', width: 60},
                { header: 'DEVICESN', key: 'DEVICESN', width: 60},
                { header: 'APPNAME', key: 'APPNAME', width: 60},
                { header: 'APPVERSION', key: 'APPVERSION', width: 60},
                { header: 'NETWORKTYPE', key: 'NETWORKTYPE', width: 60}

            ];




var records =          param.forEach(function(data){

    // value._source = {};
    var value = {};
    value._source = data;
  //var x = x + 1;
  //console.log(x);
                   // data.Ajo_Thrift_VALUE = value;
                 //    elasticsearch.store_merchant_details(data);
                 var sorted_data2 = {MERCHANTID: value._source.MERCHANTID, 
                  Ajo_Thrift: value._source.Ajo_Thrift ,
                  //DATE: value._source.date, 
                  MERCHANTNAME: value._source.MERCHANTNAME,
                  CONTACTTITLE: value._source.CONTACTTITLE,
                  CONTACTNAME: value._source.CONTACTNAME,
                  MOBILEPHONE: value._source.MOBILEPHONE,
                  EMAIL: value._source.EMAIL,
                  EMAILALERTS: value._source.EMAILALERTS,
                  PHYSICALADDRESS: value._source.PHYSICALADDRESS,
                  user_code: value._source.user_code,
                  BANKCODE: value._source.BANKCODE,
                  BANKACCTNO: value._source.BANKACCTNO,
                  NEWBANKACCTNO: value._source.BANKACCTNO,
                  BANKACCTYPE: value._source.BANKACCTYPE,
                  SLIPHEADER: value._source.SLIPHEADER,
                  SLIPFOOTER: value._source.SLIPFOOTER,
                  BUSINESSOCCUPATIONCODE: value._source.BUSINESSOCCUPATIONCODE,
                  BVN: value._source.BVN,
                  STATECODE: value._source.STATECODE,
                  nill: value._source.nill,
                  nillACQUIRERIDNUMBER: value._source.nillACQUIRERIDNUMBER,
                  nill: value._source.nill,
                  TERMINALOWNERCODE: value._source.TERMINALOWNERCODE,
                  LGALCDA: value._source.LGALCDA,
                  POSTCODE: value._source.POSTCODE,
                  URL: value._source.URL,
                  MERCHANTACCOUNTNAME: value._source.MERCHANTACCOUNTNAME,
                  PTSP: value._source.PTSP,
                  DEVICETYPE: value._source.DEVICETYPE,
                  nill: value._source.nill,
                  DEVICESN: value._source.DEVICESN,
                  APPNAME: value._source.APPNAME,
                  APPVERSION: value._source.APPVERSION,
                  NETWORKTYPE: value._source.NETWORKTYPE };
                   worksheet.addRow(sorted_data2);

              });

      

          mysql.insert_generated_report(param.length);


       var FILEDATE = dateFormat(new Date(), "yyyymmddhMMss");
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename=' + 'ISWISW'+ FILEDATE+'.xlsx');
      
            return workbook.xlsx.write(res)
                  .then(function() {
                        res.status(200).end();
            });



  }





  var getlog  = function(param1,param2,param3,callback){
    //parse param to variables 


      var querydata = {};
      querydata.search = param1;
      querydata.search2  = param2;
       querydata.search3  = param3;
      querydata.limit = 1000;
      querydata.from  = 0;

          if( querydata.search2 == ""){
         querydata.search2 ='1901-12-16 00:00:00';
    }else{
     // data.startDate = dateFormat(new Date(param.startDate), "yyyy-mm-dd h:MM:ss")
       querydata.search2 = dateFormat(new Date(querydata.search2), "yyyy-mm-dd")
       querydata.search2  =  querydata.search2 + " 00:00:00";
    }
              if( querydata.search3 == ""){
         querydata.search3 ='2100-12-16 00:00:00';
    }else{
     // data.startDate = dateFormat(new Date(param.startDate), "yyyy-mm-dd h:MM:ss")
       querydata.search3 = dateFormat(new Date(querydata.search3), "yyyy-mm-dd")
       querydata.search3  =  querydata.search3 + " 00:00:00";
    }


      console.log("querydata");
      console.log(querydata);

  //call the query 
           var request = require("request");

              var options = { method: 'POST',
                url: elastic_log_url+'/_search',
                headers: 
                  {'Postman-Token': 'a24660f7-ea6a-a65f-c580-fb1ba37fb504',
                   'Cache-Control': 'no-cache',
                   'Content-Type': 'application/json'},
                    body: 
                     { query: 
                        { bool: 
                           { must: 
                            [ { query_string: { query: '*'+querydata.search+'*' } },
                                  {
                                          range: {
                                            date: {
                                              lt: querydata.search3,
                                              gt: querydata.search2
                                            }
                                          }
                                  }
                                ],
                           must_not: [],
                           should: [] } },
                       from: querydata.from,
                       size: querydata.limit,
                       sort: { date: { order: 'desc' } } },
                    json: true };

                  request(options, function (error, response, body) {
                    if (error) throw new Error(error);

                  //     data = body;
                    console.log(body);
                callback(body.hits);
         
                //console.log(body.hits);


            /////parse data to json to excel encoder



         //  res.render('search',body.hits)
     //    res.status(200).end(JSON.stringify(body.hits));

          });   

    }



      








  var get_table_result = function(param, res){
    //parse param to variables 
      if(param.search == undefined){
        res.render('search');                             
      }else{
console.log("param");
console.log(param);
      var querydata = {};
      querydata.search = JSON.parse(param.search);
      querydata.endDate = querystring.unescape(param.endDate);
      querydata.startDate = querystring.unescape(param.startDate);
      querydata.limit = param.limit;
      querydata.page  = param.page;

      if(querydata.page == 1){
        querydata.from = 0;
        console.log("its 1 value");
      }else{
        console.log("page value is :"+querydata.page);
        querydata.from = (querydata.page - 1) * querydata.limit;
        //querydata.from  = (querydata.from  * querydata.count);
      }

      console.log("querydata");
      console.log(querydata);

  //call the query 
           var request = require("request");

              var options = { method: 'POST',
                url: 'https://search-samtest-noiakk4d5co5heeythu7cii5aq.eu-west-1.es.amazonaws.com/merchantapp/merchantdetails/_search',
                headers: 
                  {'Postman-Token': 'a24660f7-ea6a-a65f-c580-fb1ba37fb504',
                   'Cache-Control': 'no-cache',
                   'Content-Type': 'application/json'},
                    body: 
                     { query: 
                        { bool: 
                           { must: 
                              [ querydata.search,
                                { range: { date: { lt: querydata.endDate, gt: querydata.startDate } } } ],
                             must_not: [],
                             should: [] } },
                       from: querydata.from,
                       size: querydata.limit,
                       sort: { date: { order: 'desc' } } },
                    json: true };

                  request(options, function (error, response, body) {
                    if (error) throw new Error(error);

                  //     data = body;
                    console.log(body);
                res.json(body.hits);
         
                //console.log(body.hits);


            /////parse data to json to excel encoder



         //  res.render('search',body.hits)
     //    res.status(200).end(JSON.stringify(body.hits));

          });   

    }



      }


  


  function generate_excel_binary(param, res){

      console.log(param);
    var sorted_data = [];


     let workbook = new excel.Workbook(); //creating workbook
     let worksheet = workbook.addWorksheet('Customers'); //creating worksheet
            worksheet.columns = [
             

                { header: 'MERCHANT ID', key: 'MERCHANTID', width: 60 },
              //  { header: 'Ajo_Thrift', key: 'Ajo_Thrift', width: 60 },
               // { header: 'DATE', key: 'DATE', width: 60},
                { header: 'MERCHANT NAME', key: 'MERCHANTNAME', width: 60},
                { header: 'CONTACT TITLE', key: 'CONTACTTITLE', width: 60},
                { header: 'CONTACT NAME', key: 'CONTACTNAME', width: 60},
                { header: 'MOBILE PHONE', key: 'MOBILEPHONE', width: 60},
                { header: 'EMAIL', key: 'EMAIL', width: 60},
                { header: 'EMAIL ALERTS', key: 'EMAILALERTS', width: 60},
                { header: 'PHYSICAL ADDR', key: 'PHYSICALADDRESS', width: 60},
                { header: 'TERMINAL MODEL CODE', key: 'user_code', width: 60},
                 { header: 'TERMINAL ID', key: 'Ajo_Thrift', width: 60 },

                { header: 'BANK CODE', key: 'BANKCODE', width: 60},
                { header: 'OLD BANK ACC NO', key: 'BANKACCTNO', width: 60},

                { header: 'NEW BANK ACC NO', key: 'NEWBANKACCTNO', width: 60},

                 { header: 'BANK ACC TYPE', key: 'BANKACCTYPE', width: 60},
                { header: 'SLIP HEADER', key: 'SLIPHEADER', width: 60},
                { header: 'SLIP FOOTER', key: 'SLIPFOOTER', width: 60},
                { header: 'BUSINESS OCCUPATION CODE', key: 'BUSINESSOCCUPATIONCODE', width: 60},
                { header: 'MERCHANT CATEGORY CODE', key: 'BVN', width: 60},
                { header: 'STATE CODE', key: 'STATECODE', width: 60},
                { header: 'VISA ACQUIRER ID NUMBER', key: 'nill', width: 60},
                { header: 'nill ACQUIRER ID NUMBER', key: 'nillACQUIRERIDNUMBER', width: 60},
                { header: 'MASTERCARD ACQUIRER ID NUMBER', key: 'nill', width: 60},
                { header: 'TERMINAL OWNER CODE', key: 'TERMINALOWNERCODE', width: 60},
                { header: 'LGA/LCDA', key: 'LGALCDA', width: 60},
                { header: 'POST CODE', key: 'POSTCODE', width: 60},
                { header: 'URL', key: 'URL', width: 60},
                { header: 'MERCHANT ACCOUNT NAME', key: 'MERCHANTACCOUNTNAME', width: 60},
                { header: 'PTSP', key: 'PTSP', width: 60},
                { header: 'DEVICETYPE', key: 'DEVICETYPE', width: 60},
                { header: 'nill', key: 'nill', width: 60},
                { header: 'DEVICESN', key: 'DEVICESN', width: 60},
                { header: 'APPNAME', key: 'APPNAME', width: 60},
                { header: 'APPVERSION', key: 'APPVERSION', width: 60},
                { header: 'NETWORKTYPE', key: 'NETWORKTYPE', width: 60}
            ];


var records =          param.hits.forEach(function(value){
  //var x = x + 1;
  //console.log(x);
                   // data.Ajo_Thrift_VALUE = value;
                 //    elasticsearch.store_merchant_details(data);
                 var sorted_data2 = {MERCHANTID: value._source.MERCHANTID, 
                  Ajo_Thrift: value._source.Ajo_Thrift_VALUE ,
                  //DATE: value._source.date, 
                  MERCHANTNAME: value._source.MERCHANTNAME,
                  CONTACTTITLE: value._source.CONTACTTITLE,
                  CONTACTNAME: value._source.CONTACTNAME,
                  MOBILEPHONE: value._source.MOBILEPHONE,
                  EMAIL: value._source.EMAIL,
                  EMAILALERTS: value._source.EMAILALERTS,
                  PHYSICALADDRESS: value._source.PHYSICALADDRESS,
                  user_code: value._source.user_code,
                  BANKCODE: value._source.BANKCODE,
                  BANKACCTNO: value._source.BANKACCTNO,
                  NEWBANKACCTNO: value._source.BANKACCTNO,
                  BANKACCTYPE: value._source.BANKACCTYPE,
                  SLIPHEADER: value._source.SLIPHEADER,
                  SLIPFOOTER: value._source.SLIPFOOTER,
                  BUSINESSOCCUPATIONCODE: value._source.BUSINESSOCCUPATIONCODE,
                  BVN: value._source.BVN,
                  STATECODE: value._source.STATECODE,
                  nill: value._source.nill,
                  nillACQUIRERIDNUMBER: value._source.nillACQUIRERIDNUMBER,
                  nill: value._source.nill,
                  TERMINALOWNERCODE: value._source.TERMINALOWNERCODE,
                  LGALCDA: value._source.LGALCDA,
                  POSTCODE: value._source.POSTCODE,
                  URL: value._source.URL,
                  MERCHANTACCOUNTNAME: value._source.MERCHANTACCOUNTNAME,
                  PTSP: value._source.PTSP,
                  DEVICETYPE: value._source.DEVICETYPE,
                  nill: value._source.nill,
                  DEVICESN: value._source.DEVICESN,
                  APPNAME: value._source.APPNAME,
                  APPVERSION: value._source.APPVERSION,
                  NETWORKTYPE: value._source.NETWORKTYPE };

                   worksheet.addRow(sorted_data2);

              });


//console.log(param.hits[0]._source);
        //    worksheet.addRow(ff[0]);
        var spool = {};
        spool.total_record = param.hits.length;

        mysql.insert_generated_report(param.hits.length);

      mail.sendmail(spool);
      

       var FILEDATE = dateFormat(new Date(), "yyyymmddhMMss");
            res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            res.setHeader('Content-Disposition', 'attachment; filename=' + 'ISWISW'+ FILEDATE+'.xlsx');
      
            return workbook.xlsx.write(res)
                  .then(function() {
                        res.status(200).end();
            });

  }









module.exports = {
   store_merchant_details : store_merchant_details,
   search_merchant_doc : search_merchant_doc,
   get_table_result : get_table_result,
   search_merchant_doc_query : search_merchant_doc_query,
   search_merchant_doc_get : search_merchant_doc_get,
   store_log_details : store_log_details,
   getlog : getlog,
   search_merchant_doc_query_mysql : search_merchant_doc_query_mysql
}