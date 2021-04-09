let box =  document.querySelector('.box');
let button = document.querySelector('.boxButton')

button.addEventListener('click',function(){
    if(box.classList.contains('box')){
        box.classList.remove('box')
        box.classList.add('boxYellow')
    }
   else if(box.classList.contains('boxGreen')){
        box.classList.remove('boxGreen');
        box.classList.add('boxYellow');}

    else if(box.classList.contains('boxYellow')) {
        box.classList.remove('boxYellow');
        box.classList.add('boxGreen');
    }
});