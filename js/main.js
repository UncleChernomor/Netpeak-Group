'use strict';

let typeToggle = 0;
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const tarrif = {
    0: {

    },
}

const changeViewToggle = (onElement, offElement) => {
    onElement.classList.remove('promo__switch--off');
    onElement.classList.add('promo__switch--on');
    offElement.classList.remove('promo__switch--on');
    offElement.classList.add('promo__switch--off');
}

const setPrice = () => {

}

monthElement.addEventListener('click', (e) => {
    if (typeToggle === 0) return;

    changeViewToggle(e.currentTarget, yearElement);
    typeToggle = 0;
});

yearElement.addEventListener('click', (e) => {
    if (typeToggle === 1) return;

    changeViewToggle(e.currentTarget, monthElement);
    typeToggle = 1;
});
