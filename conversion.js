
    var i;

function convertFtoC(temp) {
    if (temp == "c") {
       var i = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(i);
    } else {
       var i = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value =Math.round(i);
    }
}

if (f <= 40){
document.getElementById("tempGauge").innerHTML="It's Cold";
} else if (f <= 70 && f>=41){
    document.getElementById("tempGauge").innerHTML="Its warm";
} else {
    document.getElementById("tempGauge").innerHTML="It's hot!"
}


