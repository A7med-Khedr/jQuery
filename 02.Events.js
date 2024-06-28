/*
  * Note: Make All Code To Comment except You Need, help you understand more
[1] click
[2] Double Click
[3] mouseenter => when you stand on the element
[4] mouseleave => when you leave on the element
[5] hover => It Is Consider Two Function ( mouseenter & mouseleave )
*/

// Create Button Tag To Test Events
const btn = document.createElement("button");
// Create Text Node For Button
const btnText = document.createTextNode("click");
// Append Text To Button
btn.appendChild(btnText);
// Finally, Append Button To Page
document.body.appendChild(btn);

// Create P Tag To Test Click And Other Events
const p = document.createElement("p");
// Create Text Node For P
const pText = document.createTextNode("Click Event");
// Append Text To P
p.appendChild(pText);
// Append P To The PAge
document.body.appendChild(p);

// Add Style For Button
Object.assign(btn.style, {
  padding: " 10px 20px",
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "6px",
  marginBottom: "10px",
});

// Start Test OF Events
$(document).ready(() => {
  // Click Event
  $(btn).click(() => {
    $(p).css("color", "#777"); // If We Click On Button Change P Text Color to #777
  });

  // Double Click Event
  $(btn).dblclick(() => {
    $(p).css("color", "#00F"); // If We Double Click, Change P Text Color to Blue
  });

  // Mouse Enter Event

  $(btn).mouseenter(() => {
    $(p).css("color", "#F00"); //  If We Stand on Button, Change P Text Color to Red
  });

  // Mouse Leave Event

  $(btn).mouseleave(() => {
    $(p).css("color", "#0F0"); // If We Stand and Leave Button, Change P Text Color to Green
  });

  // Hover Event
  $(btn).hover(
    () => {
      // When Hover On Button Change Font Size To 22px
      $(p).css("font-size", "22px");
    }, // ( , ) Important
    () => {
      // When Leave, Font Size Back To Default Value
      $(p).css("font-size", "16px");
    }
  );
});
