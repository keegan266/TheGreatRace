var randNum1 = Math.floor((Math.random() * 10) + 1);
var randNum2 = Math.floor((Math.random() * 10) + 1);

var token1Pos = 0;
var token2Pos = 0;

function race() {
    while (token1Pos < 950 && token2Pos < 950) {
        document.getElementById("token1").style.left = token1Pos + "px";
        token1Pos += randNum1;
        document.getElementById("token2").style.left = token2Pos + "px";
        token2Pos += randNum2;
        console.log(token1Pos);
        console.log(token2Pos);
    }
    if (token1Pos >= 950 && token2Pos < 950) {
        document.getElementById("winnerText").value = "Green Ghost Got Pacman!";
        document.getElementById("greenwin").style.opacity = "100";
    }
    else if (token2Pos >= 950 && token1Pos < 950) {
        document.getElementById("winnerText").value = "Orange Ghost Got Pacman!";
        document.getElementById("orangewin").style.opacity = "100";
    }
    else if (token1Pos == token2Pos) {
        document.getElementById("winnerText").value = "They Both Got Pacman!";
        document.getElementById("tie").style.opacity = "100";
    }    
}

function reset() {
    window.location.reload(true);
}

