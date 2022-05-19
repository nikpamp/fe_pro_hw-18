let plus = document.querySelector('.button-plus');
let minus = document.querySelector('.button-minus');
let reset = document.querySelector('.button-reset')
let counter = document.querySelector('.counter')

plus.addEventListener('click', function() {
    counter.value++;
});

minus.addEventListener('click', function() {
    counter.value--;
});

reset.addEventListener('click', function() {
    counter.value = 0;
});