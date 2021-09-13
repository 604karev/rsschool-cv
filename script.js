const sideBar = document.querySelector('.sidebar');
const burger = document.querySelector('.burger');
const sideBarWrapper = document.querySelector('.sidebar-wrapper');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');


const toggleSidebar = (e) => {
    e.stopPropagation();
    console.log(e);
    sideBar.classList.toggle('active');
    body.classList.toggle('active');
    sideBarWrapper.classList.remove('visible');
    if(document.body.clientWidth >= window.innerWidth){
        console.log('asdfsad')
    }

};

const toggleInformation = (e) => {
    e.stopPropagation();
    if (window.innerWidth > 1140 || sideBar.classList.contains('active')) {
        sideBarWrapper.classList.add('visible');
    } else {
        sideBarWrapper.classList.remove('visible')
    }
};


const removeVisible = () => {
    if (window.innerWidth < 1140 && !sideBar.classList.contains('active')) {
        sideBarWrapper.classList.remove('visible');
    }
};

const checkVisible = () => {
    if (window.innerWidth > 1140) {
        sideBarWrapper.classList.add('visible')
    }
};

overlay.addEventListener('click', toggleSidebar);
burger.addEventListener('click', toggleSidebar);
sideBar.addEventListener('transitionend', toggleInformation);
window.addEventListener('resize', removeVisible);
window.addEventListener('load', checkVisible);

