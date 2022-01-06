let button = document.querySelector("#changeColorBtn")
let span = document.querySelector("span")
let main = document.querySelector("main")
let hex = document.querySelector("#hex")
let simple = document.querySelector("#simple")
let simpleIsOn = true;
let hexisOn = false;

let simpleColors = ["blue","orange","magenta","black","green","pink",]

//first we make it clickable
hex.addEventListener("click", function(){
    //we add new class with JS and make it blue
    hex.classList.add("active")
    simple.classList.remove("active")
    simpleIsOn = false;
    hexisOn = true;
})
simple.addEventListener("click", function(){
    simple.classList.add("active")
    hex.classList.remove("active")
    simpleIsOn = true;
    hexisOn = false;
})
button.addEventListener("click",function(){
    if (simpleIsOn){
        let randomIndex = Math.floor(Math.random() * simpleColors.length)
        let randomColor = simpleColors[randomIndex]
        console.log(randomColor)
        span.innerHTML = randomColor
        main.style.backgroundColor = randomColor
    } else {
        let randomHex = `#${Math.floor(Math.random()*16777215).toString(16)}`
        span.innerHTML = randomHex
        main.style.backgroundColor = randomHex
    }
})


