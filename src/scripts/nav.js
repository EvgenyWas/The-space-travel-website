// Toggle for mobile navigation from primary navigation
const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

nav.dataset.visible = 'false';

navToggle.addEventListener('click', changeVisiblity);

function changeVisiblity() {
    const visiblity = nav.getAttribute('data-visible');

    if (visiblity === 'false') {
        nav.dataset.visible = 'true';
        navToggle.setAttribute('aria-expanded', true);
    } else {
        nav.dataset.visible = 'false';
        navToggle.setAttribute('aria-expanded', false)
    };
};