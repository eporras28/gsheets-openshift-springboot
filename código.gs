function callFruitsAPI() {
  var API_KEY = 'API-KEY';
  
  // URL and params for the Mailchimp API
  var root = 'URL-MICROSERVICES';
  var endpoint = 'api/fruits/';
  
  // parameters for url fetch
  var params = {
    'method': 'GET',
    'muteHttpExceptions': true,
    'headers': {
      'api-key' :  API_KEY
    }
  };
  
  // Call the Numbers API for random math fact
  var response = UrlFetchApp.fetch(root+endpoint, params);
  
  // Parse the JSON reply
  var json = response.getContentText();
  return JSON.parse(json);

}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('API Fruits Menu')
      .addItem('List fruits','displayFruitsData')
      .addToUi();
}

function displayFruitsData() {
  
  // pick up the search term from the Google Sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  var fruits = callFruitsAPI();
  
  //var results = fruits["results"];
  
  var output = []
  
  fruits.forEach(function(elem,i) {
    output.push([elem["id"],elem["name"]]);
  });
  
  
  // adds an index number to the array
  output.forEach(function(elem,i) {
    elem.unshift(i + 1);
  });
  
  var len = output.length;
  
  // clear any previous content
  sheet.getRange(2,1,500,3).clearContent();
  
  // paste in the values
  sheet.getRange(2,1,len,3).setValues(output);
  
  
}
