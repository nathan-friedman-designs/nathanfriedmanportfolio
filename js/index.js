console.log("Your index.js file is loaded correctly!"); 
//for Loading Screen
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3500);
//for viewing resume
function on() {
    document.getElementById("overlayResume").style.display = "block";
}
function off() {
    document.getElementById("overlayResume").style.display = "none";
}