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
//for viewing case studies
function onGardopia() {
    document.getElementById("overlayGardopia").style.display = "block";
}
function offGardopia() {
    document.getElementById("overlayGardopia").style.display = "none";
}
function onNVOP() {
    document.getElementById("overlayNVOP").style.display = "block";
}
function offNVOP() {
    document.getElementById("overlayNVOP").style.display = "none";
}
function onDHS() {
    document.getElementById("overlayDHS").style.display = "block";
}
function offDHS() {
    document.getElementById("overlayDHS").style.display = "none";
}
function onBrainspace() {
    document.getElementById("overlayBrainspace").style.display = "block";
}
function offBrainspace() {
    document.getElementById("overlayBrainspace").style.display = "none";
}
function onOutThere() {
    document.getElementById("overlayOutThere").style.display = "block";
}
function offOutThere() {
    document.getElementById("overlayOutThere").style.display = "none";
}

//for viewing attributions
function onAttributions() {
    document.getElementById("overlayAttributions").style.display = "block";
}
function offAttributions() {
    document.getElementById("overlayAttributions").style.display = "none";
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

//for copying text to clipboard
function copyEmailText() {
    //var copyText = document.getElementById("emailCopy");
    navigator.clipboard.writeText("nathan.friedman.designs@gmail.com");
    alert("Copied the text: nathan.friedman.designs@gmail.com");
    }
function copyLinkedInText() {
        //var copyText = document.getElementById("linkedinCopy");
        navigator.clipboard.writeText("http://www.linkedin.com/in/nathanfriedmandesigns");
        alert("Copied the text: http://www.linkedin.com/in/nathanfriedmandesigns");
        }
function copyPortfolioText() {
            //var copyText = document.getElementById("portfolioCopy");
            navigator.clipboard.writeText("http://www.nathanfriedman.designs");
            alert("Copied the text: https://bit.ly/3CxlWw5");
            }