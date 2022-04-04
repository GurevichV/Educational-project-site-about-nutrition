require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimeId = setTimeout(() => openModal('.modal', modalTimeId), 30000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('button[data-modal]', '.modal', modalTimeId);
    timer('.timer', '2022-04-15');
    cards();
    calc();
    forms('form', modalTimeId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});

