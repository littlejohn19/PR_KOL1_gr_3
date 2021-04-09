let button1 = document.querySelector('.backgroundButtonRed')
let button2 = document.querySelector('.backgroundButtonBlue')


button1.addEventListener('click',function() {
    document.body.style.backgroundColor = "red"
});


button2.addEventListener('click',function() {
    document.body.style.backgroundColor = "blue"
});