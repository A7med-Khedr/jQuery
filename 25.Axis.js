// Page X And Page Y

const div = document.createElement("div");
Object.assign(div.style, {
  backgroundColor: "#333",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  display: "none",
});
document.body.appendChild(div);

// When Click In Any Place In Page Show Div In This Place
$(() => {
  $("html").on("click", (e) => {
    $(div)
      .show()
      .offset({
        left: e.pageX - 15,
        top: e.pageY - 15,
      });
  });
});
