const fs = require('fs');
const csv2Json=require('./Utils/Csv2Json');


//TestCases File where test cases has written
var CancePayout_TestScript=require('./TestCases/test');


//conversion csv to json 
const CancelPayout_CsvFile = fs.readFileSync('./CSV_Files/CancelPayout.csv', 'utf8');
const CancelPayout_JsonData = JSON.parse(csv2Json.convert(CancelPayout_CsvFile));

Run_CreateUser(CancelPayout_JsonData);


function Run_CreateUser(JsonPayload){ 

  //Run the test cases 
  CancePayout_TestScript.RunTest(JsonPayload);
 
} 


 