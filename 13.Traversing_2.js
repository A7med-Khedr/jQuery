/*
[1] siblings ( Can Write A Selector And Stop Function When Equal This Selector )

[2] next ( Can Write A Selector And Stop Function When Equal This Selector )

[3] nextAll ( Can Write A Selector And Stop Function When Equal This Selector )

[4] nextUntil ( Can Write A Selector And Stop Function When Equal This Selector )

[5] perv ( Can Write A Selector And Stop Function When Equal This Selector )

[6] pervAll ( Can Write A Selector And Stop Function When Equal This Selector )

[7] pervUntil ( Can Write A Selector And Stop Function When Equal This Selector )
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
  // siblings
  $(btn).click(() => {
    $("div.class-1").siblings().css({ background: "#00F" }); // All Element Except Element div.class-1
  });

  // next
  $(btn).click(() => {
    $("div.class-2").next().css({ background: "#00F" }); // Next Of Class-2 ( div.class-3 )
    // Because Next plus 1
  });

  // nextAll
  $(btn).click(() => {
    $("div.class-5").nextAll().css({ background: "#00F" }); // All Element After div.class-5
  });

  // nextAll
  $(btn).click(() => {
    $("div.class-2").nextAll(".class-5").css({ background: "#00F" }); // Search From div.class-2 To div.Class-5
  });

  // nextUntil
  $(btn).click(() => {
    $("div.class-2").nextUntil(".class-7").css({ background: "#00F" }); // For Div 3 Until Div 6
    // Not Include Selector And Parameter Of Function
  });

  // prev
  $(btn).click(() => {
    $("div.class-5").prev().css({ background: "#00F" }); // Element Previous From div.Class-5
  });

  // prevAll
  $(btn).click(() => {
    $("div.class-6").prevAll().css({ background: "#00F" }); // All Element Before div.class-6
  });

  // prevUntil
  $(btn).click(() => {
    $("div.class-5").prevUntil().css({ background: "#00F" }); // All Element Previous div.class-5
  });

  // prevUntil
  $(btn).click(() => {
    $("div.class-5").prevUntil("div.class-2").css({ background: "#00F" }); // Search From div.class-5 To div.Class-5
  });
});
