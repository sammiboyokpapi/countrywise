var sql = require('mssql')
  var dateFormat = require('dateformat');
  var log = require('../model/log');
  var crypto = require('crypto')
  



   var config = {
    user: 'root',
    password: 'merchant#123',
    server: 'merchant-portal.c2et1rfe7r53.us-east-1.rds.amazonaws.com', // You can use 'localhost\\instance' to connect to named instance
    database: 'merchant_portal',
 
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

var connect;
 sql.connect(config, err => {

    if(!err) {
        console.log("Microsoft Database is connected ... nn");    
       connect = new sql.Request();


    } else {
        console.log("Error connecting to microsoft database ... nn" + err);    
    }
  });






var trap = function(username, callback){

   /*  connect.query('select * from profile', (err, result) => {
        // ... error checks
 
        console.dir(result)
        callback(result);
    }); */
}


  var verifycredentials = function(username,password,callback){

  //  var sql = require('mssql')

          connect.input('username', sql.VarChar, username);
          connect.input('password', sql.VarChar, password)
           var sqlquery = "select * from profile where username = @username AND password = @password";
         connect.query(sqlquery,function(err, result) {
          if (!err){
            console.log(result.recordsets[0]);
                    callback(result.recordsets[0]);      
           }else{
              console.log('Error while performing Query dd.' + err);
          }
        });

  }





var  store_merchant_rec = function(req,callback){
//store record to mysql database 
var data = req;
console.log("storing new merchant data");
//console.log(data);
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

            console.log(data);

           data.Ajo_Thrift_VALUE = value;

           console.log("TERMINAL :" + data.Ajo_Thrift_VALUE);

var connect_new = new sql.Request();

            connect_new.input('MERCHANTID', sql.VarChar, merchantid[0]);
            connect_new.input('MERCHANTNAME', sql.VarChar, data.MERCHANTNAME);
            connect_new.input('CONTACTTITLE', sql.VarChar, data.CONTACTTITLE);
            connect_new.input('CONTACTNAME', sql.VarChar, data.CONTACTNAME);
            connect_new.input('MOBILEPHONE', sql.VarChar, data.MOBILEPHONE);
            connect_new.input('EMAIL', sql.VarChar, data.EMAIL);
            connect_new.input('EMAILALERTS', sql.VarChar, data.EMAILALERTS);
            connect_new.input('PHYSICALADDRESS', sql.VarChar, data.PHYSICALADDRESS);
            connect_new.input('user_code', sql.VarChar, data.user_code);
            connect_new.input('Ajo_Thrift', sql.VarChar, value);//data.Ajo_Thrift_VALUE);
            connect_new.input('BANKCODE', sql.VarChar, data.BANKCODE);
            connect_new.input('BANKACCTNO', sql.VarChar, data.BANKACCTNO);
            connect_new.input('BANKACCTYPE', sql.VarChar, data.BANKACCTYPE);
            connect_new.input('SLIPHEADER', sql.VarChar, data.SLIPHEADER);
            connect_new.input('SLIPFOOTER', sql.VarChar, data.SLIPFOOTER);
            connect_new.input('BUSINESSOCCUPATIONCODE', sql.VarChar, data.BUSINESSOCCUPATIONCODE);
            connect_new.input('BVN', sql.VarChar, data.BVN);
            connect_new.input('STATECODE', sql.VarChar, data.STATECODE);
            connect_new.input('nill', sql.VarChar, data.nill);
            connect_new.input('nillACQUIRERIDNUMBER', sql.VarChar, data.nillACQUIRERIDNUMBER);
            connect_new.input('nill', sql.VarChar, data.nill);
            connect_new.input('TERMINALOWNERCODE', sql.VarChar, data.TERMINALOWNERCODE);
            connect_new.input('LGALCDA', sql.VarChar, data.LGALCDA);
            connect_new.input('POSTCODE', sql.VarChar, data.POSTCODE);
            connect_new.input('URL', sql.VarChar, data.URL);
            connect_new.input('MERCHANTACCOUNTNAME', sql.VarChar, data.MERCHANTACCOUNTNAME);
            connect_new.input('PTSP', sql.VarChar, data.PTSP);
            connect_new.input('DEVICETYPE', sql.VarChar, data.DEVICETYPE);
            connect_new.input('nill', sql.VarChar, data.nill);
            connect_new.input('DEVICESN', sql.VarChar, data.DEVICESN);
            connect_new.input('APPNAME', sql.VarChar, data.APPNAME);
            connect_new.input('APPVERSION', sql.VarChar, data.APPVERSION);
            connect_new.input('NETWORKTYPE', sql.VarChar, data.NETWORKTYPE);
            connect_new.input('STATUS', sql.VarChar, data.STATUS);
            connect_new.input('initiator', sql.VarChar, data.initiator);
            connect_new.input('partner', sql.VarChar, data.partner);







          var sqlquery = "INSERT INTO merchant (MERCHANTID,MERCHANTNAME,CONTACTTITLE,CONTACTNAME,MOBILEPHONE,\
          EMAIL,EMAILALERTS,PHYSICALADDRESS,user_code,\
          Ajo_Thrift,BANKCODE,BANKACCTNO,BANKACCTYPE,SLIPHEADER,\
          SLIPFOOTER,BUSINESSOCCUPATIONCODE,BVN,STATECODE,nill,\
          nillACQUIRERIDNUMBER,nill,TERMINALOWNERCODE,LGALCDA,POSTCODE,URL,\
          MERCHANTACCOUNTNAME,PTSP,DEVICETYPE,nill,DEVICESN,APPNAME,APPVERSION,NETWORKTYPE,STATUS,initiator,partner) VALUES (@MERCHANTID,\
          @MERCHANTNAME,@CONTACTTITLE,@CONTACTNAME,@MOBILEPHONE,@EMAIL,@EMAILALERTS,@PHYSICALADDRESS,@user_code,\
          @Ajo_Thrift,@BANKCODE,@BANKACCTNO,@BANKACCTYPE,@SLIPHEADER,@SLIPFOOTER,@BUSINESSOCCUPATIONCODE,@BVN,@STATECODE,@nill,\
          @nillACQUIRERIDNUMBER,@nill,@TERMINALOWNERCODE,@LGALCDA,@POSTCODE,@URL,\
          @MERCHANTACCOUNTNAME,@PTSP,@DEVICETYPE,@nill,@DEVICESN,@APPNAME,@APPVERSION,@NETWORKTYPE,@STATUS,@initiator,@partner)";
          //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';

    
          //console.log(sqlquery);

            connect_new.query(sqlquery, function (err, result) {
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




  function createuser(req,callback){

    console.log(req);



    var connect_new = new sql.Request();

    req.password = cryto_digest(req.password);

            connect_new.input('username', sql.VarChar, req.username);
            connect_new.input('password', sql.VarChar, req.password);
            connect_new.input('firstname', sql.VarChar, req.firstname);
            connect_new.input('lastname', sql.VarChar, req.lastname);
            connect_new.input('priviledge', sql.VarChar, req.optionyes);
            connect_new.input('email', sql.VarChar, req.email);


            var sqlquery  = "INSERT INTO profile (username, password, priviledge, firstname, lastname, email)\
                        VALUES (@username, @password,@priviledge, @firstname, @lastname, @email)";
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
               connect_new.query(sqlquery, function (err, result) {
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


function cryto_digest(password){
    shasum = crypto.createHash('sha1');
    shasum.update(password);

    return shasum.digest('hex');

}




  function verifyuser(req,callback){
  // var  username =  req.username;
    var connect_new = new sql.Request();

     connect_new.input('username', sql.VarChar, req.username);

      var sqlquery = "select count(*) as result from profile where username = @username";
         connect_new.query(sqlquery,function(err, result) {
          if (!err){
                    callback(result.recordsets[0]);      
           }else{
              console.log('Error while performing Query.');
          }
        });

  }



var modify_password = function(param,callback){

  var password = param.newpassword2;
   password = cryto_digest(password);
  var username = param.usernameparameter;
   var connect_new = new sql.Request();

     connect_new.input('username', sql.VarChar, username);
     connect_new.input('password', sql.VarChar, password);

  var data = {};
        var sqlquery = "update profile set password = @password where username = @username";
         connect_new.query(sqlquery,function(err, rows, fields) {
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


var selectusers = function(username, callback){
  param = {};

  username = username + "%";
     var connect_new = new sql.Request();

       connect_new.input('username', sql.VarChar, username);
   //  connect_new.input('priviledge', sql.VarChar, priviledge);



var sqlquery = "select TOP 5 * from profile where username like @username and priviledge in ('sadmin','admin','user') order by username asc";

     connect_new.query(sqlquery,function(err, result) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = result.recordsets[0];
              callback(param);
           }else{
                param.status = "error";
            param.resason = err;
             callback(param);
              console.log('Error while performing Query. :' + err);
          }
        });
}



var modify_profile = function(param,callback){

  var email = param.emailmodify;
  var roles = param.rolesmodify;
  var firstname = param.firstnamemodify;
  var lastname = param.lastnamemodify;
  var username = param.usernameparameter;

   var connect_new = new sql.Request();

       connect_new.input('email', sql.VarChar, email);
       connect_new.input('roles', sql.VarChar, roles);
       connect_new.input('firstname', sql.VarChar, firstname);
       connect_new.input('lastname', sql.VarChar, lastname);
       connect_new.input('username', sql.VarChar, username);

  var data = {};
        var sqlquery = "update profile set email = @email,priviledge = @roles,firstname = @firstname, lastname = @lastname where username = @username";
         connect_new.query(sqlquery,function(err, rows) {
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



  var create_partner = function(param,callback){
    //mysql insert records into table 
    var data = {};
    var partner = param.partnername;
    var connect_new = new sql.Request();

       connect_new.input('partners', sql.VarChar, partner);

                var sqlquery = "INSERT INTO partners (name) VALUES (@partners)";
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
               
              connect_new.query(sqlquery, function (err, result) {


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



var selectpartner = function(username, callback){
  param = {};

  username = username + "%";
   var connect_new = new sql.Request();

       connect_new.input('username', sql.VarChar, username);


var sqlquery = 'select TOP 5 * from partners where name like @username order by name asc';

     connect_new.query(sqlquery,function(err, result) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = result.recordsets[0];;
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
   var connect_new = new sql.Request();

       connect_new.input('username', sql.VarChar, username);

var sqlquery = 'select * from partners where name like @username order by name asc';

     connect_new.query(sqlquery,function(err, result) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = result.recordsets[0];
              callback(param);
           }else{
                param.status = "error";
            param.resason = err;
             callback(param);
              console.log('Error while performing Query. :' + err);
          }
        });
}



  var delete_partner = function(param,callback){
    //mysql insert records into table 
    var data = {};
    var partner = param.partnernameparameter;

     var connect_new = new sql.Request();

       connect_new.input('partner', sql.VarChar, partner);

                var sqlquery = 'DELETE from partners where id = @partner';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
               
              connect_new.query(sqlquery, function (err, result) {


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

  var modify_partner = function(param,callback){

  var partner_id = param.partnernameparameter;
  var partner_name = param.newpartner;
 var connect_new = new sql.Request();

       connect_new.input('partner_id', sql.VarChar, partner_id);
       connect_new.input('partner_name', sql.VarChar, partner_name);

  var data = {};
        var sqlquery = "update partners set name = @partner_name where id = @partner_id";
         connect_new.query(sqlquery,function(err, rows) {
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



var selectaggregator = function(username, callback){
  param = {};

  username = username + "%";
  var connect_new = new sql.Request();

       connect_new.input('username', sql.VarChar, username);
      

var sqlquery = 'select TOP 5 * from aggregators where name like @username order by name asc';

     connect_new.query(sqlquery,function(err, result) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = result.recordsets[0];
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
  var connect_new = new sql.Request();

       connect_new.input('aggregator_id', sql.VarChar, aggregator_id);
      

var sqlquery = 'select a.partner as partnerid,b.name as partnername from linked_partners a,partners b where a.partner = b.id and a.aggregator = @aggregator_id;'

     connect_new.query(sqlquery,function(err, result) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = result.recordsets[0];
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
   var connect_new = new sql.Request();


var sqlquery = 'select * from partners order by name asc';

     connect_new.query(sqlquery,function(err, result) {
          if (!err){        
            // console.log();
             param.status = "success";
              param.result = result.recordsets[0];
              callback(param);
           }else{
                param.status = "error";
            param.resason = err;
             callback(param);
              console.log('Error while performing Query. :' + err);
          }
        });
}



  var create_aggregator = function(param,callback){
    //mysql insert records into table 
    var data = {};
    var aggregator = param.aggregatorname;
      var connect_new = new sql.Request();

       connect_new.input('aggregator', sql.VarChar, aggregator);
      

                var sqlquery = 'INSERT INTO aggregators (name) VALUES (@aggregator)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
              connect_new.query(sqlquery, function (err, result) {
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
     var connect_new = new sql.Request();

       connect_new.input('aggregator', sql.VarChar, aggregator);

                var sqlquery = 'DELETE from aggregators where id = @aggregator';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
              
              connect_new.query(sqlquery, function (err, result) {
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




  var modify_aggregator = function(param,callback){

  var aggregator_id = param.aggregatornameparameter;
  var aggregator_name = param.newaggregatorname;
  var linked_partners_data = param.multi;

  var data = {};
    //update name
     var connect_new = new sql.Request();

       connect_new.input('aggregator_id', sql.VarChar, aggregator_id);
        connect_new.input('aggregator_name', sql.VarChar, aggregator_name);
         

        var sqlquery = "update aggregators set name = @aggregator_name where id = @aggregator_id";
         connect_new.query(sqlquery,function(err, rows) {
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
 var connect_new = new sql.Request();

       connect_new.input('aggregator_id', sql.VarChar, aggregator_id);

       var sqlquery = 'DELETE from linked_partners where aggregator = @aggregator_id';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
               
              connect_new.query(sqlquery, function (err, result) {


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

       var connect_new = new sql.Request();

       connect_new.input('aggregator_id', sql.VarChar, aggregator_id);
       connect_new.input('value', sql.VarChar, value);
            var sqlquery = 'INSERT INTO linked_partners (aggregator,partner) VALUES (@aggregator_id,value)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
               
              connect_new.query(sqlquery, function (err, result) {


                 if (!err){
                      console.log('The solution is: ok');
                    //write final record to elastic search 
                    // console.log(result);
                  
                    }else{

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
     password = cryto_digest(password);

     var connect_new = new sql.Request();

       connect_new.input('name', sql.VarChar, name);
       connect_new.input('email', sql.VarChar, email);
       connect_new.input('password', sql.VarChar, password);

                var sqlquery = "INSERT INTO profile (username,email,priviledge,password) VALUES (@name,@email,'kyc',@password)";
            //
              connect_new.query(sqlquery, function (err, result) {


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




var password_kyc = function(param,callback){

  var password = param.password2;
  var username = param.kycuser_name;
    password = cryto_digest(password);

 var connect_new = new sql.Request();

       connect_new.input('password', sql.VarChar, password);
       connect_new.input('username', sql.VarChar, username); 

  var data = {};
        var sqlquery = "update profile set password = @password where username = @username and priviledge ='kyc'";
         connect_new.query(sqlquery,function(err, rows) {
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



  var delete_kyc =  function(param,callback){
    //mysql insert records into table 
    var data = {};
    var name = param.kyc_username;

    var connect_new = new sql.Request();

       connect_new.input('name', sql.VarChar, name);

                var sqlquery = "DELETE from profile where username = @name and priviledge = 'kyc'";
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
              connect_new.query(sqlquery, function (err, result) {

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



    var kyc_add_partners = function(param,callback){
    data = {};
    var username = param.kyc_username;
    var connect_new = new sql.Request();

       connect_new.input('username', sql.VarChar, username);
    //get the  id of the kyc user and add thje partner to the linkied kyc
    var sqlquery = 'select TOP 1 id from profile where username = @username';

     connect_new.query(sqlquery,function(err, result) {
          if (!err){        
             console.log(result.recordsets[0][0]);
           //  param.status = "success";
            //  param.result = rows;
             // callback(param);
             add_kyc_partner(result.recordsets[0][0].id, param.kyc_partners,function(values){
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

function add_kyc_partner(kyc_id,partner_id,callback){

  data = {};
   var connect_new = new sql.Request();

       connect_new.input('kyc_id', sql.VarChar, kyc_id);
        connect_new.input('partner_id', sql.VarChar, partner_id);

var sqlquery = 'INSERT INTO linked_kyc (kyc_user,partner) VALUES (@kyc_id,@partner_id)';
            //let insertQuery = 'INSERT INTO ?? (??,??) VALUES (?,?)';
              
              connect_new.query(sqlquery, function (err, result) {


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
   trap : trap,
   verifycredentials : verifycredentials,
   createuser : createuser,
   verifyuser : verifyuser,
   selectusers : selectusers,
   create_partner : create_partner,
   modify_profile : modify_profile,
   modify_partner : modify_partner,
   modify_password : modify_password,
   selectpartner : selectpartner,
   selectaggregator : selectaggregator,
   delete_partner : delete_partner,
   selectpartnerall : selectpartnerall,
   select_aggregated_partners : select_aggregated_partners,
   selectallpartner : selectallpartner,
   create_aggregator : create_aggregator,
   delete_aggregator : delete_aggregator,
   modify_aggregator : modify_aggregator,
   create_kyc : create_kyc,
   password_kyc : password_kyc,
   delete_kyc : delete_kyc,
   kyc_add_partners : kyc_add_partners,
   store_merchant_rec : store_merchant_rec
}