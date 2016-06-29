/**
 * Created by paul.rangel on 9/3/15.
 */

document.addEventListener("DOMContentLoaded", function(event) {

    document.body.addEventListener("click", function(clickEvent) {
        var raygun = document.querySelector(".raygun");
        var cover = document.querySelector(".cover");
        var plasma = document.querySelector(".plasma");
        var shoot = document.querySelector(".bfg");
        var stars = document.querySelectorAll(".stars");


        function setClass(ary, classStr) {
            for (var i = ary.length - 1; i >= 0; i--) {
                var elem = ary[i];
                elem.setAttribute('class', classStr);
            };
        }

        if(clickEvent.target === document.body || clickEvent.target === raygun) {
            var audio = new Audio('sound/Laser_Cannon.mp3');
            audio.play();

            shoot.className = "bfg bfg-animate";
            //stars.setAttribute("class", "stars stars-animate");
            setClass(stars, "stars stars-animate");
            cover.className = "cover cover-animate";
            plasma.className = "plasma plasma-animate";
            cover.addEventListener("animationend", function(e) {
                cover.className = "cover";
                setClass(stars, "stars");
                plasma.className = "plasma";
                shoot.className = "bfg";
            }, false);


        }
    });

    // added jquery;
    var earth = $('.e-arth');
    var docHeight = $(document).height();
    var BOTTOM_DELTA = 1060;

    $(window).scroll(function() {
        var position  = $(window).scrollTop() + $(window).height();
        var distanceFromBottom = docHeight - position;
        var translateStr = "translate3d(0,"+(-distanceFromBottom)+"px, 0)";
        if(distanceFromBottom <= BOTTOM_DELTA ) {
            earth.css('-webkit-transform', translateStr);
            earth.css('transform', translateStr);
        }

    });

    var getHandler = function(btn) {
        return function() {
            btn.className = "capabilities green";
        }
    };

    (function() {
        var capabilities = document.getElementsByClassName("capabilities");
        console.log(capabilities);
        for (var i = 0; i < capabilities.length; i++) {
            // bad
            var capability = capabilities[i];

            //capabilities[i].onclick = getHandler(capabilities[i]);

            //capabilities[i].onclick = (function(btn) {
            //    return function() {
            //        btn.className = "capabilities green";
            //    }
            //})(capability);
        }
    })();




});



/*--------------------Sticky Pulgin--------------------------*/
//
//$('a.logo').sticky();

//$('.button').on('sticky-start', function() {
//    $('.button').html('<p class="openCom">email us</p>');
//});
//$('.button').on('sticky-end', function() {
//    $('.button').html('');
//});

//$('a.logo').sticky();
//
//
//
//$("a.logo").on('sticky-start', function() {
//    $(this).append('<a href="mailto:ondinerangel@gmail.com" class="email-text">Email&nbsp;us</a>');
//});
//
//$('a.logo').on('sticky-end', function() {
//    $(this).unstick();
//});
