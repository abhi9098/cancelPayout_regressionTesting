let request = require('request-promise');
let fs = require('fs');
let crtFile = './certificate/cert.pem';
let pemFile ='./certificate/key.pem';
const _ = require('lodash');
var expect = require("chai").expect;
let response;
var latest;
//dummy create user payload
var RP_cancel=require('../RequestsPayloads/RP_cancel');
global.increment=0;



let options = {
    method: 'DELETE',
    uri: 'https://visa-api-sandbox.earthport.com/v1.1/visadirect/payouts/cancelpayout',
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
    //insecure: true,
    body:'',
    json: true
    };
    //let response = await request( options)

    module.exports={

        RunTest:function(JsonPayload){
        
        describe('Cancel Payout API Testing ',()=>{       
               JsonPayload.forEach(async function (data) {
  
                    describe('Testing Row No - '+ (++increment),() => {
                
                        before(async function(){
                                //set the payload
                                RP_cancel.CancelPayoutRequestPayload.payload=data;
                                    //get the payload
                                    RP_CancelPayload=RP_cancel.CancelPayoutRequestPayload;
    
                                    //call the api 
                                     options.body=RP_CancelPayload;
                                     response = await request(options);

                          
    
                        });
                                            
                              RunTestCaseAccordingToRows(); 
                        
                            
                            
                    });     
                }); //end of csv file 
            });
        
            }}
        
     
     //iterate row by row
     function RunTestCaseAccordingToRows(){
     
        describe('Checking field Existence from Request',() => {
     
        it('Checking originatorDetail.acquiringBIN field',  (done) =>{
     
           expect(_.has(RP_CancelPayload["originatorDetail"],"acquiringBIN")).to.equal(true);
            done();
        }).timeout(5000);
            
        it('Checking originatorDetail.merchantId field',  (done) =>{
              expect(_.has(RP_CancelPayload["originatorDetail"],"merchantId")).to.equal(true);
               done();
           }).timeout(5000);
           
           it('Checking transactionDetail.retrievalReferenceNumber field',  (done) =>{
              expect(_.has(RP_CancelPayload["transactionDetail"],"retrievalReferenceNumber")).to.equal(true);
               done();
           }).timeout(5000);

           it('Checking transactionDetail.transmissionDateTime field',  (done) =>{
              expect(_.has(RP_CancelPayload["transactionDetail"],"transmissionDateTime")).to.equal(true);
               done();
           }).timeout(5000);

           it('Checking transactionDetail.narrative field',  (done) =>{
              expect(_.has(RP_CancelPayload["transactionDetail"],"narrative")).to.equal(true);
               done();
           }).timeout(5000);

           it('Checking transactionDetail.paymentTrackingId field',  (done) =>{
              expect(_.has(RP_CancelPayload["transactionDetail"],"paymentTrackingId")).to.equal(true);
               done();
           }).timeout(5000);
    })



    describe('Checking field Existence from Response',() => {
           
        it('Checking originatorDetail.acquiringBIN field',  (done) =>{
           expect(_.has(response["body"]["originatorDetail"],"acquiringBIN")).to.equal(true);
            done();
        }).timeout(5000);
            
        it('Checking originatorDetail.merchantId field',  (done) =>{
              expect(_.has(response["body"]["originatorDetail"],"merchantId")).to.equal(true);
               done();
           }).timeout(5000);
           
           it('Checking transactionDetail.retrievalReferenceNumber field',  (done) =>{
              expect(_.has(response["body"]["transactionDetail"],"retrievalReferenceNumber")).to.equal(true);
               done();
           }).timeout(5000);

           it('Checking transactionDetail.transmissionDateTime field',  (done) =>{
              expect(_.has(response["body"]["transactionDetail"],"transmissionDateTime")).to.equal(true);
               done();
           }).timeout(5000);

           it('Checking transactionDetail.paymentTrackingId field',  (done) =>{
              expect(_.has(response["body"]["transactionDetail"],"paymentTrackingId")).to.equal(true);
               done();
           }).timeout(5000);

           
           it('Checking transactionDetail.status field',  (done) =>{
              expect(_.has(response["body"]["transactionDetail"],"status")).to.equal(true);
               done();
           }).timeout(5000);

           
           it('Checking transactionDetail.description field',  (done) =>{
              expect(_.has(response["body"]["transactionDetail"],"description")).to.equal(true);
               done();
           }).timeout(5000);
    })

    describe('Checking Mapping of Request to Response Fields',() => {
           
        it('Checking originatorDetail.acquiringBIN Mapping',  (done) =>{
         expect(200).to.equal(400);
            done();
        }).timeout(5000);
            
        it('Checking originatorDetail.merchantId Mapping',  (done) =>{
            expect(response.body.originatorDetail.merchantId).to.equal(RP_CancelPayload.originatorDetail.merchantId);
            done();
           }).timeout(5000);
           
           it('Checking transactionDetail.retrievalReferenceNumber Mapping',  (done) =>{
            expect((response.body.transactionDetail.retrievalReferenceNumber).toString()).to.equal((RP_CancelPayload.transactionDetail.retrievalReferenceNumber).toString());
               done();
           }).timeout(5000);

           it('Checking transactionDetail.transmissionDateTime Mapping',  (done) =>{
            expect(response.body.transactionDetail.transmissionDateTime).to.equal(RP_CancelPayload.transactionDetail.transmissionDateTime);
               done();
           }).timeout(5000);

           it('Checking transactionDetail.paymentTrackingId Mapping',  (done) =>{
            expect(response.body.transactionDetail.paymentTrackingId).to.equal(RP_CancelPayload.transactionDetail.paymentTrackingId);
               done();
           }).timeout(5000);

           it('Checking transactionDetail.status Mapping ',  (done) =>{
            var a  =  "Cancelled"   ;
            var b = "Validation Error";

            if(response.body.transactionDetail.status === a){
            expect(response.body.transactionDetail.status).to.equal('Cancelled');
               }else if(response.body.transactionDetail.status === b){
                expect(response.body.transactionDetail.status).to.equal('Validation Error');
               }else{
                   throw console.error('Status is not repoted yet'); 
               }
               done();
           }).timeout(5000);

           it('Checking transactionDetail.description Mapping',  (done) =>{
            var a  =  "Cancelled"   ;
            var b = "Payout not cancellable";
            var c = "Payout not found";

            if(response.body.transactionDetail.description === a){
            expect(response.body.transactionDetail.description).to.equal('Cancelled');
               }else if(response.body.transactionDetail.description === b){
                expect(response.body.transactionDetail.description).to.equal('Payout not cancellable');
               }else if(response.body.transactionDetail.description === c){
                expect(response.body.transactionDetail.description).to.equal('Payout not found');
               } else{
                   throw console.error('Description is not repoted yet');
               }
               done();
           }).timeout(5000);
    })
            
     }

 
