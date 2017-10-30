'use strict';


var today =  new Date ();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Good Evening! Welcome to Pat\'s Cookies';
} else if (hourNow > 12) {
  greeting = 'Good Afternoon! Welcome to Pat\'s Cookies!';
} else if (hourNow > 0) {
  greeting = 'Good Morning! Welcome to Pat\'s Breakfast place!';
} else {
  greeting = 'Welcome!';
}

document.write('<h1>' + greeting + '<h/1>');
