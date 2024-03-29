const burger = document.querySelector('.nav__burger-menu');
const lines = document.querySelectorAll('.nav__burger-line');
const center_lines = document.querySelectorAll('.nav__center-burger-line');
const burger_menu = document.querySelectorAll('.nav__burger-menu');
const navigation = document.querySelectorAll('.header__top-nav');
const contact_info = document.querySelectorAll('.nav__contact-info');
const nav_list = document.querySelectorAll('.header__top-nav-list');
const body_lock = document.querySelectorAll('body');


function toggleBurger() {
    lines.forEach((line) => line.classList.toggle('active'));
    center_lines.forEach((center_line) => center_line.classList.toggle('active'));
    burger_menu.forEach((bm_item) => bm_item.classList.toggle('active'));
    navigation.forEach((nav_item) => nav_item.classList.toggle('active'));
    contact_info.forEach((c_info) => c_info.classList.toggle('active'));
    nav_list.forEach((nav_elem) => nav_elem.classList.toggle('active'));
    body_lock.forEach((body_item) => body_item.classList.toggle('active'));
}

burger.addEventListener('click', toggleBurger);