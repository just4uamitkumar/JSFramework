(function(){
    var c1 = document.getElementById("myCanvas1");
    var ctx1 = c1.getContext("2d");
    ctx1.moveTo(0,0);
    ctx1.lineTo(200,100);
    ctx1.stroke();

    var c2 = document.getElementById("myCanvas2");
    var ctx2 = c2.getContext("2d");
    ctx2.beginPath();
    ctx2.arc(95,50,40,0,2*Math.PI);
    ctx2.stroke();

    var c3 = document.getElementById("myCanvas3");
    var ctx3 = c3.getContext("2d");
    ctx3.font = "30px Arial";
    ctx3.fillText("Hello World",20,50);

    var c4 = document.getElementById("myCanvas4");
    var ctx4 = c4.getContext("2d");
    ctx4.font = "30px Arial";
    ctx4.strokeText("Hello World",10,50);
}());

(function(){
    var c5 = document.getElementById("myCanvas5");
    var ctx5 = c5.getContext("2d");
    // Create gradient
    var grd5 = ctx5.createLinearGradient(0,0,200,0);
    grd5.addColorStop(0,"red");
    grd5.addColorStop(1,"yellow");
    // Fill with gradient
    ctx5.fillStyle = grd5;
    ctx5.fillRect(10,10,180,80);

    var c6 = document.getElementById("myCanvas6");
    var ctx6 = c6.getContext("2d");

    // Create gradient
    var grd6 = ctx6.createRadialGradient(75,50,5,90,60,100);
    grd6.addColorStop(0,"red");
    grd6.addColorStop(1,"yellow");

    // Fill with gradient
    ctx6.fillStyle = grd6;
    ctx6.fillRect(10,10,150,80);

    window.onload = function() {
        var c7 = document.getElementById("myCanvas7");
        var ctx7 = c7.getContext("2d");
        var img7 = document.getElementById("scream");
        ctx7.drawImage(img7, 10, 10, 500, 280);
    }
   
}());