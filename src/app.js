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
