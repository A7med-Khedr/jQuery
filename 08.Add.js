/*
[1] Append
[2] Prepend
[3] After
[4] Before
[5] appendTo
[6] prependTo

-- Parent => Append => Child
-- Child => AppendTo => Parent
*/

const div = document.createElement("div");
const divText = document.createTextNode("This Is Div");
div.appendChild(divText);

$(() => {
  // Append
  $(div).append("<p>Append Paragraph</p>");
  /*
  <div>
  This Is Div
  <p>Append Paragraph</p>
  </div>
  */

  // Perpend
  $(div).prepend("<p>Prepend Paragraph</p>");
  /*
  <div>
  <p>Prepend Paragraph</p>
  This Is Div
  </div>
 */

  // After
  $(div).after("<p>After Div</p>");
  /*
  <div>This Is Div</div>
  <p>After Div</p>
  */

  // Before
  $(div).before("<p>Before Div</p>");
  /*
  <p>Before Div</p>
  <div>This Is Div</div>
  */

  // AppendTo
  $("Append To Div").appendTo(div);
  /*
  <div>This Is Div</div>
  <p>Append To Div</p>
 */

  // PrependTo
  $("Perpend To Div").prependTo(div);
  /*
  <p>Prepend To Div</p>
  <div>This Is Div</div>
 */
});
