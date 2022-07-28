mybutton = document.getElementById("header-web");
window.onscroll = function () {
    scrollFunction();
}
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "flex";
    }
    else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


