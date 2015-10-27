var color = " "

$(".Card1").on("click", function(evt){
  // color = $("div.square1").val();
  $(this).css("background", color)
  $( ".Card1" ).toggleClass( ".Card1", addOrRemove );
}
