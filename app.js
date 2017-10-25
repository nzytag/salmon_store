'use strict';

var timeArray = ['store name', ' 6am ', ' 7am ', ' 8am ',' 9am ', ' 10am ', ' 11am ', ' 12pm ', ' 1pm ', ' 2pm ', ' 3pm ', ' 4pm ', ' 5pm ', ' 6pm ', ' 7pm ', ' 8pm '];



function Stores(name, minSale, maxSale, timeArray) {
  this.name = name;
  this.minSale = minSale;
  this.maxSale = maxSale;
  this.timeArray = timeArray;
  this.cookieArray = [];
}

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

var table = document.getElementById('table_content');

var tr = document.createElement('tr');
var td = '';


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
}

var shops = [firstAndPike, seatacAirport, seattleCenter, capitolHill, alki]; //creating a array of all the stores from above
for (var k = 0; k < shops.length; k++) {

  var pEl = document.createElement('h1');
  pEl.innerHTML = shops[k].name;
  document.body.appendChild(pEl);

  var el = document.createElement('ul');
  var shopData = (shops[k])();
  console.log(shopData);
  var shopLi = '';
  for( var l = 0; l < shopData.length; l++) {
    var lineItem = '<li>' + shopData[l].join(' : ') + ' cookies</li>';
    shopLi = shopLi + lineItem;
  };
  var totalLi = '<h4>Total: ' + shops[k].totalcookies + ' cookies</h4>';
  el.innerHTML = shopLi + totalLi;
  document.body.appendChild(el);
};
