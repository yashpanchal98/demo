console.log("JS file")
console.log("hellooooooooooooo")
let count = 0;
let btn = document.getElementsByClassName("btn-count")[0];
const countDisplay = document.getElementById("count");

btn.addEventListener("click", function(){
    count++;
    countDisplay.textContent = "Count: " + count;
    alert("Button clicked")
})
