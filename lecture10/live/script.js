let counter = 0

function count(){
    // increment counter
    counter++;
    // update the value of h1
    document.querySelector("h1").innerHTML = counter;

    // if counter is divisble by 10
    if(counter % 10 === 0){
        alert(`Counter is ${counter}`)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("button").onclick = count;
})