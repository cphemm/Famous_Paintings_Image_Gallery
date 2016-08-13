
var $largeImage = $('<div id="largeImage"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$largeImage.append($image);

//A caption to overlay
$largeImage.append($caption);

//Add overlay
$("body").append($largeImage);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $largeImage.show();
  
  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$largeImage.click(function(){
  //Hide the overlay
  $largeImage.hide();
});










