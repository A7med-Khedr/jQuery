// Detach => Like Remove But Do ont Remove Element From Dom
// And Save Event On This Element

const div = document.createElement("div");
const remove = document.createElement("button");
const add = document.createElement("button");
const removeText = document.createTextNode("Remove");
const addText = document.createTextNode("Add");

remove.appendChild(removeText);
add.appendChild(addText);
document.body.appendChild(div);
document.body.appendChild(remove);
document.body.appendChild(add);

$(div).css({
  backgroundColor: "#333",
  borderRadius: "10px",
  width: "300px",
  height: "50px",
});

$("button").css({
  backgroundColor: "#333",
  color: "#FFF",
  padding: "10px 20px",
  display: "inline-block",
  borderRadius: "6px",
  margin: "10px",
  fontFamily: "Arial",
});

$(() => {
  $(remove).on("click", () => {
    $(div).remove(); // When Remove Element After This Add Element
    // ( backgroundColor: "#00F", ) do not Work
  });

  $(remove).on("click", () => {
    $(div).detach(); // When Remove Element After This Add Element
    // ( backgroundColor: "#00F", ) Will Work
  });

  $(add).on("click", () => {
    $(div).prependTo("body");
  });

  $(div).on("click", function () {
    $(this).css({
      backgroundColor: "#00F",
    });
  });
});
