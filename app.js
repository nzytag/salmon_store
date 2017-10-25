'use strict';

var timeArray = [' 6am ', ' 7am ', ' 8am ',' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '];



function Stores(name, minSale, maxSale, avgCookiesPerSale) {
  this.name = name;
  this.minSale = minSale;
  this.maxSale = maxSale;
  this.cookies = [];
  this.avgCookiesPerSale = avgCookiesPerSale;
}

Stores.prototype.cookiesSoldPerHour = function() {
  var min = this.minSale;
  var max = this.maxSale;
  for (var i = 0; i < timeArray.length; i++) {
    var randomCustomer = Math.floor(Math.random() * (max - min) + min);
    var totalCookies = Math.floor(randomCustomer * this.avgCookiesPerSale);
    this.cookies.push(totalCookies);
  }
};

var store = [];
var firstAndPike = new Stores('first and pike', 23, 65, 6.3);
var seatacAirport = new Stores('seatac airport', 3, 24, 1.2);
var seattleCenter = new Stores('seattle Center', 11, 38, 3.7);
var capitolHill = new Stores('capitol hill', 20, 38, 2.3);
var alki = new Stores('alki', 2, 16, 4.6);


store.push(firstAndPike);
store.push(seatacAirport);
store.push(seattleCenter);
store.push(capitolHill);
store.push(alki);

firstAndPike.cookiesSoldPerHour();
seatacAirport.cookiesSoldPerHour();
seattleCenter.cookiesSoldPerHour();
capitolHill.cookiesSoldPerHour();
alki.cookiesSoldPerHour();

var table = document.getElementById('table_content');

var tr = document.createElement('tr');
var td = '<td></td>';

for (var i = 0; i < timeArray.length; i++) {
  td = td + '<td>' + timeArray[i] + '</td>';
}

tr.innerHTML = td;
table.appendChild(tr);

var newRow;

for (var j = 0; j < store.length; j++) {
  newRow = document.createElement('tr');
  newRow.innerHTML = store[j].name;
  table.appendChild(newRow);
  var shopData = (store[j]);
  for (var k = 0; k < timeArray.length; k++) {
    var tableData = document.createElement('td');
    tableData.innerHTML = shopData.cookies[k];
    newRow.appendChild(tableData);
  }
}


















//null
