console.log('Java Script included!!!');

var counterInterval; 

function startCounter() {

    var targetNumber = parseInt(document.getElementById('counter-input').value);
    console.log(`Target Number : ${targetNumber}`);

    if(isNaN(targetNumber)) {
        alert('Please Enter a Number');
        clearInterval(counterInterval);
        //This is important for the condition when a counter is running and you entered a wrong Input for a new counter 
        return;
    }

    if(targetNumber < 1 || targetNumber > 9) {
        alert('Out of Range Bounds');
        clearInterval(counterInterval);
        return;
    }

    var currentNo = document.querySelector('.current');
    var nextNo = document.querySelector('.next');
    var count = 0;

    // If user clicks on 'Start Counter' button again - remove this function.
    resetNumbers(currentNo, nextNo);

    // Clear the previous interval which was running.
    clearInterval(counterInterval);

    counterInterval = setInterval(function() {

        if(count === targetNumber) {
            clearInterval(counterInterval);
            alert('Counter has stopped');
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    }, 1000);
}

function resetNumbers(currentNo, nextNo, end) {
    
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}

function increaseCount(currentNo, nextNo) {

    nextNo.classList.add('animate');
    setTimeout(function() {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove('animate');
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 500);
}