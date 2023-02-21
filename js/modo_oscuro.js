const btnSwitch = document.querySelector('#Modo-oscuro');

btnSwitch.addEventListener('click',() => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

