/*
[1] Remove => Remove Element And Child Completely From Document
-- Not Equal Hide Effect
-- Hide Add display: none

[2] Empty => Remove Child Element From Parent
*/

//* Before Remove
/*
* -- Code Html

<div>This Is Div</div>
<span>I Love jQuery</span>
<p>This Is Paragraph</p>
*/

$(() => {
  $("div").remove();
});

//* After Remove
/*
<span>I Love jQuery</span>
<p>This Is Paragraph</p>
*/

//* Before Empty

/*
* -- Code Html

<div>
This Is Div
<p>Paragraph</p>
<span>This Is Span</span>
</div>

<span>I Love jQuery</span>
<p>This Is Paragraph</p>
*/

$(() => {
  $("div").empty();
});

//* After Empty
/*
<div></div>

<span>I Love jQuery</span>
<p>This Is Paragraph</p>
*/
