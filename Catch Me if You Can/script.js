console.log('JavaScript, Fell the Interacvtivity!');

var box = document.getElementById('catching-container');

var viewHeight = window.innerHeight;
var viewWidth = window.innerWidth;


// Update the viewport height and width dynamically.
window.addEventListener('resize', function(event) {
    viewHeight = window.innerHeight;
    viewWidth = window.innerWidth;
});

box.addEventListener('mouseover', function(event) {

    var boxAttr = box.getBoundingClientRect();
    var boxHeight = boxAttr.height;
    var boxWidth = boxAttr.width;

    var newPos = getNewPos(boxHeight, boxWidth);
    box.style.top = newPos.y + 'px';
    box.style.left = newPos.x + 'px';
});

function getNewPos(boxHeight, boxWidth) {

     // If box got out of view from right or bottom
    var newX = Math.floor((Math.random() * viewWidth) + 1 - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight) + 1 - boxHeight);

    // If box got out of view from left or top
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }

    return {x: newX, y : newY};
}
