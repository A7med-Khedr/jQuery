/*
-- [1] is

  $(span).parent().is("div") => Do Something
  $(span).parent().is(".test") => Do Something

*/

const div = document.createElement("div");

for (let i = 0; i < 5; i++) {
  // Create Span
  const span = document.createElement("span");
  // Add Text To Span
  span.textContent = `Span ${i + 1}`;
  // Add Style For Span
  $(span).css({
    color: "#FFF",
    backgroundColor: "#333",
    display: "block",
    width: "300",
    margin: "10px auto",
    padding: "10px",
    borderRadius: "6px",
  });

  // Add Class ( test ) To Even Span
  if (i % 2 === 1) {
    $(span).addClass("test");
  }
  // Append Span To Div
  div.appendChild(span);
}

// Append Div To Dom
document.body.appendChild(div);

$(() => {
  // Add Cluck Event To Spans
  $("span").on("click", function () {
    // If Element Is The First Element Or Last Element Print THis In Console
    if ($(this).is(":first-child, :last-child")) {
      console.log(`This Is The First Child Or Last Child`);
    }

    // If Element Contain Class Test Print This In Console
    if ($(this).is(".test")) {
      console.log(`This Is Contain Test Class`);
    }
  });
});
