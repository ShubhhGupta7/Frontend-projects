console.log('JavaScript is Included, is It?');
console.log('CONTROLLERS: W | D | S | A');
console.log("Let's see the Magic!!!");

var ball = document.querySelector('.the-ball');
var gameContain = document.querySelector('.moveable-area-container');

ball.style.top = ball.offsetTop + 'px';
ball.style.left = ball.offsetLeft + 'px';

var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;
console.log(ballHeight, ballWidth);

function setValue(value) {
    return value + "px";
}

var gameContainerCoor = gameContain.getBoundingClientRect();
var containerHeigth = gameContainerCoor.height;
var containerWidth = gameContainerCoor.width;
console.log('Box Height:', containerHeigth);
console.log('Box Width:', containerWidth);
function key(keyPress) {
    console.log(keyPress);


    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);

     // W is pressed
     if (keyPress === "w" || keyPress === "W") {
        if (top > 5) {
            ball.style.top = setValue(top - 5);
        }
    }

    // A is pressed
    else if (keyPress === "a" || keyPress === "A") {
        if (left > 5) {
            ball.style.left = setValue(left - 5);
        }
    }

    // S is pressed
    else if (keyPress === "s" || keyPress === "S") {
        if (top < (containerHeigth - ballHeight - 32) - 5) {
            ball.style.top = setValue(top + 5);
        }
    }

    // D is pressed
    else if (keyPress === "d" || keyPress === "D") {
        if (left < (containerWidth - ballWidth - 32) - 5) {
            ball.style.left = setValue(left + 5);
        }
    }
};


window.addEventListener('keypress', function(event) {
    key(event.key);
});