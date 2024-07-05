/*
[1] One Event => Happen One Time Only
*/

// Create Two Div
const div01 = document.createElement("div");
const div02 = document.createElement("div");

// Append Div In Page
document.body.appendChild(div01);
document.body.appendChild(div02);

// Select All Div In Page
$("div").css({
  backgroundColor: "#333",
  width: "200px",
  height: "50px",
  borderRadius: "6px",
  margin: "10px auto",
});

// Test different Between On And One Events
$(() => {
  // When Click n Times With Each Click Height Increase By 30px
  $(div01).on("click", function () {
    $(this).animate({
      height: "+=30px",
    });
  });

  // Animate Happen One Time Only
  $(div02).one("click", function () {
    $(this).animate({
      height: "+=30px",
    });
  });
});
