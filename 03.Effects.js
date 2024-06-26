/*
[1] Hide => Add Display: none And Hide ELement
-- hide(speed, callback function)
-- speed by default is 400ms
[2] Show => Add Display: block And show ELement
-- show(speed, callback function)
[3] Toggle => It works once to show the element and once to hide it
-- toggle(speed, callback function)
*/

// Create Button Tag To Test Events
let btn = document.createElement("button");
// Create Text Node For Button
let btnText = document.createTextNode("click");
// Append Text To Button
btn.appendChild(btnText);
// Finally, Append Button To Page
document.body.appendChild(btn);

// Create P Tag To Test Click And Other Events
let p = document.createElement("p");
p.style.color = "#F00";
// Create Text Node For P
let pText = document.createTextNode("Click Event");
// Append Text To P
p.appendChild(pText);
// Append P To The PAge
document.body.appendChild(p);

// Create Another Paragraph Tag To Test show Effect
let p02 = document.createElement("p");
p02.style.color = "#00F";
// Create Text Node For P
let p02Text = document.createTextNode("Show Effect");
// Append Text To P
p02.appendChild(p02Text);

p02.style.display = "none";
// Append P To The PAge
document.body.appendChild(p02);

// Start Events

$(document).ready(() => {
  // hide effect
  $(btn).click(() => {
    $(p).hide(2000, () => {
      $(btn).css("color", "#00F");
    }); // When Click On Button Hide Paragraph Element
    // hide Function Add Inline Style To Paragraph Tag
    // display: none
    // Callback Function. Change Color Of Button To Blue When Paragraph Is Hide
  });

  // Show effect
  $(btn).click(() => {
    $(p02).show(); // When Click On Button show Paragraph Element
    // show Function Add Inline Style To Paragraph Tag
    // display: block
  });
  // When We Click On Button hide P And Show p02

  $(btn).click(() => {
    // $(p).toggle(); // It works once to show the element and once to hide it
    // once Add display: none
    // And once Add display: block
    // When We Click
  });
});
