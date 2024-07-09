// each => Loop For All Element
const ul = document.createElement("ul");

const li01 = document.createElement("li");
const li02 = document.createElement("li");
const li03 = document.createElement("li");
const li04 = document.createElement("li");

li01.innerHTML = "Ahmed";
li02.innerHTML = "Mohamed";
li02.className = "test"; // Add Class

li03.innerHTML = "Ibrahim";
li04.innerHTML = "sayed";
li04.className = "test"; // Add Class

ul.append(li01, li02, li03, li04);

document.body.append(ul);

$(() => {
  $("li").each(function () {
    if ($(this).hasClass("test")) {
      $(this).css("color", "#0F0");
    }
  });
});
