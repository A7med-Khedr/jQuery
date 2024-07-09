// Offset => Axis By Document

const div = document.createElement("div");

Object.assign(div.style, {
  backgroundColor: "#333",
  position: "absolute",
  width: "300px",
  height: "50px",
  top: "400px",
  left: "0",
  borderRadius: "6px",
});

document.body.appendChild(div);

$("body").height(4000);

console.log($(div).offset()); // Object { left: 0, top: 400 }
console.log($(div).offset().top); // top: 400
console.log($(div).offset().left); //left: 0

$(() => {
  $(window).on("scroll", () => {
    if ($(window).scrollTop() >= $(div).offset().top) {
      $(div).css({
        backgroundColor: "#00F",
      });
    }
  });
});
