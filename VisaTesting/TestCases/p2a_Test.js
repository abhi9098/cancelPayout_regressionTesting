let request = require('request-promise');
let fs = require('fs');
let crtFile = './certificate/cert.pem';
let pemFile ='./certificate/key.pem';
var check = require('check-types');
var expect = require("chai").expect;
var body;

//dummy create user payload
var RP_p2a=require('../RequestsPayloads/RP_p2a');
global.increment=0;



let options = {
    method: 'POST',
    uri: 'https://visa-api-sandbox.earthport.com/v1/visadirect/payouts/pushtoaccount/',
    resolveWithFullResponse: true ,
    headers: {
    'Content-Type': 'application/jose',
    'debug':'true'
    },
    agentOptions: {
    cert: fs.readFileSync(crtFile),
    key: fs.readFileSync(pemFile),
    passphrase: 'P123456j',
    rejectUnauthorized: false
    },
    body:RP_p2a,
    json: true
    };


    // const call_api = async function (request_body) {
    //     return  supertest.agent("https://visa-api-sandbox.earthport.com/v1/visadirect/payouts/")
    //     .set('Content-Type', 'application/jose')
    //     .post("/users")
    //     .send(RP_p2a);
    //  }
    
    //   describe('Testing Row No - ',()=>{
    //      // console.log(response);
       
    //              //callTest();
    //             body=  request(options).then(function(response) {
            
       
    //                 RunTestCaseAccordingToRows(response); 
                        
    //             }).catch(function(error) {
    //                 console.log(error);
    //             });  

    //       });


// function callTest(){

//     describe('Testing Row No - ',()=>{
            
       
//         RunTestCaseAccordingToRows(); 
            
//     });    


//}

   

    // function RunTestCaseAccordingToRows(body){
 
    //     it('status code is 200',  (done) =>{ 
    //         console.log(body);
    //         expect(200).to.equal(200);
    //         done();
    //     }).timeout(5000);
    // }



    describe('Testing Row No',()=>{
        it("status code is 200",  (done) =>{
  request(options).then(function(response) {
           expect(response.statusCode).to.equal(200);
           console.log(response.body.transactionDetail.retrievalReferenceNumber);
           
           done();
        }).catch(function(error) {
            console.log(error);
                });
             });
     
        }).timeout(5000);



        //console.log(body);

    