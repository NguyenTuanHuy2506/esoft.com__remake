var prevScrollpos = window.pageYOffset;
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
            break;
        }
    }
}

function ani(){
    _recallSlider = setInterval(function(){recallSlider();}, 4000);
}
//ani();
