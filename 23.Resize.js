// Resize

const div = document.createElement("div");
const divText = document.createTextNode("This Is Div");
div.appendChild(divText);
document.body.appendChild(div);

$("*").css({
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});

Object.assign(div.style, {
  width: "100%",
  backgroundColor: "#333",
  color: "#FFF",
  // padding: "10px",
});

// When Resize Screen Height Not Change, When Refresh Height Will Be Changed
$(div).height($(window).height());

// When Resize Window div's Height Will Be Change
// When Use Resize Function
$(() => {
  $(window).on("resize", () => {
    $(div).height($(window).height());
  });
});
