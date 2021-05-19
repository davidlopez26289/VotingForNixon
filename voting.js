function rickroll() {
    document.getElementById("body").style.backgroundImage= "url('rickrollgif.gif')";
    document.getElementById("html").style.backgroundImage= "url('rickrollgif.gif')";
    var el_up = document.getElementById("GFG_UP");
    var str = "Thanks For Not Voting For Your Canidate!!";
    el_up.innerHTML = str;

}
function confetti() {
    document.getElementById("body").style.backgroundImage= "url('confetti.gif')";
    document.getElementById("html").style.backgroundImage= "url('confetti.gif')";
    var el_up = document.getElementById("GFG_UP2");
    var str = "Thanks For Voting For Your Canidate!!";
    el_up.innerHTML = str;
} 
let btn1 = document.getElementById("btn1");

btn1.addEventListener("mouseover", function(){
    this.style.backgroundColor = "red"
})
btn1.addEventListener("mouseout", function(){
    this.style.backgroundColor = "black"
})
function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
  }
  
  function clearCoor() {
    document.getElementById("demo").innerHTML = "";
  }