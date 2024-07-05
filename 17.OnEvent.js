/*
Can You Use On Event Like ( Bind, Live, Delegate )

If You Crated Element By Js And You Need Add Any Function
Must Be Use On Event
( Click ) // Error
$("Selector").on("click", () => {}) // Right

*/

const btn = document.createElement("button");
const btnText = document.createTextNode("Click");

btn.appendChild(btnText);
document.body.appendChild(btn);

const div = document.createElement("div");
const divText = document.createTextNode("This Is div");

div.appendChild(divText);
document.body.appendChild(div);

$(btn).css({
  backgroundColor: "#333",
  color: "#FFF",
  borderRadius: "6px",
  display: "block",
  margin: "10px auto",
  padding: "10px 20px",
});

$(div).css({
  backgroundColor: "#CCC",
  borderRadius: "6px",
  display: "block",
  margin: "10px auto",
  padding: "10px 20px",
  width: 500,
});

$(() => {
  $(btn).on("click", () => {
    $(div).fadeOut(1000);
  });

  $(btn).on("mouseenter mouseleave", () => {
    $(div).toggleClass("Active"); // In Inspect
  });

  $(div).on("changeHeight", (Event, myHeight) => {
    $(div).height(myHeight); // In Inspect
  });

  $(btn).on("click", () => {
    $(div).trigger("changeHeight", ["200px"]); // In Inspect
  });

  $(btn).on({
    click: () => {
      $(div).text("You Are Click Me");
    },
    dblclick: () => {
      $(div).text("You Are Double Click Me");
    },
    mouseenter: () => {
      $(div).text("You Are Focus Me");
    },
    mouseleave: () => {
      $(div).text("You Are Blur Me");
    },
  });
});
