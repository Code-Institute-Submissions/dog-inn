// Hide menu on scrolling
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// Open and close sidebar for mobile devices
function openNav() {
    document.getElementById("mySidebar").style.width = "95%";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}