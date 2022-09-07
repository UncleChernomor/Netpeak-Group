'use strict';

let typeToggle = 0;
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const tarrif = {
    0: {
        'starter': 19,
        'professional': 54,
        'company': 89,
    },
    1: {
        'starter': 12,
        'professional': 36,
        'company': 56,
    },
}

const changeViewToggle = (onElement, offElement) => {
    onElement.classList.remove('promo__switch--off');
    onElement.classList.add('promo__switch--on');
    offElement.classList.remove('promo__switch--on');
    offElement.classList.add('promo__switch--off');
}

const setPrice = () => {
    const current = tarrif[typeToggle];

    for (let key in current) {
        document.getElementById(key).innerText = current[key];
    }
};

monthElement.addEventListener('click', (e) => {
    if (typeToggle === 0) return;

    changeViewToggle(e.currentTarget, yearElement);
    typeToggle = 0;
    setPrice();
});

yearElement.addEventListener('click', (e) => {
    if (typeToggle === 1) return;

    changeViewToggle(e.currentTarget, monthElement);
    typeToggle = 1;
    setPrice();
});
