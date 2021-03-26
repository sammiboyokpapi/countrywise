var mysql = require('../model/mysql');
var mssql = require('../model/mssql');
var crypto = require('crypto')
var dateFormat = require('dateformat');
var log = require('../model/log');

var loginRequired = function(req, res) {
  /////verfify credentials 
  var username = req.body.username;
  var password = cryto_digest(req.body.password);

    mssql.verifycredentials(username,password,function(data){

  //console.log(data.length);
  params = {};
  params.notification = {};
      if(data.length > 0){
        //console.log(data[0]);
        

          return set_session(req,data[0],res)

      }else{
        log.log_error("login","invalid login credential","001","","");
            params.notification.falsedata = "Invalid login credentials";
         return res.status(401).render("index",params);
      }
    });
}


function cryto_digest(password){
    shasum = crypto.createHash('sha1');
    shasum.update(password);

    return shasum.digest('hex');


}

var verifynewuser = function(req,res,callback){

// check if user exists in database else create new user and send success notification 
mssql.verifyuser(req,function(result){

console.log("sda" + result);
 callback(result);

});



}



var createnewuser = function(req,callbacks){

  mssql.createuser(req,function(results){

     callbacks(results);

  });


}


var deletesession = function(req,res){
log.log_success("logout","Successfully Logged Out  : " + sess.username,"240",sess.username,sess.priviledge);
    
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
          params = {};
          params.notification = {};
          params.notification.truedata = "Invalid login credentials";

        res.render("index",params);
    });

console.log(sess);

}


 var  verifysession = function(req,res){
          params = {};
          params.notification = {};
  params.sess = sess;
        if(sess.priviledge == "sadmin"){
    params.sess.sadmin = "sadmin";
  }
      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }

    if(sess.username){
   //   console.log(sess);

        mysql.getprofiles(function(argument) {

             console.log(argument);

              params.data = argument;
                params.notification.truedata = "";
             return res.render('dashboard',params)
    
        });



    }else{
      params.notification.falsedata = "Your Login Session has expired";
      console.log(sess);
      return res.status(401).render("index",params);

    }
  }

  var set_session = function(req,data,res){
  //  sess=req.body.session;
  sess = req.session;
  sess.username = data.username;
  sess.priviledge = data.priviledge;
  sess.firstname = data.firstname;
  sess.lastname = data.lastname;
  sess.email = data.email;
  sess.identification = data.id;

  console.log(sess);
log.log_success("login","Successfully logged in","200",sess.username,sess.priviledge);
          params = {};
           params.notification = {};
  params.sess = sess;
        if(sess.priviledge == "sadmin"){
    params.sess.sadmin = "sadmin";
  }
      if(sess.priviledge == "admin"){
    params.sess.admin = "sadmin";
  }      if(sess.priviledge == "user"){
    params.sess.user = "user";
  }    if(sess.priviledge == "kyc"){
    params.sess.kyc = "kyc";

        mysql.get_kyc_partner(sess.identification,function(result3){
      if(result3.status =="success"){
        if(result3.result.length > 0){
          params.sess.kyc_link = result3.result[0];
        }
      }

    });
  }

            mysql.getprofiles(function(argument) {

             console.log(argument);

              params.data = argument;
                params.notification.truedata = "";
                if(sess.priviledge == "kyc"){
                      
                      mysql.documents_result(function(result){

                          params.hits = [];

                          
                            process_result(result,function(news){

                              params.hits.push(news);
                            });
                          //  

                          console.log(params);

                            res.render('upload',params);

                        });

                }else{
                  return res.render('dashboard',params)
                }
    
        });

  }




  function process_result(result,callback){

      result.forEach(function(value){
      var news = {};
      news.files = [];
      for(var i = 1; i < 7; i++){
        
        if(value.filename+i != ""){
          news.files.push(value.filename+i);
        }
      }

      news.user = value.created_by;
      news.status = value.status;
      news.businesstype = value.businesstype;
      news.date = dateFormat(new Date(value.date), "yyyy-mm-dd h:MM:ss");//value.date;
      news.id = value.id;



              if(sess.priviledge == "sadmin" ||  sess.priviledge == "admin"){

                  news.priviledge = "true";
                }

            if(news.status == "pending"){

              news.truepending = "pen";

            }

      callback(news);
     });
  }



module.exports = {
   loginRequired : loginRequired,
   verifysession : verifysession,
   verifynewuser : verifynewuser,
   createnewuser : createnewuser,
   deletesession : deletesession,
   set_session : set_session
}