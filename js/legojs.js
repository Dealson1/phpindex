function legs(){

    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="3";
    p.strokeStyle="white";
    p.fillStyle="#c19881";
    p.fillRect(152,355,84,145);
    p.fillRect(245,355,84,145);
    p.moveTo(152,463);
    p.lineTo(236,463);
    p.moveTo(245,463);
    p.lineTo(329,463);
    p.fillStyle="#ffffff";

    p.stroke();
}

function pants(){
    var p=document.getElementById("plate").getContext("2d");
    p.fillStyle="#ffffff";
    p.fillRect(152,355,84,140);
    p.fillRect(245,355,84,140);
}
function bodddy(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="0";
    p.strokeStyle="lightgrey";
    p.fillStyle="#c19881";
    p.moveTo(152,356);
    p.lineTo(329,356);
    p.lineTo(309,202);
    p.lineTo(172,202);
    p.lineTo(152,356);

    p.fill();
}

function s1(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="4";
    p.strokeStyle="#9c7762";
    p.arc(203 , 260 , 2 , 0 , 2*Math.PI);
    p.stroke();
}

function s2(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="4";
    p.strokeStyle="#9c7762";
    p.arc(283 , 260 , 2 , 0 , 2*Math.PI);
    p.stroke();
}

function ps1(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="4";
    p.strokeStyle="#c9a997";
    p.arc(223 , 259 , 10 , 0 , 0.5*Math.PI);
    p.stroke();
}

function ps2(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="4";
    p.strokeStyle="#c9a997";
    p.arc(261 , 259 , 10 , 1*Math.PI , 0.5*Math.PI, true);
    p.stroke();
}

function hands(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.strokeStyle="#c19881";
    p.fillStyle="#c19881";
    p.moveTo(174,202);
    p.lineTo(122,268);
    p.lineTo(106,329);
    p.lineTo(143,327);
    p.lineTo(149,288);
    p.lineTo(165,273);
    p.lineTo(174,202);
    p.moveTo(307,202);
    p.lineTo(359,268);
    p.lineTo(377,329);
    p.lineTo(336,327);
    p.lineTo(332,288);
    p.lineTo(318,273);
    p.lineTo(305,202);

    p.fill();
}

function clothes(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="0";
    p.strokeStyle="lightgrey";
    p.fillStyle="red";
    p.moveTo(152,356);
    p.lineTo(329,356);
    p.lineTo(309,202);
    p.lineTo(172,202);
    p.lineTo(152,356);

    p.fill();

    p.beginPath();
    p.strokeStyle="red";
    p.fillStyle="red";
    p.moveTo(174,202);
    p.lineTo(122,268);
    p.lineTo(106,329);
    p.lineTo(143,327);
    p.lineTo(149,288);
    p.lineTo(165,273);
    p.lineTo(174,202);
    p.moveTo(307,202);
    p.lineTo(359,268);
    p.lineTo(377,329);
    p.lineTo(336,327);
    p.lineTo(332,288);
    p.lineTo(318,273);
    p.lineTo(305,202);

    p.fill();
}
function face(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="1";
    p.strokeStyle="#000000";
    p.moveTo(210, 197);
    p.lineTo(279,197);
    p.fill();
    p.stroke();
    m();

}

function m(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="2";
    p.strokeStyle="#000000";
    p.moveTo(217, 174);
    p.lineTo(225,177);
    p.lineTo(262,177);
    p.lineTo(272,174);
    p.stroke();
    eye();
    eyes();
}

function eye(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="3";
    p.strokeStyle="#000000";
    p.fillStyle="#000000";
    p.arc(225 , 145 , 3 , 0 , 2*Math.PI);
    p.stroke();
    p.fill();
}

function eyes(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="3";
    p.strokeStyle="#000000";
    p.fillStyle="#000000";
    p.arc(260 , 145 , 3 , 0 , 2*Math.PI);
    p.stroke();
    p.fill();
}

function headdd(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="5";
    p.fillStyle="#c19881";
    p.moveTo(190,107);
    p.lineTo(170,140);
    p.lineTo(170,140);
    p.lineTo(170,178);
    p.lineTo(193,196);
    p.lineTo(210,196);
    p.lineTo(210,210);
    p.lineTo(279,210);
    p.lineTo(279,196);
    p.lineTo(296,196);
    p.lineTo(319,178);
    p.lineTo(319,140);
    p.lineTo(319,140);
    p.lineTo(300,107);
    p.lineTo(179,107);
    p.fill();
}

function wrists(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.strokeStyle="#c19881";
    p.lineWidth="5";
    p.arc(124 , 350 ,22 ,0.2 ,0.9*Math.PI,true);
    p.stroke();
    wrists2();
}

function wrists2(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.strokeStyle="#c19881";
    p.lineWidth="5";
    p.arc(356 , 350 ,22 ,0.3 ,0.9*Math.PI,true);
    p.stroke();
}

function kustuta(){
    var p=document.getElementById("plate").getContext("2d");
    p.beginPath();
    p.lineWidth="5";
    p.clearRect(0,0,500,500);
}

function drawAll(){
    legs();
    pants();
    bodddy();
    hands();
    clothes();
    headdd();
    face();
    wrists();
}