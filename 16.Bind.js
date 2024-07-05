/*
Bind Event

-- Can You Use Bind With Two Function Or More
$("div").bind({ "mouseenter mouseleave", () => {

  -- Write You Function Here And Call Function When mouseenter And mouseleave

  }
})


$("div").bind({
  click: () => { -- Write Your Function -- }
  mouseenter: () => { -- Write Your Function -- }
  mouseleave: () => { -- Write Your Function -- }
})

*/

// Create Div
const div = document.createElement("div");
const divText = document.createTextNode("This I Div");

// Create Button
const btn = document.createElement("button");
const btnText = document.createTextNode("Click");

// And Append Button To Page
btn.appendChild(btnText);
document.body.appendChild(btn);

// And Append Div To Page
div.appendChild(divText);
document.body.appendChild(div);

// Add Style For Div
$(div).css({
  backgroundColor: "#EEE",
  width: "400px",
  height: "100px",
  margin: "auto",
  padding: "20px",
});

// Add Style For Button
$(btn).css({
  backgroundColor: "#333",
  color: "#fff",
  margin: "10px auto",
  padding: "10px 20px",
  borderRadius: "6px",
  display: "block",
  fontSize: "18px",
});

// Start Bind Event
$(() => {
  // Can You Create Any Function And Call It
  // Function Call ( changeText ) To Change Text
  $(div).bind("changeText", () => {
    $(div).text("You Are Click Me");
  });

  // And Function To Change Style For Div
  $(div).bind("bkColor", () => {
    $(div).css("background-color", "#333");
    $(div).css("color", "#FFF");
    $(div).css("border-radius", "10px");
    $(div).text("You Are Double Click Me");
  });

  $(btn).click(() => {
    $(div).trigger("changeText");
  });

  $(btn).dblclick(() => {
    $(div).trigger("bkColor");
  });
});
