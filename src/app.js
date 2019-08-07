/*======================= URADITI NA PROJEKTU =============================

https://medium.com/@bryanmanuele/how-i-implemented-my-own-spa-routing-system-in-vanilla-js-49942e3c4573
https://medium.com/@etiennerouzeaud/a-simple-crud-application-with-javascript-ebc82f688c59
==========================================================================*/

import 'babel-polyfill';
import $ from 'jquery';
import people from './people';
import NavigationBar from './moduls/navigation_bar/runner';

$('<h1>People</h1>').appendTo('.aside');
const ul = $('<ul></ul>').appendTo('.aside');
for (const person of people){
    $('<li></li>').text(person).appendTo(ul);
}

new NavigationBar();
