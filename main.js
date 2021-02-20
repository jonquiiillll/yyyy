
    $(document).ready(function(){
        $(".circle_border").click(function(){
            $(".text_center").addClass("hidden");
        });
        $(".circle_border").click(function(){
            $(".text, .container_for_stopwatch_static").addClass("hide");
        });
        $(".circle_border").click(function(){
            $(".container_for_stopwatch").css('display', 'flex');
        });
        $(".circle_border").click(function(){
            $(".time_animation_2").css('display', 'none');
        });
        $(".circle_border").click(function(){
            $(".text_record").css('display', 'flex');
        });
        $(".circle_border").click(function(){
            $(".red_circle").css('display', 'flex');
        });
        $(".circle_border").click(function(){
            $(".button_of_progress").css('display', 'inline-table');
        });
        $(".circle_border").click(function(){
            $("body").css('overflow-y', 'auto');
        });
        $(".circle_border").click(function(){
            $("body").css('position', 'relative');
        });
    });

    var scrollProgress = document.querySelector('.scroll_progress__text');
window.onscroll = function() {
var offset = window.pageYOffset || document.documentElement.scrollTop,
    windowHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight,
    progress = Math.floor(offset/windowHeight * 100);
scrollProgress.innerHTML = progress + '%'
}

function myFunc ()
{
    setTimeout(function() {
        var t = Math.round(Math.random() * (24 - 10) + 10);
        document.getElementById("random_number").innerHTML = t;
        myFunc();
    }, 500);
}
function myFunction ()
{
    setTimeout(function() {
        var c = Math.round(Math.random() * (60 - 10) + 10);
        console.info(c);
        document.getElementById("random_number2").innerHTML = c;
        myFunction();
    }, 300);
}
function myFunctions ()
{
    setTimeout(function() {
        var e = Math.round(Math.random() * (60 - 10) + 10);
        console.info(e);
        document.getElementById("random_number3").innerHTML = e;
        myFunctions();
    }, 100);
}
function myFunctionsS ()
{
    setTimeout(function() {
        var m = Math.round(Math.random() * (60 - 10) + 10);
        console.info(m);
        document.getElementById("random_number4").innerHTML = m;
        myFunctionsS();
    }, 100);
}
myFunc();
myFunction();
myFunctions();
myFunctionsS();
function Show_img ()
{
    setTimeout(function() {
        var e = Math.round(Math.random() * (60 - 10) + 10);
        console.info(e);
        document.getElementById("random_number3").innerHTML = e;
        myFunctions();
    }, 100);
}
var $win = $(window),
$fixed = $(".fixed"),
limit = 3000;
function tgl (state) {
$fixed.toggleClass("hidden", state);
}
$win.on("scroll", function () {
var top = $win.scrollTop();
if (top < limit) {
    $(".fixed").css('display', 'fixed');
}
 else {
    tgl(false);
}
});
