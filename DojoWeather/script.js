function cityB(element) {
    alert('Burbank was Selected')
}

function cityC(element) {
    alert('Chicago was Selected')
}

function cityD(element) {
    alert('Dallas was Selected')
}

function hide(element) {
    element.remove()
}

function picked(element) {
    alert('Loading Weather report in  ' + element.value)
    // IF THE TEMP IS SET TO FAHRENHEIT
    if (element.value == 'F') {
        var degrees = document.getElementsByClassName('degree')

        for (var i = 0; i < degrees.length; i++) {
            console.log(degrees[i].innerText);
            degrees[i].innerText = Math.floor(degrees[i].innerText * 1.8 + 32);
        }
    }
    else {
        var degrees = document.getElementsByClassName('degree')
        for(var i = 0;  i < degrees.length; i++){
            console.log(degrees[i].innerText);
            degrees[i].innerText = Math.floor((degrees[i].innerText - 32) * .5556);
        }
    }
}
