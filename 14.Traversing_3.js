/*
[1] First
[2] Last
[3] eq
[4] Filter
[5] Not
*/

// Create Page
const btn = document.createElement("button");
$(btn).text("Click");
document.body.appendChild(btn);

$(btn).css({
  margin: "20px auto",
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "#FFF",
  borderRadius: "6px",
  display: "block",
});

// Create A Container Section To Contain All Div
const container = document.createElement("section");
document.body.appendChild(container);
// Css To Container
Object.assign(container.style, {
  width: "500px",
  margin: "auto",
});

// Create 8 Div For Page
for (let i = 0; i < 8; i++) {
  const div = document.createElement("div");
  // Text To Div
  div.textContent = `Div ${i + 1}`;
  // Class To Div
  div.className = `class-${i + 1}`;
  // And Append Div To Container
  container.appendChild(div);
  // Style For Div
  $(div).css({
    backgroundColor: "#333",
    margin: "10px",
    padding: "20px",
    color: "#FFF",
    borderRadius: "10px",
  });
}

// Start Traversing :)

$(() => {
  // First
  $(btn).click(() => {
    $("div").first().css("background", "#00F"); // Get First Div In Page
  });

  // Lats
  $(btn).click(() => {
    $("div").last().css("background", "#00F"); // Get last Div In Page
  });

  // eq => Use Index eq(5) => Element 6
  $(btn).click(() => {
    $("div").eq(5).css("background", "#00F"); // Get Element Index 5 ( Div 6 )
  });

  // Filter
  $(btn).click(() => {
    $("div")
      .filter((ele) => {
        return ele === 3; // 3 Is A Index And Can Write Any Thing In Parameter For Filter Example Function
      })
      .css("background", "#00F");
  });

  // Not
  $(btn).click(() => {
    $("div")
      .not((ele) => {
        return ele === 5; // 5 Is A Index And Can Write Any Thing In Parameter For not Example Function
        // Any Div In Page Not Index 5
      })
      .css("background", "#00F");
  });
});
