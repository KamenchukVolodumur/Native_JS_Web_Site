"use strict";
import modal from './modules/modal';
import tabs from './modules/tabs';
import cards from './modules/cards';
import deadline from './modules/deadline';
import slider from './modules/slider';
import form from './modules/forms';
import calc from './modules/calc';
import {openModal} from './modules/modal';
window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(()=>openModal('.modal', modalTimerId), 30000);
    console.log(modalTimerId);
    modal('[data-modal]','.modal', modalTimerId);
    tabs(".tabheader__item", ".tabcontent", '.tabheader__items', 'tabheader__item_active');
    cards();
    deadline('.timer', '2023-08-08"');
    slider({
        container:'.offer__slider',
        nextArrow:'.offer__slider-next',
        prevArrow:'.offer__slider-prev',
        slide:'.offer__slide',
        totalCounter:'#total',
        currentCounter:'#current',
        wrapper:'.offer__slider-wrapper',
        field:'.offer__slider_inner'
    });
    form(modalTimerId, 'form');
    calc();
});
