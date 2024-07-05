/*
[1] change Event
*/

// Add Container To Contain Select Box
const container = document.createElement("div");
document.body.appendChild(container);

// Add Create Select Box
const select = document.createElement("select");
container.appendChild(select);

// Options For Select Box
let options = [
  { value: "1", text: "BMW" },
  { value: "2", text: "Mercedes" },
  { value: "3", text: "Toyota" },
  { value: "4", text: "Hyundai" },
];

// And Add This OPtions In Select Box
for (let i = 0; i < options.length; i++) {
  const option = document.createElement("option");
  option.value = options[i].value;
  option.text = options[i].text;
  select.appendChild(option);
}

// Create Div To Look Change In Page
const div = document.createElement("div");
$(div).css({
  backgroundColor: "#d4d4d4",
  padding: "20px",
  marginTop: "10px",
  width: "300px",
  height: "100px",
  borderRadius: "6px",
});
document.body.appendChild(div);

// Start Change Event
$(() => {
  $(select).on("change", () => {
    const selectValue = $(select).val(); // Return 1 | 2 | 3 | 4 From Value In Options
    // According To Chose Change Background
    // Change Word When End To Write Or Change Chose
    if (selectValue == "1") {
      $(div).css({
        backgroundColor: "#00F",
      });
    } else if (selectValue == "2") {
      $(div).css({
        backgroundColor: "#F00",
      });
    } else if (selectValue == "3") {
      $(div).css({
        backgroundColor: "#0F0",
      });
    } else {
      $(div).css({
        backgroundColor: "#333",
      });
    }
  });
});
