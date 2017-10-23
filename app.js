'use strict';

//first store
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hoursOfOperations: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  salesPerHour: [],
  salesTotal: 0,
  hourlyCustomers: function() {
    var min = this.minCust;
    var max = this.maxCust;

    var salesAmmount = [];
    for (var i = 0; i < this.hoursOfOperations.length; i++) {
      var randomSales = Math.floor(Math.random() * (max - min) + min);

      salesAmmount.push(Math.ceil(randomSales * this.avgSale));
    }
    this.salesPerHour = salesAmmount;
    return;
  },
};

//second store
var seatacAirport = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  hoursOfOperations: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  salesPerHour: [],
  salesTotal: 0,
  hourlyCustomers: function() {
    var min = this.minCust;
    var max = this.maxCust;

    var salesAmmount = [];
    for (var i = 0; i < this.hoursOfOperations.length; i++) {
      var randomSales = Math.floor(Math.random() * (max - min) + min);

      salesAmmount.push(Math.ceil(randomSales * this.avgSale));
    }
    this.salesPerHour = salesAmmount;
    return;
  },
};

//third store
var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  hoursOfOperations: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  salesPerHour: [],
  salesTotal: 0,
  hourlyCustomers: function() {
    var min = this.minCust;
    var max = this.maxCust;

    var salesAmmount = [];
    for (var i = 0; i < this.hoursOfOperations.length; i++) {
      var randomSales = Math.floor(Math.random() * (max - min) + min);

      salesAmmount.push(Math.ceil(randomSales * this.avgSale));
    }
    this.salesPerHour = salesAmmount;
    return;
  },
};

//fourth store
var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  hoursOfOperations: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  salesPerHour: [],
  salesTotal: 0,
  hourlyCustomers: function() {
    var min = this.minCust;
    var max = this.maxCust;

    var salesAmmount = [];
    for (var i = 0; i < this.hoursOfOperations.length; i++) {
      var randomSales = Math.floor(Math.random() * (max - min) + min);

      salesAmmount.push(Math.ceil(randomSales * this.avgSale));
    }
    this.salesPerHour = salesAmmount;
    return;
  },
};


//fifth store
var alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  hoursOfOperations: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  salesPerHour: [],
  salesTotal: 0,
  hourlyCustomers: function() {
    var min = this.minCust;
    var max = this.maxCust;

    var salesAmmount = [];
    for (var i = 0; i < this.hoursOfOperations.length; i++) {
      var randomSales = Math.floor(Math.random() * (max - min) + min);

      salesAmmount.push(Math.ceil(randomSales * this.avgSale));
    }
    this.salesPerHour = salesAmmount;
    return;
  },
};
