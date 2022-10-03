console.log("Your index.js file is loaded correctly!"); 
//for Work section
$(".navTab").on("click",function() {
    console.log("You clicked on .tab");
    if ($(this).hasClass(".home")) {
        $(".home").addClass("selected");
        $(".works").removeClass("selected");
        $(".skills").removeClass("selected");
        $(".history").removeClass("selected");
    }
    else if ($(this).hasClass(".works")) {
        $(".home").removeClass("selected");
        $(".works").addClass("selected");
        $(".skills").removeClass("selected");
        $(".history").removeClass("selected");
    }
    else if ($(this).hasClass(".skills")) {
        $(".home").removeClass("selected");
        $(".works").removeClass("selected");
        $(".skills").addClass("selected");
        $(".history").removeClass("selected");
    }
    else if($(this).hasClass(".history")) {
        $(".home").removeClass("selected");
        $(".works").removeClass("selected");
        $(".skills").removeClass("selected");
        $(".history").addClass("selected");
        $(".tab5").removeClass("selected");
    }
});
//for Loading Screen
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3500);