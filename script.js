
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === '#3498db') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === '#e74c3c') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === '#2ecc71') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === '#f1c40f') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'rgb(220, 20, 140)') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === '#181403f1') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'rgb(161, 161, 161)') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }

    });
});