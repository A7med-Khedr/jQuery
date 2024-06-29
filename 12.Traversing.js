/*
[1] Child => All direct Child From Parent
[2] Parent => All direct parent From child
[3] Parents => All Parent From Selector
[4] ParentsUntil => Stop In Specific Parent As you Wish
[5] Children => All Children From Selector
[6] Find => Find Any Thing IN Page And Possible Use Filter
[7] 
*/

const section = document.createElement("section"); // Child Of Body
const div = document.createElement("div"); // Child Of Section
const p = document.createElement("p"); // Child Of Div
const span = document.createElement("span"); // Child Of p
const spanText = document.createTextNode("This Is Child");

span.appendChild(spanText);
p.appendChild(span);
div.appendChild(p);
section.appendChild(div);
document.body.appendChild(section);

$(section).css({
  border: "2px solid #333",
  borderRadius: "6px",
  width: "600px",
  padding: "10px",
});
$(div).css({
  border: "2px solid #F00",
  borderRadius: "6px",
  padding: "10px",
});
$(p).css({
  border: "2px solid #F00",
  borderRadius: "6px",
  padding: "10px",
  margin: 0,
});
$(span).css({
  border: "2px solid #00F",
  borderRadius: "6px",
  display: "block",
  padding: "10px",
});

const spanParent = $(span).parent();
console.log(spanParent); // p

const pParent = $(p).parent();
console.log(pParent); // div

const divParent = $(div).parent();
console.log(divParent); // section

const sectionParent = $(section).parent();
console.log(sectionParent); // body

const bodyParent = $(document.body).parent(); // html
console.log(bodyParent);

console.log($(p).parents()); // div & section & body & html
// parents => All Parent In Page

console.log($(span).parentsUntil(section)); // p & div

console.log($(section).children()); // div

console.log(
  $(section).find(p).css({
    borderColor: "#333",
  }) // Find P And Change Border Color To #333
);
