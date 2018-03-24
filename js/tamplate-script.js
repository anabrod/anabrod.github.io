
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
$(".header__menu.header__menu-mobile").toggle('slow')
});
});
