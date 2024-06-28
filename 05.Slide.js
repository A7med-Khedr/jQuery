/*
[1] slideDown With Two Optional Parameter ( Speed,callBack Function )
-- Depend On Height, Show Element When Height = 100%

[2] slideUp With Two Optional Parameter ( Speed,callBack Function )
-- Depend On Height, Hide Element When Height = 0

[3] slideToggle With Two Optional Parameter ( Speed,callBack Function )
-- Switch Between slideUp And slideDown
*/

const div01 = document.createElement("div");
const div02 = document.createElement("div");

// Style Css Use Jquery

$(div01).css({
  padding: "10px",
  "background-color": "#EEE",
  margin: "20px auto 0",
  width: "400px",
  border: "1px solid #CCC",
});

// Style Css Use Object In Javascript
Object.assign(div02.style, {
  padding: "20px",
  "background-color": "#EEE",
  margin: "0 auto",
  width: "400px",
});

const div01Text = document.createTextNode(
  "Click Here To Show Or Hide Another Div"
);
const div02Text = document.createTextNode("Slide");

div01.appendChild(div01Text);
div02.appendChild(div02Text);

document.body.appendChild(div01);
document.body.appendChild(div02);

$(() => {
  // Slide Down
  // Note: Add display: none Style In div02
  $(div01).click(() => {
    $(div02).slideDown("slow", () => {
      div01.style.color = "#666";
    });
  });

  // Slide Up
  $(div01).click(() => {
    $(div02).slideUp("fast", () => {
      div01.style.borderColor = "#F00";
    });
  });

  // Slide Toggle
  $(div01).click(() => {
    $(div02).slideToggle(2000);
  });
});
