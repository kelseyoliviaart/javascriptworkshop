
// var link= $("#color");
// var changecolor= function(){
//     link.css('color', '#F862DE');
//     
//       
 function timeThing() {
     var now = new Date();
     x = document.getElementById('time')
     h = now.getHours();
    m = now.getMinutes();
     s = now.getSeconds();
     ms = now.getMilliseconds();
     var clockContent = h + ':' + ":" + m + ":" + s + ":" + ms;
     // x.innerHTML = 
    $("#time").html(clockContent);
    time()
 }
setInterval(timeThing, 3000);
// alert(DateFormatter.format(now, "Y/m/d h:i:s"));

function time() {
    // var m = even
    // var m = odd
    var now = new Date();
    if (now.getSeconds() % 2 === 0) {
      $("#time").addClass("odd").removeClass("even");
     // x = document.getElementById('time');
      //x.innerHTML = "bye";
   } else {
      $("#time").addClass("even").removeClass("odd");
   } 
// function validate()  {
//    var attempt = 3; //variable to count number of attempts
//    var username =
//    var password =
 $("#login").submit(function( event ) {
    alert( "Handler for .submit() called.");
    event.preventDefault();
 });

 $("#other").click(function()) {
    $("#target").submit();
 }

$("span").text("Not valid!").show().fadeOut


// var time =$("clock");
// var expand= function(){
//     if (time.even())
}

// timeThing();

// var now = new Date();
// x = document.getElementById('#time')
// h = now.getHours();
// m = now.getMinutes();
// s = now.getSeconds();
// ms = now.getMilliseconds();
// x.innerHTML = h + ':' + ":" + m + ":" + s + ":" ms;


// alert(DateFormatter.format(now, "Y/m/d h:i:s"));

// clock.click(changecolor)