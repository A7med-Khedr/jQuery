// Has

const div = document.createElement("div");
div.className = "active";
document.body.appendChild(div);

$(".active").css({
  backgroundColor: "#333",
  borderRadius: "10px",
  width: "300px",
  height: "50px",
});

$(() => {
  // $(div).removeClass("active");

  if ($(div).hasClass("active")) {
    console.log(`Element Has active Class`);
  } else {
    console.log(`Element don not Has active Class`); // First, Remove Class
  }
});
