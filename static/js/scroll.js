$(function(){

    var scroll = $(document).scrollTop();
    var navHeight = $('.nav-container').outerHeight();
    $(window).scroll(function(){

        if (!$('.nav-active')[0]){
        

        var distance = $('.nav-container').offset().top;
        if(distance>30)
        $('.nav-container').addClass('bs');
        else
        $('.nav-container').removeClass('bs');

        var scrolled = $(document).scrollTop();

        if(scrolled>navHeight ){
            $('.nav-container').addClass('animateScroll');
        }
        else{
            $('.nav-container').removeClass('animateScroll');
        }

        if(scrolled>scroll){
            $('.nav-container').removeClass('sticky');
        }
        else{
            $('.nav-container').addClass('sticky');
        }
        scroll = $(document).scrollTop();
    }
    });
});


