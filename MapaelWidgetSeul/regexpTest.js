debugger;
var myString='<span style=\"font-weight:bold;\">Afghanistan<\/span><br \/>Population : 35320445';
var myRegexp=/style/;
var  myresult=myRegexp.exec(myString)
var  myStringtoInserted="id=\"0\" style";
 var myString = myString.replace("style", myStringtoInserted); 



 myRegexp=/\d{2,20}/;
 myresult=myRegexp.exec(myString)
 myStringtoInserted="<span id=\"1\">"+myresult[0] +"<\/span>";
  myString = myString.replace(myresult[0], myStringtoInserted); 
myString;
