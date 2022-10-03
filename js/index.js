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
//for viewing dropdown menu
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropdown2").classList.toggle("show");
}
//for closing dropdown menu
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropContent = document.getElementByClassName("dropdownContent");
        var n;
        for (n = 0; n < dropContent.length; n++) {
            var openDropContent = dropContent[n];
            if (openDropContent.classList.contains('show')) {
                openDropContent.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.dropbtn')) {
        var dropContent = document.getElementByClassName("dropdownContent2");
        var n;
        for (n = 0; n < dropContent.length; n++) {
            var openDropContent = dropContent[n];
            if (openDropContent.classList.contains('show')) {
                openDropContent.classList.remove('show');
            }
        }
    }
}