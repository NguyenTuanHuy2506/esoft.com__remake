var prevScrollpos = window.pageYOffset;
var windowH = $(window).height()*.8;
var _btnCircle = $(".btn--circle");
var _contentList = $(".content__list");
var _contentItem = $(".content__item");
var _imgItem = $(".img__item");
var _body = $("body");
var _to = $("#btn--nav");

window.onscroll = function() {
    'use strict';
    var currentScrollPos = window.pageYOffset;
    var _topNav = $(".navbar-menu-top");
    if (prevScrollpos > currentScrollPos) {
        _topNav.css({transform:"translateY(0%)"});
    }
    else{
        _topNav.css({transform:"translateY(-100%)"});
    }
        prevScrollpos = currentScrollPos;
    if(currentScrollPos==0){
        $(".navbar-menu-top").css({"background-color":"transparent"});
  }
  var slideBottom = $(".anim");
    slideBottom.each(function() {
        var xpos = $(this).offset().top;
        var x22 = xpos - windowH;
        if(x22 <= currentScrollPos){
            if($(this).hasClass('animated')){}
            else{
                $(this).addClass('animated');
            }
        }
    });
    /*
    var slideBottom = $(".ani--slideTop");
    slideBottom.each(function() {
        var xpos = $(this).offset().top;
        var x22 = xpos - windowH;
        if(x22 <= currentScrollPos){
            if($(this).hasClass('animate--slideTop')){}
            else{
                $(this).addClass('animate--slideTop');
                $(this).css({
                    opacity: '1'
                });
            }
        }
    });
    var slideRight = $(".ani--slideLeft");
    slideRight.each(function() {
        var xpos = $(this).offset().top;
        var x22 = xpos - windowH;
        if(x22 <= currentScrollPos){
            if($(this).hasClass('animate--slideLeft')){}
            else{
                $(this).addClass('animate--slideLeft');
                $(this).css({
                    opacity: '1'
                });
            }
        }
    });
    var slideLeft = $(".ani--slideBottom");
    slideLeft.each(function() {
        var xpos = $(this).offset().top;
        var x22 = xpos - windowH;
        if(x22 <= currentScrollPos){
            if($(this).hasClass('animate--slideBottom')){}
            else{
                $(this).addClass('animate--slideBottom');
                $(this).css({
                    opacity: '1'
                });
            }
        }
    });
    */
};
var _index = 1;
var _btnCircleHover = 0;
var _recallSlider;
_btnCircle.hover(function() {
    /* Stuff to do when the mouse enters the element */
    'use strict';
    if($(this).hasClass('active'))
    {
        clearInterval(_recallSlider);
    }
}, function() {
    /* Stuff to do when the mouse leaves the element */
    'use strict';
    if($(this).hasClass('active'))
    {
        clearInterval(_recallSlider);
        _recallSlider = setInterval(function(){recallSlider();}, 4000);
    }
});
_btnCircle.click(function(event) {
    'use strict';
    _index = $(this).data('target');
    clearInterval(_recallSlider);
    _recallSlider = setInterval(function(){recallSlider();}, 4000);

    if($(this).hasClass('active'))
    {
        console.log("no class");
    }
    else
    {
        _btnCircle.removeClass('active');
        $(this).addClass('active');
        var _target = $(this).data('target');
        _contentItem.removeClass('active');
        _imgItem.removeClass('active');
        $('.content__list .content__item:nth-child('+_target+')').addClass('active');
        $('.hero__img .img__item:nth-child('+_target+')').addClass('active');
    }
});

function recallSlider() {
    'use strict';
    var _btnArray = $(".btn--circle");
    if (_index >= _btnArray.length) {_index = 0;}
    for (var i = 0; i < _btnArray.length; i++) {
        if(i == _index)
        {
            _btnArray[i].click();
            return false;
           
            break;
        }
    }
}

function ani(){
    _recallSlider = setInterval(function(){recallSlider();}, 4000);
}
ani();
var _navItem = $('.nav-item');
_navItem.click(function() {
    /* Act on the event */
    if($(window).width() > 992)
    {
        return false;
    }
})

$(document).click(function(event) {
    var _topMenu = $('#top-menu');
    var _mx = event.pageX;
    var _my = event.pageY;
    if($(window).width() < 992){
        if(_checkMouse(_mx, _my, _topMenu.offset().left, _topMenu.offset().top, _topMenu.width(), _topMenu.height()) != 1){
            if( _topMenu.hasClass('show')){
                   _topMenu.removeClass('show').addClass('collapsing');
                }
            }
        }
    });
function _checkMouse(_mx, _my, _x, _y, _w, _h){
    if(_mx < _x + _w && _mx > _x && _my > _y && _my < _y + _h )
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

