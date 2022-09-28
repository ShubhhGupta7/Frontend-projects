console.log('Java Script included!!!');

var counterInterval;

function startCounter() {

    var targetNumber = parseInt(document.getElementById('counter-input').value);
    console.log(`Target Number : ${targetNumber}`);

    if(isNaN(targetNumber)) {
        alert('Please enter a number');
        clearInterval(counterInterval);
        // This is important for the condition when a counter is running and you entered a wrong input for a new counter.
        return;
    }

    if(targetNumber < 1 || targetNumber > 99999) {
        alert('Range out of bounds');
        clearInterval(counterInterval);
        return;
    }

    var currentNos = document.querySelectorAll('.current');
    var nextNos = document.querySelectorAll('.next');
    var count = 0;

    //If user clicks on 'starat Counter' button again - removes this function
    resetNumbers(currentNos, nextNos, 5);

    // Clear the previous interval that was running 
    clearInterval(counterInterval);

    counterInterval = setInterval(function() {

        if(count === targetNumber) {
            clearInterval(counterInterval);
            alert('Counter has stopped');
            return;
        }

        increaseCounter(currentNos, nextNos, 4);
        count++;
    }, 1000);
}

function resetNumbers(currentNos, nextNos, end) {
    
    for(let i = 0; i < end; i++) {
        currentNos[i].innerText = 0;
        nextNos[i].innerText = 1;
    }
}

function increaseCounter(currentNos, nextNos, index) {

    let current = currentNos[index];
    let next = nextNos[index];

    if(current.innerText == 9) {
        increaseCounter(currentNos, nextNos, index - 1);
    }
    next.classList.add('animate');
    setTimeout(function() {
        
        current.innerText = next.innerText;
        next.classList.remove('animate');
        next.innerText = parseInt(next.innerText) + 1;

        if(next.innerText > 9) {
            next.innerText = 0;
        }
    }, 500);
}