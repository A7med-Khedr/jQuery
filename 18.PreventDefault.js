/*
-- PreventDefault => Prevent Default Work
*/

// And Create A Link Visit Google
const link = document.createElement("a");
link.href = "https://www.google.com";
const linkText = document.createTextNode("Google");

link.appendChild(linkText);
link.target = "_blank"; // Open Link In New Tab
document.body.appendChild(link);
// ___________________________________________

// Add Button To Text Function
const div = document.createElement("div");
const divText = document.createTextNode("This Is Div");

div.appendChild(divText);
document.body.appendChild(div);

// Style For Button
$(div).css({
  backgroundColor: "#d4d4d4",
  color: "#black",
  padding: "10px 20px",
  display: "block",
  width: "fit-content",
  borderRadius: "6px",
});

// Style For Link
$(link).css({
  textDecoration: "none",
  backgroundColor: "#333",
  color: "#FFF",
  display: "block",
  width: "fit-content",
  margin: "10px 0",
  padding: "10px 20px",
  borderRadius: "6px",
});

$(() => {
  $(link).on("click", (event) => {
    event.preventDefault(); // Link Donot work As Default ( Visit Google )

    if (event.isDefaultPrevented()) {
      $(div).text("Link Donot Work As Default");
    } else {
      $(div).text("Link Visited Google");
    }
  });
});
