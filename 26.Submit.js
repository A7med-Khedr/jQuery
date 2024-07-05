// Submit Event => To Handel Your Form

const form = document.createElement("form");
const inp = document.createElement("input");
const submit = document.createElement("input");
const span = document.createElement("span");

form.appendChild(inp);
form.appendChild(submit);

inp.type = "password";
submit.type = "submit";

document.body.appendChild(form);
document.body.appendChild(span);

$("input").css({
  display: "block",
  margin: "0 0 10px",
});

$(() => {
  $(form).on("submit", function (e) {
    if ($(inp).val().length < 10) {
      $(span)
        .text("password Must Be More Then 10 Letter")
        .show() // To Repeat Show Span
        .delay(1000) // To Wait 1 Second
        .fadeOut(1000);
      e.preventDefault(); // Make Submit Do not Work
    }
  });
});
