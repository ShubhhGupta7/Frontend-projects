console.log('JavaScript is Included!');


var scrolledBar = document.getElementById('scrolled');



// This Function will return the maximum of the following.
function getDocHeight() {

    var D = document;
    return Math.max(D.body.offsetHeight, D.body.clientHeight, D.body.scrollHeight);
}

var docHeight = getDocHeight();
var windowHeight = window.innerHeight;

window.onresize = function(event) {    
    
    docHeight = getDocHeight();
    windowHeight = window.innerHeight;
}



// Function to call on scroll
function setScrolled() {

    var scrolled = Math.floor((window.scrollY / (docHeight - windowHeight)) * 100);
    scrolledBar.innerText = scrolled;
}

window.addEventListener('scroll', setScrolled);



