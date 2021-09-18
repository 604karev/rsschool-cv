const sideBar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger');
const sideBarWrapper = document.querySelector('.sidebar-wrapper');
const html = document.querySelector('html');
const body = document.querySelector('body');
const nav = document.querySelector('.s-nav');

const toggleSidebar = (e) => {
    html.classList.toggle('active');
    sideBarWrapper.classList.remove('visible');
    /*console.log(document.body.clientWidth, window.innerWidth)*/
};

const toggleInformation = (e) => {
    e.stopPropagation();
    if (window.innerWidth > 1140 || html.classList.contains('active')) {
        sideBarWrapper.classList.add('visible');
    } else {
        sideBarWrapper.classList.remove('visible')
    }
};


const removeVisible = () => {
    if (window.innerWidth <= 1140 && !html.classList.contains('active')) {
        sideBarWrapper.classList.remove('visible');
    }
};

const checkVisible = () => {
    if (window.innerWidth > 1140) {
        sideBarWrapper.classList.add('visible')
    }
};
const removeActive = (e) => {
    if (e.target.classList.contains('aside-list__link') && window.innerWidth <= 1140 || e.target === body && window.innerWidth <= 1140) {
        sideBarWrapper.classList.remove('visible');
        html.classList.remove('active');
    }
};

nav.addEventListener('click', removeActive);
body.addEventListener('click', removeActive);
burger.addEventListener('click', toggleSidebar);
sideBar.addEventListener('transitionend', toggleInformation);
window.addEventListener('resize', removeVisible);
window.addEventListener('load', checkVisible);

