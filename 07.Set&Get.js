/*

Html Element //? <div><span style="width: 20px; color: red"> bla bla</span></div>

html => Get  Html Tags And Style
$("div").html(); => //! <span style="width: 20px; color: red"> bla bla</span>

text => Get Just Text
$("div").text(); //! bla bla

val => Use With Input Get Value In Input

<input type="text" name="" id="" />

$("input").val()

In Page When Write It Is A Value

-- attr()
$("button").click(() => {
  alert($("a").attr("href")); //* Get Href In a Tag
});

*/
