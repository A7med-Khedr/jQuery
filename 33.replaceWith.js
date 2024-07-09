const div = document.createElement("div");
const btn = document.createElement("button");

const divText = document.createTextNode("This Is Div");
const btnText = document.createTextNode("Click");

div.appendChild(divText);
btn.appendChild(btnText);

document.body.appendChild(div);
document.body.appendChild(btn);

$(div).css({
  backgroundColor: "#d4d4d4",
  padding: "20px",
  margin: " 0 0 10px",
});

$(() => {
  $(btn).on("click", () => {
    // replaceWith => Replace Selector With New Selector
    $(div).replaceWith("<div>Hello jQuery</div>");

    // CSS For New Div
    $("div").css({
      backgroundColor: "#333",
      color: "#FFF",
      padding: "20px",
      margin: " 0 0 10px",
    });
  });
});
