function clicked(element){
    // console.log(element)
    element.innerText = 'CLICKED';
    element.style.backgroundColor = 'hotpink'
}

function increment(element) {
    element.innerText++;
}

function picked(element){
    alert('You Picked ' + element.value)
}
function hide(element){
    element.remove()
}

function switchPic(element) {
    element.src = './images/deku2.jpeg'
}