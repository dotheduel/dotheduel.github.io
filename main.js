function setup() {
        window.location = 'index.html';
}
var mainClock = setInterval(main, 30)
function main() {
        console.log(page)
}
function newGame() {
        window.location = 'new.html';
}
function joinGame() {
        window.location = 'join.html';
}
function masterActive() {
        window.location = 'master.html';
}
function playerActive() {
        window.location = 'player.html';
}
function hide() {
        window.location = 'code.html';
}
function showCode() {
        document.getElementById("code").innerHTML = ("A Code");
        document.getElementById("begin").scrollIntoView();
}
function begin() {
        window.location = 'play.html';

}