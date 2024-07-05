const div = document.createElement("div");
const btn = document.createElement("button");
const btnText = document.createTextNode("Click");
btn.appendChild(btnText);
$(div).css({
  background: "#d4d4d4",
  padding: "10px",
  width: "300px",
  height: "30px",
  margin: "10px",
  borderRadius: "10px",
});

$(btn).css({
  background: "#333",
  color: "#FFF",
  padding: "10px 20px ",
  margin: "10px",
  display: "block",
  borderRadius: "6px",
});

document.body.appendChild(btn);
document.body.appendChild(div);

$(() => {
  $(div).on("click", function () {
    $(this).css({
      background: "#333",
    });
  });

  $(btn).on("click", () => {
    $(div).clone(false /* By Default*/).appendTo("body");
  }); // Clone Div Only Not Event

  $(btn).on("click", () => {
    $(div).clone(true).appendTo("body");
  }); // Clone Div And Event On This Div
});
