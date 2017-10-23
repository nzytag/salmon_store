'use strict';

//first store
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourlyCustomers: function() {
    return Math.floor(Math.random() * (firstAndPike.maxCust - firstAndPike.minCust + 1)) + firstAndPike.minCust;
  },
};

//second store
var seatacAirport = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  hourlyCustomers: function() {
    return Math.floor(Math.random() * (seatacAirport.maxCust - seatacAirport.minCust + 1)) + seatacAirport.minCust;
  },
};

//third store
var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  hourlyCustomers: function() {
    return Math.floor(Math.random() * (seattleCenter.maxCust - seattleCenter.minCust + 1)) + seattleCenter.minCust;
  },
};

//fourth store
var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  hourlyCustomers: function() {
    return Math.floor(Math.random() * (capitolHill.maxCust - capitolHill.minCust + 1)) + capitolHill.minCust;
  },
};

//fifth store
var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  hourlyCustomers: function() {
    return Math.floor(Math.random() * (alki.maxCust - alki.minCust + 1)) + alki.minCust;
  },
};
