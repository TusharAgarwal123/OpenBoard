let redArea = document.querySelector(".red");
let greenArea = document.querySelector(".green");
let blueArea = document.querySelector(".blue");

redArea.addEventListener("click", function (e) {
    tool.strokeStyle = "lightpink";
})
greenArea.addEventListener("click", function (e) {
    tool.strokeStyle = "lightgreen";
})
blueArea.addEventListener("click", function (e) {
    tool.strokeStyle = "lightblue";
})


