const sideBar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger');
const sideBarWrapper = document.querySelector('.sidebar-wrapper');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.s-nav');

const toggleSidebar = (e) => {
    body.classList.toggle('active');
    sideBarWrapper.classList.remove('visible');
};

const toggleInformation = (e) => {
    e.stopPropagation();
    if (window.innerWidth > 1140 || body.classList.contains('active')) {
        sideBarWrapper.classList.add('visible');
    } else {
        sideBarWrapper.classList.remove('visible')
    }
};


const removeVisible = () => {
    if (window.innerWidth <= 1140 && !body.classList.contains('active')) {
        sideBarWrapper.classList.remove('visible');
    }
};

const checkVisible = () => {
    if (window.innerWidth > 1140) {
        sideBarWrapper.classList.add('visible')
    }
};
const removeActive = (e) => {
    if (e.target.classList.contains('aside-list__link') && window.innerWidth <= 1140) {
        sideBarWrapper.classList.remove('visible');
        body.classList.remove('active');
    }
};

nav.addEventListener('click', removeActive);
overlay.addEventListener('click', toggleSidebar);
burger.addEventListener('click', toggleSidebar);
sideBar.addEventListener('transitionend', toggleInformation);
window.addEventListener('resize', removeVisible);
window.addEventListener('load', checkVisible);

