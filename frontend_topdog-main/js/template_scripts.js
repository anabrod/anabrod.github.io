

window.addEventListener('load', (event) => {

  let menu_hamburger = document.querySelector('.header_menu-hamburger');
  let menu_mobile_close = document.querySelector('.header_menu_mobile-close');


  let menu_mobile = document.querySelector('.header_menu-mobile');

    menu_hamburger.addEventListener('click', (event) => {
      menu_mobile.classList.toggle('header_menu-mobile-hidden');
    });

    menu_mobile_close.addEventListener('click', (event) => {
      menu_mobile.classList.toggle('header_menu-mobile-hidden');
    });

});
