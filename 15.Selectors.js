/*
$("*") => //* All Element
_________________________________________________________________
$(".Test") => //* All Element With class ( Test )
_________________________________________________________________
$("div") => //* All Div
_________________________________________________________________
$("#Test") => //* All Element With Id ( Test )
_________________________________________________________________
$("div, p") => //* All p And Div In Page
_________________________________________________________________
$("div:first") => //* First Div In Page
_________________________________________________________________
$("div:even") => //* Start With First Element
_________________________________________________________________
$("div:odd") => //* Start With Second Element
_________________________________________________________________
$("p:first-child") => //* All p First Child In Page
_________________________________________________________________
$("p:last-child") => //* All p Last Child In Page
_________________________________________________________________
$("p:first-of-type") => //* First Child Of P Element 
_________________________________________________________________
$("p:last-of-type") => //* Last Child Of P Element 
_________________________________________________________________
$("p:nth-child(2)") => //* All second Child Of P Element
_________________________________________________________________
$("p:nth-last-child(2)") => //* All The Second Last Child Of P Element
_________________________________________________________________
$("p:nth-of-type(2)") => //* All Second Child With Kind P
_________________________________________________________________
$("p:nth-last-of-type(2)") //* All Second Last Child With Kind P
_________________________________________________________________
$("p:only-child") //* Only Child Of P Element If There Any Child Cannot Use It
_________________________________________________________________
$("p:only-of-type") //* Only Child Of Type P
_________________________________________________________________
$("div > p") //* Direct Child Of P In Div
_________________________________________________________________
$("div + p") //* p After Div Not Child
_________________________________________________________________
$("div ~ p") //* p The Sibling For Div
_________________________________________________________________
$("ul li:gt(1)") => //* All Element ( gt => Greater Than ) Index 1
_________________________________________________________________
$("ul li:lt(5)") => //* All Element ( lt => Less Than ) Index 5
_________________________________________________________________
$("ul li:not(  )") => //* Specific Element In Not Parameter Don't Do Task
_________________________________________________________________
$(":header") => //* Select All Heading In HTMl From H1 to H6
_________________________________________________________________
$(":animated") => //* All Element With Any Animate
_________________________________________________________________
$("input[type='text']").focus() => //* When Reload Focus To Selector Element
_________________________________________________________________
$(":contain") => //* Use It When We Search A Word
_________________________________________________________________
$("div:has("span")") => //* Div Include Span
_________________________________________________________________
$(":empty") => //* Select Empty Elements
_________________________________________________________________
$(":parent") => //* Not Empty
_________________________________________________________________
$("hidden") => //* Select Hidden Element ( display:none | width: 0; height: 0 )
_________________________________________________________________
$(":visible") => //* Element You Show It
_________________________________________________________________
$(":root") => Select First Element ( HTML )
_________________________________________________________________
<p lang="ar"></p>
<p lang="en"></p>
$("p:lang("en")") => //* Select All Paragraph With En As Lang
_________________________________________________________________
$("[Any Attribute]") => //*  Select Element With Specific Attribute
$("[src]") => //*  Select Element With src Attribute
$("[title]") => //*  Select Element With title Attribute
$("p[lang="ar"]") => //*  Select p With lang = ar
$("img[alt*="bla"]") => //* ( * ) Select img With alt Attribute Include ( Bla ) As A Word ( Bla | Bla | Bla )
$("img[alt~="bla"]") => //* ( ~ ) Select img With alt Attribute Include ( Bla ) In Words ( TheBla | The_Bla | Bla )
$("img[alt^="bla"]") => //* ( ^ ) Select img With alt Attribute Include ( Bla ) In First
_________________________________________________________________
//* Method To Write Attribute
[attribute] => [title]
element[attribute] => p[lang]
element[attribute="value"] => a[href="Test"]
element[attribute!="value"] => a[href!="Test"]
element[attribute*="value"] => a[href*="Link"]
element[attribute~="value"] => a[href~="Contain"]
element[attribute^="value"] => a[href^="Start"]
_________________________________________________________________
$(":input") => //* Select All Inputs
$(":password") => //* Select Password Input
$(":radio") => //* Select Password Input
$(":checkbox") => //* Select Any Input
$(":file") => //* Select Any Input
$(":checked") => //* Select Any Input
$(":disabled") => //* Select Any Input
_________________________________________________________________
*/
