/*
-- Animate

$(div).animate({CSS Properties}, Speed, CallBAck Function )

-- Note: Every Animate Wait For All Animation Before It

-- Stop Effect
- Stop Animate
Stop( ClearQueue, goToEnd )
By Default ( false, false )

clearQueue If True => Stop All Animation
goToEnd If True => Show The Last Result From Animate

*/

const div = document.createElement("div"); // Create Div To Test Animate
const btn = document.createElement("button"); // And Button To Test Stop Effect
const btnText = document.createTextNode("Click");
btn.appendChild(btnText);

// Add Elements To Page
document.body.appendChild(btn);
document.body.appendChild(div);

// Add Style For Div
Object.assign(div.style, {
  width: "400px",
  height: "200px",
  backgroundColor: "#DDD",
  margin: "auto",
});

Object.assign(btn.style, {
  padding: "10px 20px ",
  backgroundColor: "black",
  color: "#FFF",
  margin: "50px auto",
  borderRadius: "6px",
  display: "block",
});

$(() => {
  $(btn).click(() => {
    $(div).stop();
  });

  $(div).animate(
    {
      width: "600px",
    },
    2000
  );
  $(div).animate(
    {
      height: "600px",
    },
    2000
  );
  $(div).animate(
    {
      borderRadius: "30px",
    },
    2000
  );
});
