


function changeBgColor(id, color){
  id.style.backgroundColor = color;
}


box=document.getElementsByClassName("box")[0];
boxbtn=document.getElementsByClassName("button")[0];
body=document.body;
bodybtn=document.getElementsByClassName("button")[1];


boxbtn.addEventListener('click',function (event) {
    changeBgColor(box, "yellow");
});

bodybtn.addEventListener('click',function (event) {
    changeBgColor(body, "blue");
});
