// Select

const textArea = document.createElement("textarea");

$(textArea).css({
  backgroundColor: "#d4d4d4",
  width: "200px",
  height: "50px",
  padding: "10px 20px",
  margin: "0 auto 10px ",
  display: "block",
  borderRadius: " 6px",
  border: "none",
});

document.body.appendChild(textArea);

// When Write Any Thing In Textarea And Blur When Focus After Blur Select Textarea
$(() => {
  $(textArea).on("click", () => {
    $(textArea).select();
  });
});
