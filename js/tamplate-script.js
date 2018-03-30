
$(function(){
    var flag = true;
    $(window).scroll(function() {
        if($(this).scrollTop() >= 200 && flag) {
            $('header.header-main').addClass('header-main__scroll');
            flag = !flag;
        }
        else if($(this).scrollTop() < 200 && !flag){
            flag = !flag;
            $('header.header-main').removeClass('header-main__scroll');
        }
    }).trigger("scroll");
 });

 $(document).ready(function() {
$(".header__menu-triger").click(function () {
$(".header__menu-mobile").slideToggle('slow')
});
});


$(document).mouseup(function (e) {
    var container = $(".header__menu-wrapper");
    if (container.has(e.target).length === 0){
        $(".header__menu-mobile").hide();
    }
});


$(document).scroll(function(){
  $(".header__menu-mobile").hide();
});






$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});

$(function(){
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('.particles-js', 'js/conf.json', function() {
  console.log('callback - particles.js config loaded');
});
});

$(function(){
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('.particles-js2', 'js/conf.json', function() {
  console.log('callback - particles.js config loaded');
});
});





var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
});




