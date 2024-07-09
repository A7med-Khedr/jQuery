/*
Different Between attr And Prop

attr => Return Attribute
Prop => Return True Or False

*/

const form = document.createElement("form");
const input = document.createElement("input");
const btn = document.createElement("button");
const btnText = document.createTextNode("Click");

// input.disabled = true;

form.appendChild(input);
btn.appendChild(btnText);
form.appendChild(btn);
document.body.appendChild(form);

$(() => {
  $(form).on("click", (e) => {
    e.preventDefault();
  });

  $(btn).on("click", () => {
    $(input).prop("name", "myInput"); // Set Name Property
    $(input).prop("disabled", "disabled"); // Set disabled Property
    console.log($(input).attr("disabled")); // disabled
    console.log($(input).prop("disabled")); // true
  });
});
