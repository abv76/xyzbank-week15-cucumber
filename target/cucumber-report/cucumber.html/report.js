$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bankmanager.feature");
formatter.feature({
  "line": 2,
  "name": "Bank manager should add customer successfully and open account successfully.",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankManagerAddCustomer"
    }
  ]
});
formatter.before({
  "duration": 5749855400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Bank manager should login and add customer successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;bank-manager-should-login-and-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter firstame \u003c\"James\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter lastname \u003c\"Bond\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter postcode \u003c\"SU38UN\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should see customer added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerActions.userIsOnHomepage()"
});
formatter.result({
  "duration": 204659000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 104939700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 118187700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterFirstame(String)"
});
formatter.result({
  "duration": 271147500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterLastname(String)"
});
formatter.result({
  "duration": 122119100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SU38UN",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterPostcode(String)"
});
formatter.result({
  "duration": 111979000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 72319700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 20700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 30544000,
  "status": "passed"
});
formatter.after({
  "duration": 841328500,
  "status": "passed"
});
formatter.before({
  "duration": 2320467200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Sanity,"
    },
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enter firstame \u003c\"James\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter lastname \u003c\"Bond\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enter postcode \u003c\"SU38UN\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User should see customer added successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User click on home button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User clicks on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User search for customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User should see logout button and logout successfully\u003c\"James Bond\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerActions.userIsOnHomepage()"
});
formatter.result({
  "duration": 48400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 80414800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 246229700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterFirstame(String)"
});
formatter.result({
  "duration": 199417600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterLastname(String)"
});
formatter.result({
  "duration": 100327200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SU38UN",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterPostcode(String)"
});
formatter.result({
  "duration": 128092300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 67492500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 19100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 45844600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnHomeButton()"
});
formatter.result({
  "duration": 95693800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClicksOnCustomerLoginTab()"
});
formatter.result({
  "duration": 61973700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 41
    }
  ],
  "location": "CustomerActions.userSearchForCustomerFromDropdown(String)"
});
formatter.result({
  "duration": 360794000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnLoginButton()"
});
formatter.result({
  "duration": 72022000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James Bond",
      "offset": 55
    }
  ],
  "location": "CustomerActions.userShouldSeeLogoutButtonAndLogoutSuccessfully(String)"
});
formatter.result({
  "duration": 133454200,
  "status": "passed"
});
formatter.after({
  "duration": 856735800,
  "status": "passed"
});
formatter.before({
  "duration": 2398809800,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "Given User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User enter firstame \u003c\"James\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User enter lastname \u003c\"Bond\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User enter postcode \u003c\"SU38UN\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User should see customer added successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on home button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User clicks on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User select customer search \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User select currency \u003c\"pound\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User should see customer account details \u003c\"Account created successfully with account Number :1016\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "User click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "User clicks on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "User search for customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User click on deposit money tab",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User enter amount \u003c\"100\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on deposit amount button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User should see money deposited successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerActions.givenUserIsOnHomepage()"
});
formatter.result({
  "duration": 52400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 66963100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 120525900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterFirstame(String)"
});
formatter.result({
  "duration": 178715100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterLastname(String)"
});
formatter.result({
  "duration": 95215300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SU38UN",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterPostcode(String)"
});
formatter.result({
  "duration": 117598300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 68166000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 22100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 21146700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnHomeButton()"
});
formatter.result({
  "duration": 120501700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 66698100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClicksOnOpenAccountTab()"
});
formatter.result({
  "duration": 54848000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 30
    }
  ],
  "location": "BankManagerActions.userSelectCustomerSearch(String)"
});
formatter.result({
  "duration": 486615400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pound",
      "offset": 23
    }
  ],
  "location": "BankManagerActions.userSelectCurrency(String)"
});
formatter.result({
  "duration": 215175000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnProcessButton()"
});
formatter.result({
  "duration": 63093700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 43
    }
  ],
  "location": "BankManagerActions.userShouldSeeCustomerAccountDetails(String)"
});
formatter.result({
  "duration": 13322200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnHomeButton()"
});
formatter.result({
  "duration": 69291900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClicksOnCustomerLoginTab()"
});
formatter.result({
  "duration": 62940300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 41
    }
  ],
  "location": "CustomerActions.userSearchForCustomerFromDropdown(String)"
});
formatter.result({
  "duration": 275134700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnLoginButton()"
});
formatter.result({
  "duration": 70139100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositMoneyTab()"
});
formatter.result({
  "duration": 189832700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 20
    }
  ],
  "location": "CustomerActions.userEnterAmount(String)"
});
formatter.result({
  "duration": 136787100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositAmountButton()"
});
formatter.result({
  "duration": 58773700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldSeeMoneyDepositedSuccessfullyMessage()"
});
formatter.result({
  "duration": 31008200,
  "status": "passed"
});
formatter.after({
  "duration": 770991400,
  "status": "passed"
});
formatter.before({
  "duration": 2263022100,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Customer should withdraw money successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "Given User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "User enter firstame \u003c\"James\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User enter lastname \u003c\"Bond\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User enter postcode \u003c\"SU38UN\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User should see customer added successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User click on home button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User clicks on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User select customer search \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User select currency \u003c\"pound\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User should see customer account details \u003c\"Account created successfully with account Number :1016\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "User click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "User clicks on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "User search for customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "User click on deposit money tab",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "User enter amount \u003c\"100\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User click on deposit amount button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User should see money deposited successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "User should click on withdrawal tab",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "User enter withdraw amount \u003c\"50\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User click on withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User should see withdrawal successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerActions.givenUserIsOnHomepage()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 82515100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 110427800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterFirstame(String)"
});
formatter.result({
  "duration": 177880200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterLastname(String)"
});
formatter.result({
  "duration": 100540200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SU38UN",
      "offset": 22
    }
  ],
  "location": "BankManagerActions.userEnterPostcode(String)"
});
formatter.result({
  "duration": 113868400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 75166900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 25600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 22975200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnHomeButton()"
});
formatter.result({
  "duration": 110695800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 144124600,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClicksOnOpenAccountTab()"
});
formatter.result({
  "duration": 69239300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 30
    }
  ],
  "location": "BankManagerActions.userSelectCustomerSearch(String)"
});
formatter.result({
  "duration": 278528500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pound",
      "offset": 23
    }
  ],
  "location": "BankManagerActions.userSelectCurrency(String)"
});
formatter.result({
  "duration": 200485400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnProcessButton()"
});
formatter.result({
  "duration": 55423300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 43
    }
  ],
  "location": "BankManagerActions.userShouldSeeCustomerAccountDetails(String)"
});
formatter.result({
  "duration": 10851700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerActions.userClickOnHomeButton()"
});
formatter.result({
  "duration": 60389400,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClicksOnCustomerLoginTab()"
});
formatter.result({
  "duration": 52769000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 41
    }
  ],
  "location": "CustomerActions.userSearchForCustomerFromDropdown(String)"
});
formatter.result({
  "duration": 262263900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnLoginButton()"
});
formatter.result({
  "duration": 66162500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositMoneyTab()"
});
formatter.result({
  "duration": 190276400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 20
    }
  ],
  "location": "CustomerActions.userEnterAmount(String)"
});
formatter.result({
  "duration": 160356700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositAmountButton()"
});
formatter.result({
  "duration": 66321000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldSeeMoneyDepositedSuccessfullyMessage()"
});
formatter.result({
  "duration": 31598200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldClickOnWithdrawalTab()"
});
formatter.result({
  "duration": 59927000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 29
    }
  ],
  "location": "CustomerActions.userEnterWithdrawAmount(String)"
});
formatter.result({
  "duration": 2144798400,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnWithdrawButton()"
});
formatter.result({
  "duration": 102817800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldSeeWithdrawalSuccessfulMessage()"
});
formatter.result({
  "duration": 50929600,
  "status": "passed"
});
formatter.after({
  "duration": 806186600,
  "status": "passed"
});
});