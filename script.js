document.writeln("Script Works!");
document.addEventListener("click", buttonclicked);

function buttonclicked() {
    document.getElementById('firstPara').style.backgroundColor="red";
    document.getElementById('backgroundcolor').style.backgroundColor="lightblue";
}
