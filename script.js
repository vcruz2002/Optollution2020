function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myLine(){
    setInterval();
    clearInterval();
    setInterval();
}
var startX = 0;
var startY = 400;
var endX = 800; //1000
var endY = 0;
var amount = 0;

var c = document.getElementById("myGraph");
var ctx = c.getContext("2d")
setInterval (function(){
      amount += 0.003;
    ctx.clearRect(startX,startY,endX,endY);
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + (endX -startY) * amount, startY + (endY - startY) * amount);
    ctx.stroke();
    }, 30);

var startA = 801;
var startB = 1;
var endA = 901;
var endB = 401;
var c = document.getElementById("myGraph");
var ctx = c.getContext("2d")
setInterval (function(){
        amount += 0.003;
    ctx.clearRect(startA,startB,endA,endB);
    ctx.moveTo(startA, startB);
    ctx.lineTo(startA + (endA -startB) * amount, startB + (endB - startB) * amount);
    ctx.stroke();
    }, 30);


function myFunction() {
  document.getElementById("jumana").innerHTML ="jumana.abdelgader@scholar.smashprogram.lpfi.org";
}
function mYfunction() {
  document.getElementById("Cannek").innerHTML ="cannek.herredia@scholar.smashprogram.lpfi.org";
}
function myfUnction() {
  document.getElementById("victor").innerHTML ="victor.cruz@scholar.smashprogram.lpfi.org";
}
function myfuNction() {
  document.getElementById("Dora").innerHTML ="dora.granera@scholar.smashprogram.lpfi.org";
}
function myfunCtion() {
  document.getElementById("valencia").innerHTML ="valencia.white@scholar.smashprogram.lpfi.org";
}
// 
var data = [100, 100, 100, 100, 100];
  

