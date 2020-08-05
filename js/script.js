'use strict';

document.addEventListener('DOMContentLoaded', loaded);

function loaded() {

    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    VARIABLES    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    var downButton = document.querySelector('#down');
    var upButton = document.querySelector('#up');
    var body = document.querySelector('body');
    var nav = document.querySelector('header nav');
    var footerLinks = document.querySelectorAll('footer nav a');
    var footerLogo = document.querySelector('footer svg');

    var logo = document.querySelector('#logo');
    var red = getRandomNumber (0, 255);
    var blue = getRandomNumber (0, 255);
    var green = getRandomNumber (0, 255);

    var projectsTitle = document.querySelectorAll('#projects article h3');
    var projectsButtons = document.querySelectorAll('#projects article a');
    var colors = ['rgba(108, 86, 123, .7)', 'rgba(192, 108, 132, .7)', 'rgba(246, 114, 128, .7)', 'rgba(248, 177, 149, .7)', 'rgba(151, 189, 185, .7)', 'rgba(186, 215, 227, .7)'];
    var previousNumber = colors.length + 1;

    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX    FUNCTIONS    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    function onClickDisplayNav() {

        upButton.classList.toggle('hidden');
        downButton.classList.toggle('hidden');

        body.classList.toggle('dark');
        footerLogo.classList.toggle('logo-light');
        for (let i = 0; i < footerLinks.length; i++) {

            footerLinks[i].classList.toggle('light');
        }
    }

    function getRandomNumber (min, max) {
        return Math.floor(Math.random() * (max - min))
    }    
    
    function randomColor () {
    
        red = getRandomNumber (0, 255);
        blue = getRandomNumber (0, 255);
        green = getRandomNumber (0, 255);

        return `rgb(${red}, ${blue}, ${green})`;
    }

    function changeColor () {

        let color = randomColor();

        logo.style.fill = color;
    }

    function stopColorChange() {

        clearInterval(interval);
    }

    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX      GLOBAL     XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

    downButton.addEventListener('click', onClickDisplayNav);
    upButton.addEventListener('click', onClickDisplayNav);

    var interval = setInterval(changeColor, 1000);

    logo.addEventListener('click', stopColorChange);

    for (let i = 0; i < projectsTitle.length; i++) {

        let number;

        do {
            
            number = getRandomNumber(0, colors.length);
        } while (number == previousNumber);

        projectsTitle[i].style.backgroundColor = colors[number];
        projectsButtons[i].style.backgroundColor = colors[number];

        previousNumber = number;
    }
}