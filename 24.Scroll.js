// Scroll

// Make Height For Body To Look Scroll
$("body").height(5000);

const div = document.createElement("div");
const divText = document.createTextNode("Up");
div.appendChild(divText);
document.body.appendChild(div);

Object.assign(div.style, {
  backgroundColor: "#333",
  color: "#FFF",
  padding: "10px",
  position: "fixed",
  bottom: "20px",
  right: "20px",
  borderRadius: "6px",
  fontFamily: "Arial",
  cursor: "pointer",
  display: "none",
});

$(() => {
  $(window).on("scroll", () => {
    $(window).scrollTop() > 800 ? $(div).fadeIn(500) : $(div).fadeOut(500);
  });

  $(div).on("click", () => {
    // Js Not jQuery
    document.documentElement.scrollIntoView({
      // Scroll to the top of the page
      behavior: "smooth",
    });
  });
});
