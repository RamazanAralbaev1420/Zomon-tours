const linkYes = `https://amazon.pl/?vote=yes`; //здесь нужно водить линки
const linkNo = `https://amazon.pl/?vote=no`; //здесь нужно водить линки

new Splide('.slide1', {
  type: 'loop',
  autoplay: 'autoplay',
  breakpoints: {
    500: {
      perPage: 1,
      spaceBetween: 15,
    },
    1000: {
      perPage: 2,
      spaceBetween: 15,
    },
    1600: {
      perPage: 3,
      spaceBetween: 20,
    },
  },
  perMove: 1,
  pagination: false,
}).mount();

new Splide('.slide2', {
  type: 'loop',
  autoplay: 'autoplay',
  breakpoints: {
    500: {
      perPage: 1,
      spaceBetween: 15,
    },
    1000: {
      perPage: 2,
      spaceBetween: 15,
    },
    1600: {
      perPage: 3,
      spaceBetween: 20,
    },
  },
  perMove: 1,
  pagination: false,
}).mount();

const option = document.querySelectorAll('.option');

const reset = () => {
  option.forEach((item) => {
    item.classList.remove('active');
  });
};

option.forEach((item, index) => {
  item.addEventListener('click', () => {
    reset();
    item.classList.add('active');
  });
});

const open_menu = document.querySelector('.open-menu');
const close_menu = document.querySelector('.close-menu');
const mobile_menu = document.querySelector('.mobile_menu');
const desktop_menu = document.querySelector('.desktio-menu');
const mobile_menu_box = document.querySelector('.mobile_menu_box');

open_menu.addEventListener('click', () => {
  mobile_menu_box.classList.add('active_menu');
  close_menu.classList.add('open');
  open_menu.classList.add('close');
});

close_menu.addEventListener('click', () => {
  mobile_menu_box.classList.remove('active_menu');
  close_menu.classList.remove('open');
  open_menu.classList.remove('close');
});

// // only_mobile container
window.addEventListener('load', function () {
  const mobile_content_no = document.querySelector('#mobile_content_no');
  const mobile_content_yes = document.querySelector('#mobile_content_yes');
  const container = document.querySelector('#accept_mobile_container');

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const gclid = urlParams.get('gclid');

  mobile_content_no.href = linkNo + gclid;
  mobile_content_yes.href = linkYes + gclid;
});

// coockie

window.addEventListener('load', function () {
  const cookieBanner = document.getElementById('cookieBanner');

  if (!localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'block';
  }

  document
    .getElementById('acceptCookies')
    .addEventListener('click', function () {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
});
