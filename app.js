
'use strict';

//store #
var firstAndPike = {
  location: 'First and Pike',
  minSale: 23,
  maxSale: 65,
  avgcookiesPerSale: 6.3,
  totalcookies: 0,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates a random number of customers
    var min = this.minSale;
    var max = this.maxSale;
    return Math.floor(Math.random() * (max - min) + min); //this code creates the number
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndcookies = []; //array that is gets filled by the hoursAndcookies.push
    var totalcookies = 0; //the starting at 0 and gets added by each sale to create total hour
    for (var i = 0; i < this.time.length; i++) {
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgcookiesPerSale); // use to shorten code
      hoursAndcookies.push([this.time[i],cookiesPerHour]); //use to push hoursAndcookies to the empty array
      totalcookies = totalcookies + cookiesPerHour; //this defines the var totalcookies in this function.
    }
    this.totalcookies = totalcookies; // this defines the object totalcookies
    return hoursAndcookies;
  }
};

var seaTacAirport = {
  location: 'SeaTac Airport',
  minSale: 3,
  maxSale: 24,
  avgcookiesPerSale: 1.2,
  totalcookies: 0,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates a random number of customers
    var min = this.minSale;
    var max = this.maxSale;
    return Math.floor(Math.random() * (max - min) + min);
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndcookies = [];
    var totalcookies = 0;
    for (var i = 0; i < this.time.length; i++) {
    //console.log(this.randomCustomer() * Math.floor(this.avgcookiesPerSale));
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgcookiesPerSale);
      hoursAndcookies.push([this.time[i],cookiesPerHour]);
      totalcookies = totalcookies + cookiesPerHour;
    }
    this.totalcookies = totalcookies;
    return hoursAndcookies;
  }
};

var seattleCenter = {
  location: 'Seattle Center',
  minSale: 11,
  maxSale: 38,
  avgcookiesPerSale: 3.7,
  totalcookies: 0,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates a random number of customers
    var min = this.minSale;
    var max = this.maxSale;
    return Math.floor(Math.random() * (max - min) + min);
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndcookies = [];
    var totalcookies = 0;
    for (var i = 0; i < this.time.length; i++) {
    //console.log(this.randomCustomer() * Math.floor(this.avgcookiesPerSale));
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgcookiesPerSale);
      hoursAndcookies.push([this.time[i],cookiesPerHour]);
      totalcookies = totalcookies + cookiesPerHour;
    }
    this.totalcookies = totalcookies;
    return hoursAndcookies;
  }
};

var capitolHill = {
  location: 'Capitol Hill',
  minSale: 11,
  maxSale: 38,
  avgcookiesPerSale: 3.7,
  totalcookies: 0,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates a random number of customers
    var min = this.minSale;
    var max = this.maxSale;
    return Math.floor(Math.random() * (max - min) + min);
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndcookies = [];
    var totalcookies = 0;
    for (var i = 0; i < this.time.length; i++) {
    //console.log(this.randomCustomer() * Math.floor(this.avgcookiesPerSale));
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgcookiesPerSale);
      hoursAndcookies.push([this.time[i],cookiesPerHour]);
      totalcookies = totalcookies + cookiesPerHour;
    }
    this.totalcookies = totalcookies;
    return hoursAndcookies;
  }
};

var alki = {
  location: 'Alki',
  minSale: 11,
  maxSale: 38,
  avgcookiesPerSale: 3.7,
  totalcookies: 0,
  time: [
    '6am', '7am', '8am','9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'
  ],
  randomCustomer: function() { //this generates a random number of customers
    var min = this.minSale;
    var max = this.maxSale;
    return Math.floor(Math.random() * (max - min) + min);
  },
  cookiesSoldPerHour: function() { // makes totoal cookeies sold per hour
    var hoursAndcookies = [];
    var totalcookies = 0;
    for (var i = 0; i < this.time.length; i++) {
    //console.log(this.randomCustomer() * Math.floor(this.avgcookiesPerSale));
      var cookiesPerHour =  Math.floor(this.randomCustomer() * this.avgcookiesPerSale);
      hoursAndcookies.push([this.time[i],cookiesPerHour]);
      totalcookies = totalcookies + cookiesPerHour;
    }
    this.totalcookies = totalcookies;
    return hoursAndcookies;
  }
};

var shops = [firstAndPike,seaTacAirport,seattleCenter,capitolHill,alki]; //creating a array of all the stores from above
for (var j = 0; j < shops.length; j++) {
  //creating a for loop to add <p> and <ul> and <l> to each page. we use the var shop from above to title it
  var pEl = document.createElement('p'); //creating in in the cloud/memory
  pEl.innerHTML = shops[j].location; //giving pEl content in memory/cloud from line 143.
  document.body.appendChild(pEl); //we put the pEl on the HTML page itself
  var el = document.createElement('ul'); //create a <ul> tage in the cloud/memory.
  var shopData = shops[j].cookiesSoldPerHour(); //getting a method of a item from the array[j]
  var shopLi = ''; //creating a long list of <li> which we fill will line 152
  for( var i = 0; i < shopData.length; i++) { //for loop that makes a <li> and adds line 153 and joins it together with strings to make a sentence.
    var lineItem = '<li>' + shopData[i].join(': ') + ' cookies</li>'; // we created a var for the string for readablity which we use on the next line and we create our <li> here
    shopLi = shopLi + lineItem; // we define shopLi
  };
  var totalLi = '<li>Total:' + shops[j].totalcookies + ' cookies</li>';// we created a var for the string for readablity
  el.innerHTML = shopLi + totalLi; // adding it to the bottom of the shopLi <li>
  document.body.appendChild(el); // add this to the HTML.
};
