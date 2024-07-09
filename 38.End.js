// End => End Chain And New Begin
const div = document.createElement("div");

div.innerHTML = `Hello <span>jQuery</span> We <strong>Love</strong> It`;

document.body.append(div);

$(() => {
  $(div)
    .find("span")
    .css("color", "#0F0")
    .end() // End Task And Access For Div
    .find("strong")
    .css("color", "#F00")
    .end() // End Task And Access For Div
    .css("color", "#00F");
  // Equal
  /*
    $(div).find("span").css("color", "#0F0");
    $(div).find("strong").css("color", "#F00");
    $(div).css("color", "#00F");
    */
});
