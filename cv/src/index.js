import image from './assets/img/kirill-hrudzinski.png';
import hljs from './js/highlight.min';
import 'highlight.js/styles/github-dark-dimmed.css';
import './style.css';

import {
    toggleSidebar,
    removeActive,
    removeVisible,
    checkVisible,
    createImage
} from "./js/script";

const pictureWrapper = document.querySelector('.picture-wrapper');
const sideBar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const nav = document.querySelector('.s-nav');


async function render() {
    const myImage = await createImage(image);
    myImage.classList.add('cv-picture');
    myImage.alt = 'kirill-hrudzinski';
    pictureWrapper.appendChild(myImage);
}

render();
nav.addEventListener('click', removeActive);
body.addEventListener('click', removeActive);
burger.addEventListener('click', toggleSidebar);
sideBar.addEventListener('transitionend', checkVisible);
window.addEventListener('resize', removeVisible);
window.addEventListener('load', checkVisible);
hljs.highlightAll();
