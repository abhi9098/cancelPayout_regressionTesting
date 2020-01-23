var milliseconds = new Date().getTime();

module.exports={

    // PushToAccountRequestPayload:{
              "originatorDetail": {
          "acquiringBin": 1,
          "acquirerCountryCode": "test_country",
          "merchantId": "user_4678",
          "terminalId": "terminal_4738",
          "address": {
            "country": "DE"
          },
          "merchantCategoryCode": "6012"
        },
        "serviceProviderDetail": {
          "routingId": "route_8493"
        },
        "transactionDetail": {
          "destinationAmount": 2000,
          "destinationCurrencyCode": "356",
          "settlementAmount": 3000,
          "settlementCurrencyCode": "978",
          "settlementDate": "12-06-2019",
          "transactionIdentifier": "0MRCHNT_4678566760097",
          "retrievalReferenceNumber": 825310114691,
          "systemTraceAuditNumber": "111443",
          "transmissionDateTime": "10-06-2019 00:00:00",
          "localTransactionTime": "10-06-2019 12:04:59",
          "statementNarrative": "narrative",
          "purposeOfPayment": "ISTRAD",
          "businessApplicationId": "FD"
        },
        "recipientDetail": {
          "type": "I",
          "idType": "P",
          "idNumber": "ID89098",
          "idIssueCountry": "356",
          "firstName": "John",
          "lastName": "Smith",
          "cityOfBirth": "Mumbai",
          "countryOfBirth": "IND",
          "dateOfBirth": "2001-01-01",
          "address": {
            "addressLine1": "Address line 1",
            "addressLine2": "Address line 2",
            "addressLine3": "Address line 3",
            "city": "Mumbai",
            "country": "IND",
            "postalCode": "230532"
          },
          "bank": {
            "bankName": "ICICI Bank",
            "accountName": "account name",
            "accountNumber": "643401505732",
            "accountType": "CH",
            "countryCode": "IND",
            "bankCode": "ICIC0006650",
            "currencyCode": "356"
          }
        },
        "senderDetail": {
          "type": "C",
          "idType": "C",
          "companyName": "Visa",
          "idNumber": "P128766Z",
          "idIssueCountry": "DEU",
          "address": {
            "addressLine1": "addressLine1",
            "addressLine2": "addressLine2",
            "addressLine3": "addressLine3",
            "city": "Cologne",
            "country": "276",
            "postalCode": "50441",
            "province": "NM"
          }
        }}
      
  //           set payload(data){
  //             data.originatorDetail_acquiringBin !=""?this.originatorDetail.acquiringBin= data.originatorDetail_acquiringBin:this.originatorDetail.acquiringBin="";
  //             data.originatorDetail_acquirerCountryCode !=""?this.originatorDetail.acquirerCountryCode= data.originatorDetail_acquirerCountryCode:this.originatorDetail.acquirerCountryCode="";
  //             data.originatorDetail_merchantId !=""?this.originatorDetail.merchantId= data.originatorDetail_merchantId:this.originatorDetail.merchantId="";
  //             data.originatorDetail_terminalId !=""?this.originatorDetail.terminalId= data.originatorDetail_terminalId:this.originatorDetail.terminalId="";
  //             data.originatorDetail_address_country !=""?this.originatorDetail.address.country= data.originatorDetail_address_country:this.originatorDetail.address.country="";
  //             data.originatorDetail_merchantCategoryCode !=""?this.originatorDetail.merchantCategoryCode= data.originatorDetail_merchantCategoryCode:this.originatorDetail.merchantCategoryCode="";
            
  //             data.serviceProviderDetail_routingId !=""?this.serviceProviderDetail.routingId= data.serviceProviderDetail_routingId:this.serviceProviderDetail.routingId="";


  //             data.transactionDetail_destinationAmount !=""?this.transactionDetail.destinationAmount=  data.transactionDetail_destinationAmount:this.transactionDetail.destinationAmount="";
  //             data.transactionDetail_destinationCurrencyCode !=""?this.transactionDetail.destinationCurrencyCode=  data.transactionDetail_destinationCurrencyCode:this.transactionDetail.destinationCurrencyCode="";
  //             data.transactionDetail_settlementAmount !=""?this.transactionDetail.settlementAmount=  data.transactionDetail_settlementAmount:this.transactionDetail.settlementAmount="";
  //             data.transactionDetail_settlementCurrencyCode !=""?this.transactionDetail.settlementCurrencyCode=  data.transactionDetail_settlementCurrencyCode:this.transactionDetail.settlementCurrencyCode="";
  //             data.transactionDetail_settlementDate !=""?this.transactionDetail.settlementDate=  data.transactionDetail_settlementDate:this.transactionDetail.settlementDate="";
  //             data.transactionDetail_transactionIdentifier !=""?this.transactionDetail.transactionIdentifier=  data.transactionDetail_transactionIdentifier:this.transactionDetail.transactionIdentifier="";
  //             data.transactionDetail_retrievalReferenceNumber !=""?this.transactionDetail.retrievalReferenceNumber=  data.transactionDetail_retrievalReferenceNumber:this.transactionDetail.retrievalReferenceNumber="";
  //             data.transactionDetail_systemTraceAuditNumber !=""?this.transactionDetail.systemTraceAuditNumber=  data.transactionDetail_systemTraceAuditNumber:this.transactionDetail.systemTraceAuditNumber="";
  //             data.transactionDetail_transmissionDateTime !=""?this.transactionDetail.transmissionDateTime=  data.transactionDetail_transmissionDateTime:this.transactionDetail.transmissionDateTime="";
  //             data.transactionDetail_localTransactionTime !=""?this.transactionDetail.localTransactionTime=  data.transactionDetail_localTransactionTime:this.transactionDetail.localTransactionTime="";
  //             data.transactionDetail_statementNarrative !=""?this.transactionDetail.statementNarrative=  data.transactionDetail_statementNarrative:this.transactionDetail.statementNarrative="";
  //             data.transactionDetail_purposeOfPayment !=""?this.transactionDetail.purposeOfPayment=  data.transactionDetail_purposeOfPayment:this.transactionDetail.purposeOfPayment="";
  //             data.transactionDetail_businessApplicationId !=""?this.transactionDetail.businessApplicationId=  data.transactionDetail_businessApplicationId:this.transactionDetail.businessApplicationId="";


  //             data.recipientDetail_type !=""?this.transactionDetail.type=  data.recipientDetail_type:this.recipientDetail.type="";
  //             data.recipientDetail_idType !=""?this.transactionDetail.idType=  data.recipientDetail_idType:this.recipientDetail.idType="";
  //             data.recipientDetail_idNumber !=""?this.transactionDetail.idNumber=  data.recipientDetail_idNumber:this.recipientDetail.idNumber="";
  //             data.recipientDetail_idIssueCountry !=""?this.transactionDetail.idIssueCountry=  data.recipientDetail_idIssueCountry:this.recipientDetail.idIssueCountry="";
  //             data.recipientDetail_firstName !=""?this.transactionDetail.firstName=  data.recipientDetail_firstName:this.recipientDetail.firstName="";
  //             data.recipientDetail_lastName !=""?this.transactionDetail.lastName=  data.recipientDetail_lastName:this.recipientDetail.lastName="";
  //             data.recipientDetail_cityOfBirth !=""?this.transactionDetail.cityOfBirth=  data.recipientDetail_cityOfBirth:this.recipientDetail.cityOfBirth="";
  //             data.recipientDetail_countryOfBirth !=""?this.transactionDetail.countryOfBirth=  data.recipientDetail_countryOfBirth:this.recipientDetail.countryOfBirth="";
  //             data.recipientDetail_dateOfBirth !=""?this.transactionDetail.dateOfBirth=  data.recipientDetail_dateOfBirth:this.recipientDetail.dateOfBirth="";
  //             data.recipientDetail_address_addressLine1 !=""?this.transactionDetail.address.addressLine1=  data.recipientDetail_address_addressLine1:this.recipientDetail.address.addressLine1="";
  //             data.recipientDetail_address_addressLine2 !=""?this.transactionDetail.address.addressLine2=  data.recipientDetail_address_addressLine2:this.recipientDetail.address.addressLine2="";
  //             data.recipientDetail_address_addressLine3 !=""?this.transactionDetail.address.addressLine3=  data.recipientDetail_address_addressLine3:this.recipientDetail.address.addressLine3="";
  //             data.recipientDetail_address_city !=""?this.transactionDetail.address.city=  data.recipientDetail_address_city:this.recipientDetail.address.city="";
  //             data.recipientDetail_address_country !=""?this.transactionDetail.address.country=  data.recipientDetail_address_country:this.recipientDetail.address.country="";
  //             data.recipientDetail_address_postalCode !=""?this.transactionDetail.address.postalCode=  data.recipientDetail_address_postalCode:this.recipientDetail.address.postalCode="";

      
  //             data.recipientDetail_bank_bankName !=""?this.recipientDetail.bank.bankName=  data.recipientDetail_bank_bankName:this.recipientDetail.bank.bankName="";
  //             data.recipientDetail_bank_accountName !=""?this.recipientDetail.bank.accountName=  data.recipientDetail_bank_accountName:this.recipientDetail.bank.accountName="";
  //             data.recipientDetail_bank_accountNumber !=""?this.recipientDetail.bank.accountNumber=  data.recipientDetail_bank_accountNumber:this.recipientDetail.bank.accountNumber="";
  //             data.recipientDetail_bank_accountType !=""?this.recipientDetail.bank.accountType=  data.recipientDetail_bank_accountType:this.recipientDetail.bank.accountType="";
  //             data.recipientDetail_bank_countryCode !=""?this.recipientDetail.bank.countryCode=  data.recipientDetail_bank_countryCode:this.recipientDetail.bank.countryCode="";
  //             data.recipientDetail_bank_bankCode !=""?this.recipientDetail.bank.bankCode=  data.recipientDetail_bank_bankCode:this.recipientDetail.bank.bankCode="";
  //             data.recipientDetail_bank_currencyCode !=""?this.recipientDetail.bank.currencyCode=  data.recipientDetail_bank_currencyCode:this.recipientDetail.bank.currencyCode="";



  //             data.senderDetail_type !=""?this.senderDetail.type=  data.senderDetail_type:this.senderDetail.type="";
  //             data.senderDetail_idType !=""?this.senderDetail.idType=  data.senderDetail_idType:this.senderDetail.idType="";
  //             data.senderDetail_companyName !=""?this.senderDetail.companyName=  data.senderDetail_companyName:this.senderDetail.companyName="";
  //             data.senderDetail_idNumber !=""?this.senderDetail.idNumber=  data.senderDetail_idNumber:this.senderDetail.idNumber="";
  //             data.senderDetail_idIssueCountry !=""?this.senderDetail.idIssueCountry=  data.senderDetail_idIssueCountry:this.senderDetail.idIssueCountry="";

             
  //               data.senderDetail_address_addressLine1 !=""?this.senderDetail.address.addressLine1=  data.senderDetail_address_addressLine1:this.senderDetail.address.addressLine1="";
  //               data.senderDetail_address_addressLine2 !=""?this.senderDetail.address.addressLine2=  data.senderDetail_address_addressLine2:this.senderDetail.address.addressLine2="";
  //               data.senderDetail_address_addressLine3 !=""?this.senderDetail.address.addressLine3=  data.senderDetail_address_addressLine3:this.senderDetail.address.addressLine3="";
  //               data.senderDetail_address_city !=""?this.senderDetail.address.city=  data.senderDetail_address_city:this.senderDetail.address.city="";
  //               data.senderDetail_address_country !=""?this.senderDetail.address.country=  data.senderDetail_address_country:this.senderDetail.address.country="";
  //               data.senderDetail_address_postalCode !=""?this.senderDetail.address.postalCode=  data.senderDetail_address_postalCode:this.senderDetail.address.postalCode="";
  //               data.senderDetail_address_province !=""?this.senderDetail.address.province=  data.senderDetail_address_province:this.senderDetail.address.province="";
           
  //           }
         
  //   }
  // }
