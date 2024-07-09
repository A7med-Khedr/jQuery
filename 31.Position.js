// Position => Axis By Parent

const div = document.createElement("div");
const p = document.createElement("p");
const pText = document.createTextNode("This is Paragraph");

$("*").css({
  margin: 0,
  padding: 0,
});

Object.assign(div.style, {
  backgroundColor: "#d4d4d4",
  position: "relative",
  width: "300px",
  height: "300px",
  top: "400px",
  left: "50px",
  borderRadius: "6px",
});

Object.assign(p.style, {
  position: "absolute",
  backgroundColor: "#333",
  height: "50px",
  top: "150px",
  width: "fit-content",
  padding: "10px",
  borderRadius: "6px",
  left: "20px",
  color: "#FFF",
});

p.appendChild(pText);
div.appendChild(p);
document.body.appendChild(div);

$("body").height(4000);

console.log($(div).position()); // { left: 0, top: 400 }
console.log($(div).position().top); // top: 400
console.log($(div).position().left); //left: 0

console.log($(p).position()); // { left: 20, top: 150 }
console.log($(p).position().top); // top: 150
console.log($(p).position().left); //left: 20
