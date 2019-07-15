import 'babel-polyfill';
import $ from 'jquery';
import people from './people';

$('<h1>People</h1>').appendTo('.aside');
const ul = $('<ul></ul>').appendTo('.aside');
for (const person of people){
    $('<li></li>').text(person).appendTo(ul);
}



// people = require ('./people.js');
//
//     console.log(people);