// Vars

// main var of input field
const textArea = document.getElementById('number');

// vars of buttons
const divide = document.querySelector('.divide');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const calc7 = document.querySelector('.calc7');
const calc8 = document.querySelector('.calc8');
const calc9 = document.querySelector('.calc9');
const C = document.querySelector('.C');
const calc4 = document.querySelector('.calc4');
const calc5 = document.querySelector('.calc5');
const calc6 = document.querySelector('.calc6');
const calc1 = document.querySelector('.calc1');
const calc2 = document.querySelector('.calc2');
const calc3 = document.querySelector('.calc3');
const euqal = document.querySelector('.equal');
const calc0 = document.querySelector('.calc0');



divide.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})
plus.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

minus.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

multiply.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

calc7.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

calc8.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

calc9.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

C.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML = '0'

    console.log(e);
})

calc4.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

calc5.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

calc6.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

calc1.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

calc2.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

calc3.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})

euqal.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML = eval(textArea.innerHTML);

    console.log(e);
})
calc0.addEventListener("click", function(){
    var e = event.target.innerHTML;

    textArea.innerHTML +=e;

    console.log(e);
})
