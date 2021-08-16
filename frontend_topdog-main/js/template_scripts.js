

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

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.81992996805593, 37.61796793282799],
            zoom: 15,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Top Dog Club',
            balloonContent: 'Top Dog Club'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map_pin.svg',
            iconImageSize: [70, 70]
        });

    
        myMap.geoObjects
        .add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');
}
