// Write your code here
const bulb1 = document.querySelector("#lightbulb1");
const bulb2 = document.querySelector("#lightbulb2");
const bulb3 = document.querySelector("#lightbulb3");
const countStr = document.querySelector(".subtitle");
let count = 0;

bulb1.addEventListener("click", function() {
    count++;
    countStr.innerHTML = "You've clicked the lights " + count + " times";
    bulb1.classList.toggle("active");
});
bulb2.addEventListener("click", function() {
    count++;
    countStr.innerHTML = "You've clicked the lights " + count + " times";
    bulb2.classList.toggle("active");
});
bulb3.addEventListener("click", function() {
    count++;
    countStr.innerHTML = "You've clicked the lights " + count + " times";
    bulb3.classList.toggle("active");
});