var mysql = require('../model/mysql');
var mssql = require('../model/mssql');
var crypto = require('crypto')
var mkdirp = require('mkdirp');
var file_system = require('fs');
var archiver = require('archiver');

  var node_xj = require("xlsx-to-json-lc");

  var merchant_generate = function(termid,callback){
    var result = [];
     var result2 = [];
    //  sess=req.body.session;
   /* var alpha = Math.random().toString(36).substring(3);
    var rand =  Math.floor(Math.random() * (99 - 10 + 1)) + 10 ; 
    var time = "2ISW" + alpha + Math.floor(Date.now() / 1000) + rand; */

     var time = "2ISWM" +Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);
    result.push(time);

    var step;
      for (step = 0; step < termid; step++) {

      //  result2.push(terminal_generate());

        terminal_generate(function(param){

           result2.push(param);
           if(step == (termid - 1)){

console.log("finished")
                   result.push(result2);
                    callback(result);
           }

        });



      }
  }

  function terminal_generate(callback){
    /*
     var alpha = Math.random().toString(36).substring(3);
     var rand =  Math.floor(Math.random() * (99 - 10 + 1)) + 10 ;
    var time = "2ISWT" + alpha + Math.floor(Date.now() / 1000) + rand;*/

         var time = "2ISW" +Math.floor(Math.random() * (9999 - 1000) + 1000);
       callback(time);
  }


    var merchant_generatelite = function(data){
          var data = 1000000000 + data;

          var data = "2ISWM" + data;
      return  data;
    }





    var file_document_process = function(res,params,file,callback){

      console.log(file);
var filename = 'documents/'+file.name;



       file.mv(filename, function(err) {
        if (err){
         console.log(err);


        params.notification.falsedata = "Failed to Generate Merchant data, Reason: "+ err;
         res.render('upload',params);

        }else{
          //convert excel file to JSON readable format 

           // excel_to_json(res,params,filename);

            console.log('File uploaded!');

            //now write data to mysql database




            mysql.document_uploaded(filename);

           //  res.render('upload',params);

           callback(filename);
            //
          }
         });



    };





    var file_document_process_new = function(res,callback){

      var file = res.files.fileuploadnew;
      //create folder to write into 
       var dirname = Math.random().toString(36).substring(7);
       dirname = crypto_digest(dirname);
       var rootdir = 'documents/';
       var dir = rootdir+ dirname + "/";

       ///create directory

           mkdirp(dir, function(err) { 
              // path exists unless there was an error
                   console.log(err);
            });

      console.log(dir);


      var i = file.length;
       console.log("file lenght : "+ i);
      var x = 0;
              if(i == 'undefined' || i == null){
                       var filename =  dir + file.name;

                     move_file(file,filename,function(param){
                      console.log(param);
                      param.dirname = dirname;
                        // zip files here 
                        archive_file(file,rootdir,dirname,function(response){

                           callback(param);

                        });
                      
                     });

              }else{

                file.forEach(function(values){
                    console.log("file name");
                  console.log(values.name);
                       var filename = dir + values.name;
                          move_file(values,filename,function(param){

                           x = x +1;
                            if(x == i){
                                  param.dirname = dirname;

                                  //zip files here 
                                    archive_file(file,rootdir,dirname,function(response){
                                      callback(param);
                                    });
                      
                            }

                          });        
                });
            }



      //var filename = 'documents/'+file.name;
    };

function archive_file(file,fulldir,dirname,callback){
  var output = file_system.createWriteStream(fulldir + dirname+'.zip');
  var archive = archiver('zip');

  output.on('close', function () {
      console.log(archive.pointer() + ' total bytes');
      console.log('archiver has been finalized and the output file descriptor has closed.');
      callback("success");
  });


  archive.on('error', function(err){
      throw err;
  });
  archive.pipe(output);
archive.directory(fulldir+dirname+"/", false);

archive.finalize();


}




function move_file(file,filename,callback){

  var jsdata = {};


       file.mv(filename, function(err) {
        if (err){
         console.log(err);

         jsdata.status = "error";
         jsdata.reason = err;
         callback(jsdata);

        }else{
          //convert excel file to JSON readable format 

           // excel_to_json(res,params,filename);

            console.log('File uploaded!' + filename);

            //now write data to mysql database


           //  res.render('upload',params);
            jsdata.status = "success";
         jsdata.reason = filename;
         callback(jsdata);

         
            //
          }
         });

}


function crypto_digest(param){
    shasum = crypto.createHash('sha1');
    shasum.update(param);

    return shasum.digest('hex');


}





     var file_process = function(res,params,req){

      var file = req.files.filetoupload;
      var filename = 'upload/' + Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) + ".xlsx";
    /*
     var alpha = Math.random().toString(36).substring(3);
     var rand =  Math.floor(Math.random() * (99 - 10 + 1)) + 10 ;
    var time = "2ISWT" + alpha + Math.floor(Date.now() / 1000) + rand;*/

    if(file.mimetype == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){
      //process the excel file 

      //file.mv("/upload/sam.xls");
              file.mv(filename, function(err) {
        if (err){
         console.log(err);


        params.notification.falsedata = "Failed to Generate Merchant data, Reason: "+ err;
         res.render('generate_merchant',params);

        }else{
          //convert excel file to JSON readable format 

            excel_to_json(req,res,params,filename);

            console.log('File uploaded!');
            //
          }
         });



      console.log("working");
    }else{
          console.log("file ");
    }



    return "fileupload";
  }


  function  excel_to_json(req,res,params,filename){
              node_xj({
            input: filename,  // input xls
            output: "output.json", // output json
            sheet: "Sheet1",  // specific sheetname
            lowerCaseHeaders:false
          }, function(err, result) {
            if(err) {
              console.error(err);
            } else {
                                            //store json result of each row to database 

                                         
                              var success = "";
                              //add partner parameter to array

                              var total_terminals = [];
                                            result.forEach(function(value){
                                              if(value.MERCHANTNAME != ''){
                                                      value.partner = req.body.partner2;
                                                      //console.log(value);
                                                           mssql.store_merchant_rec(value,function(state,param){

                                                        //    console.log({new : state, parameter : param});

                                                            if(state == "success"){

                                                              param.forEach(function(val){
                                                                 total_terminals.push(val);

                                                              });
                                                             
                                      // params.notification.truedata = "Successfully generated Merchant /Terminal Details, Total: "+param.length;
                                        //  res.render('generate_merchant',params)

                                                            }else if(state == "error"){
                                                              success = "false";
                                                                 params.notification.falsedata = "Failed to Generate Merchant data, Reason: "+ param;
                                                                 //res.render('generate_merchant',params);
                                                                                    //    res.render();
                                                            }

                                                           });


                                                  }

                                            });

                              if(success != "false"){
                                 params.notification.result = total_terminals;
                              params.notification.truedata = "Successfully generated Merchant / Terminal Details, Total: "+total_terminals.length;
                                  res.render('generate_merchant',params)
                                }

                                            console.log(total_terminals);
            }
          });



  }




module.exports = {
   merchant_generate : merchant_generate,
   file_document_process : file_document_process,
   file_document_process_new, file_document_process_new,
   file_process : file_process
}