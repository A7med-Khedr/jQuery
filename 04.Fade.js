/*
[1] fadeIn With Two Optional Parameter ( Speed, Call Back Function )
-- Use ( Opacity Property ) In CSS 
-- The jQuery fadeIn() method is used to fade in a hidden element.
-- When Finish jQuery Add Display: none As Inline Style

[2] fadeOut With Two Optional Parameter ( Speed, Call Back Function )
-- -- Use ( Opacity Property ) In CSS 
-- The jQuery fadeOut() method is used to fade out a visible element.
-- When Finish jQuery Add Display: block As Inline Style

[3] fadeToggle With Two Optional Parameter ( Speed, Call Back Function )
-- Use ( Opacity Property ) In CSS 
-- Switch Between fadeIn And fadeOut
-- Switch Between display: ( none | block )

[4] fadeTo With Three Optional Parameter ( Speed, Opacity, Call Back Function )
-- Use ( Opacity Property ) In CSS 
-- The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).
*/

// Create Button Tag To Test Events
const btn = document.createElement("button");
// Create Text Node For Button
const btnText = document.createTextNode("click");
// Append Text To Button
btn.appendChild(btnText);
// Finally, Append Button To Page
document.body.appendChild(btn);

// Create P Tag To Test Click And Other Events
const p = document.createElement("p");
// Create Text Node For P
const pText = document.createTextNode("Test Fade");
// Append Text To P
p.appendChild(pText);
// Append P To The PAge
document.body.appendChild(p);

// Start Fade

$(() => {
  // fadeIn
  $(btn).click(() => {
    // Before Test fadeIn Make A Hidden Element To Show It
    $(p).fadeIn("slow", () => {
      $(btn).css("color", "#0F0");
    }); // Show Hidden Element
  });

  // fadeOut
  $(btn).click(() => {
    $(p).fadeOut("fast", () => {
      $(btn).css("color", "#00F");
    }); // Show Hidden Element
  });

  // fadeToggle
  $(btn).click(() => {
    $(p).fadeToggle(2000, () => {
      $(btn).css("color", "#F00");
    }); // Show Hidden Element
  });

  // fadeTo
  $(btn).click(() => {
    $(p).fadeTo(2000, 0.3); // Show Hidden Element
  });
});
