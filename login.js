// 'module.exports' is a node.JS specific feature, it does not work with regular JavaScript
module.exports = login;
{
  // This is the function which will be called in the main file, which is server.js
  // The parameters 'name' and 'surname' will be provided inside the function
  // when the function is called in the main file.
  // Example: concatenameNames('John,'Doe');
  concatenateNames: function (name, surname) 
  {
     var wholeName = name + " " + surname;

     return wholeName;
  },

  sampleFunctionTwo: function () 
  {

  }
};

// Private variables and functions which will not be accessible outside this file
var privateFunction = function () 
{
};