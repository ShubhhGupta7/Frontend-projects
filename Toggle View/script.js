console.log("Script Class is Included!");

const page = $("#container");

const toggle = $("#switcher");
const movingBall = $("#moving-ball");
var clicked = false;
toggle.click(function () {
  console.log("Toggled");
  clicked = !clicked;
  page.styles = "none";
  if (clicked) {
    page.addClass("dark-mode");
    movingBall.addClass("moving-ball-dark-mode");
  } else {
    page.removeClass("dark-mode");
    movingBall.removeClass("moving-ball-dark-mode");
  }
});
