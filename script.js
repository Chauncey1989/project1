$(document).ready(function() {
var oldanswer;
var counter = 2;
$(".Cards p").fadeOut(2000);
  $(".Cards").on("click", function() {
    counter = counter + 1;
    if(counter == 2){
      counter = 0
      $(".Cards p").hide();
    }

    $(this).find("p").show();
    var answer = $(this).find("p").text();
    if(answer == oldanswer){
      $(".Cards").show().data(".Cards p", undefined);
      console.log("you got it right");
    }else{
      $(".Cards p").hide();
      console.log("you got it wrong")

      Array.prototype.shuffle = function() {
          var input = this;

          for (var i = input.length-1; i >=0; i--) {

              var randomIndex = Math.floor(Math.random()*(i+1));
              var itemAtIndex = input[randomIndex];

              input[randomIndex] = input[i];
              input[i] = itemAtIndex;
          }
          return input;
      }

      var testArray = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J"];
      console.log(testArray.shuffle());
    }
    oldanswer = answer

    $(".Reset").on("click", function(evt){
      location.reload();
      console.log("Reset")

})

var seconds = 0

var timerId;

var startButton = document.getElementById("ham")
function updateTime(){
seconds++
document.getElementById("ham").innerHTML=seconds;
}
startButton.addEventListener("click", function(){
  updateTime()
  timerId = setInterval(updateTime,1000)
})

//
// Array.prototype.shuffle = function() {
//     var input = this;
//
//     for (var i = input.length-1; i >=0; i--) {
//
//         var randomIndex = Math.floor(Math.random()*(i+1));
//         var itemAtIndex = input[randomIndex];
//
//         input[randomIndex] = input[i];
//         input[i] = itemAtIndex;
//     }
//     return input;
// }
//
// var testArray = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J"];
// console.log(testArray.shuffle());
















// $(".Cards p").hide();
//
// var counter = 0;
// $(".Cards").on("click", function() {
//   //var capturefirstclick = $(this)
//   counter = counter + 1;
//   var oldanswer = $(this).find("p");
//   (oldanswer).show();
//   var currentanswer = $(this).find("p");
//   if(counter == 2){
//     counter = 0
//     if(currentanswer == oldanswer){
//       $(".Cards").show();
//       console.log("you got it right");
//     }else{
//       $(".Cards").hide();
//   }
// }
//
// $(".Reset").on("click", function(evt){
//   location.reload();
// })























  // Show clicked element
  // Move on to next click
  // var currentanswer = $(this).find("p");
  // If counter is 2, store new click into another variable.
  // Compare oldanswer with new answer. If they match, only console log so nothing else happens. Else, if they don't match, hide them again.


    //var capturefirstclick = $(this)
  //if(counter == 2){
  //
    counter = 0
  //   $(".Cards p").hide();
  //   $(this).find("p").show();
  //   var answer = $(this).find("p").text();
  //   if(canswer == oldanswer){
  //     console.log("you got it right");
  //   }else{
  //     console.log("you got it wrong")
  //   }
})
// //   //I want the below line to find p and show it
//   $(this).find("p").show();
// //   // I want this line to find the text in the paragrpah and show it
//   var answer = $(this).find("p").text();
// //   //I the if statement below should compare the answer variable to the oldanswer variable and log out if they compare they its correct if its wrong the the answer is wrong
//   if(answer == oldanswer){
//     console.log("you got it right");
//   }else{
//     console.log("you got it wrong")
//   }
//   oldanswer = answer

//
// $(".Reset").on("click", function(evt){
//   location.reload();
// })
//

})
