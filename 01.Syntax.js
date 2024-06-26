/*
$(document).ready(function() {
  ? Write Your Code Here
});

* Equal =>

$(function() {
? Write Your Code Here
});

$ => //? The Main Character In jQuery To Select Element

(Write Any Selector)

* .ready() //? Is A Function Wait Page To Load

*/

// Create P To Test Jquery
let myP = document.createElement("p");
// And Create Text Node For p
let pText = document.createTextNode("Test jQuery Syntax");
// Append Text To Paragraph
myP.appendChild(pText);
// And Append Paragraph To PAge
document.body.appendChild(myP);

// Test jquery
$(document).ready(function () {
  $(myP).hide();
});

// Or

$(function () {
  $("p").hide();
});

// ("p") Is A Selector
// .hide() => Is A Function To Hide Element Equal => Display: none
