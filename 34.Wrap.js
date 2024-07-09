const span01 = document.createElement("span");
const span02 = document.createElement("span");
const span03 = document.createElement("span");

const btn01 = document.createElement("button");
const btn02 = document.createElement("button");

btn01.textContent = "Add Parent";
btn02.textContent = "Remove Parent";
span01.innerText = "Ahmed";
span02.innerText = "Osama";
span03.innerText = "Mohamed";

document.body.append(span01, span02, span03, btn01, btn02);

$(() => {
  // Append Span To Div
  // Add Div As A Parent For Span
  $(btn01).on("click", () => {
    $("span").wrap("<div></div>");

    // Add Css Style For Div
    $("div").css({
      backgroundColor: "#333",
      color: "#FFF",
      margin: "0 0 10px",
      borderRadius: "6px",
      width: "400px",
      padding: "20px ",
      fontFamily: "Arial",
    });
  });

  // Remove parent ( div )
  $(btn02).on("click", () => {
    $("span").unwrap();
  });
});
