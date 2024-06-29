/*
[1] Width => Width Only Without padding, Margin And Border
[2] Height => Height Only Without padding, Margin And Border

[3] innerWidth => Width And Padding only
[4] outerWidth => width And Padding And Border
-- outerWidth Have One Parameter ( outerWidth( true ) ) If True Calculation Margin

[5] innerHeight => Height And Padding only
[6] outerHeight => Height And Padding And Border
-- outerHeight Have One Parameter ( outerHeight( true ) ) If True Calculation Margin
*/

const div = document.createElement("div");
const divText = document.createTextNode("This Is Div");

div.appendChild(divText);
document.body.appendChild(div);

// Css Use Jquery
$(div).css({
  width: "400px",
  height: "400px",
  padding: "20px",
  margin: "20px",
  border: "10px solid #333",
  backgroundColor: "#CCC",
});

console.log($(div).width()); // 400px Width Only
console.log($(div).innerWidth()); // 440px Width And Padding
console.log($(div).outerWidth()); // 460px Width, Padding And Border
console.log($(div).outerWidth(true)); // 500px Width, Padding, Margin And Border

console.log(`=`.repeat(20));

console.log($(div).height()); // 400px Height Only
console.log($(div).innerHeight()); // 440px Height And Padding
console.log($(div).outerHeight()); // 460px Height, Padding And Border
console.log($(div).outerHeight(true)); // 500px Height, Padding, Margin And Border
