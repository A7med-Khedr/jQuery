/*
[1] addClass => Add Class To Element
[2] removeClass => Remove Class To Element
[3] toggleClass => Switch Between addClass And removeClass
*/

const btn = document.createElement("button");
const div = document.createElement("div");

const btnText = document.createTextNode("Click");
const divText = document.createTextNode("This Is Div");

div.classList = "classOne";

btn.appendChild(btnText);
div.appendChild(divText);

document.body.appendChild(btn);
document.body.appendChild(div);

Object.assign(btn.style, {
  padding: " 10px 20px",
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "6px",
  marginBottom: "10px",
});

$(() => {
  // Add Class
  $(btn).click(() => {
    $(div).addClass("classTwo"); // See Result In Inspect
  });

  // Remove Class
  $(btn).click(() => {
    $(div).removeClass("classOne"); // See Result In Inspect
  });

  // Toggle Class
  $(btn).click(() => {
    $(div).toggleClass("classThree"); // See Result In Inspect
  });
});
