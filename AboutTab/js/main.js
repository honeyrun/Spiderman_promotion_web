/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
      _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */


 var maxRotationDegreesX = 12;
 var maxRotationDegreesY = 12;
 var perspectivePx = 1000;

$(document).ready(function() {


    var trackingAreaShiftX = $("#tracking-area").offset().left;
    // var trackingAreaShiftY = $("#tracking-area").offset().top;
    var trackingAreaShiftY = 100;

    var halfTrackingAreaWidth = $("#tracking-area").width() / 2.5;
    var halfTrackingAreaHeight = $("#tracking-area").height() / 2.5;

    var mouseCoordinateCorrectionX = trackingAreaShiftX + halfTrackingAreaWidth;
    var mouseCoordinateCorrectionY = trackingAreaShiftY + halfTrackingAreaHeight;

    $("#tracking-area").on("mousemove", function () {
        var x = event.clientX - mouseCoordinateCorrectionX;
        var y = event.clientY - mouseCoordinateCorrectionY;
        var rotationY = x * maxRotationDegreesX / halfTrackingAreaWidth;
        var rotationX = -y * maxRotationDegreesY / halfTrackingAreaHeight;
        var transformer = `perspective(${perspectivePx}px) rotate3d(1, 0, 0, ${rotationX}deg) rotate3d(0, 1, 0, ${rotationY}deg)`;
        $("#transformation-area").css("transform", transformer);
    });



    Logic();

    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        navigation: true,
        navigationTooltips: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        afterLoad: function(anchorLink, index){

            if (index == 1) {// 01 = true

                $('.progressbar .currentSlide .selectedSlide1').addClass('active');
                $('.txt01').children().addClass('on');
               

            } else { // 01 = false
                $('.progressbar .currentSlide .selectedSlide1').removeClass('active');
                $('.txt01').children().removeClass('on');
            }
            if(index ==2){// 02 = true

                $('.progressbar .currentSlide .selectedSlide2').addClass('active');
                $('.txt02').children().addClass('on');
                $('.spiderman_png1').addClass('on');
                $('.spiderman_shadow1').addClass('on');


            }else{//02 = false
                $('.progressbar .currentSlide .selectedSlide2').removeClass('active');
                $('.txt02').children().removeClass('on');
                $('.spiderman_png1').removeClass('on');
                $('.spiderman_shadow1').removeClass('on');
            }
            if(index ==3){// 03 = true

                $('.progressbar .currentSlide .selectedSlide3').addClass('active');
                $('.Gallery').addClass('on');
                $('.spiderman_png2').addClass('on');
                $('.spiderman_shadow2').addClass('on');

            }else{//03 = false
                $('.progressbar .currentSlide .selectedSlide3').removeClass('active');
                $('.Gallery').removeClass('on');
                $('.spiderman_png2').removeClass('on');
                $('.spiderman_shadow2').removeClass('on');
            }
            if(index ==4){// 04 = true

                $('.progressbar .currentSlide .selectedSlide4').addClass('active');
                $('.Videos').addClass('on');
                $('.spiderman_png3').addClass('on');
                $('.spiderman_shadow3').addClass('on');

            }else{//04 = false
                $('.progressbar .currentSlide .selectedSlide4').removeClass('active');
                $('.Videos').removeClass('on');
                $('.spiderman_png3').removeClass('on');
                $('.spiderman_shadow3').removeClass('on');
            }

        },

        onLeave: function(index, destination, direction){
            var leavingSection = this;

            if(index == 1 && direction =='down'){//01 - >02

                
            }

            if(index == 2 && direction == 'down'){//02 -> 03


            } else if(index == 2 && direction == 'up'){//02 -> 01


            }

            if(index == 3 && direction == 'down'){//03 -> 04


            } else if(index == 3 && direction == 'up'){//03 -> 02


            }
            if(index == 4 && direction == 'down'){//04 -> 05
                

            } else if(index == 4 && direction == 'up'){//04 -> 03

            }

        }
    });





    $('.toMain').click(function(){
        $('.popUp').removeClass('on');  
    });

    $('.imgSlide_container li').click(function(){
        let imgsrc = $(this).find('img').attr('src');
        $('.popUp_img').addClass('on');
        $('.popUp_img').find('img').attr('src',imgsrc);
    });

    $('.play_btn').click(function(){
        $('.popUp_vid').addClass('on');
    });

});