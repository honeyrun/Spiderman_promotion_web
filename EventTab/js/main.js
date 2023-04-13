var maxRotationDegreesX = 20;
var maxRotationDegreesY = 20;
var perspectivePx = 1000;

$(document).ready(function () {   
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
});

window.addEventListener('DOMContentLoaded', function () {

  let cursor = $('#cursor');
  $(document).mousemove(function(e){
      let cursorWidth = cursor.width() / 2;
      gsap.to(cursor, {duration: 0.9, left: e.pageX - cursor.width() * 0.5, top: e.pageY - cursor.height() * 0.5, ease: "back.out"});
  });

  $('.event_title').addClass('on');

  $('.event_subtitle ul li:nth-child(1)').addClass('on');
  $('.event_subtitle ul li:nth-child(2)').addClass('on');

  /* scroll event section */
  container.addListener((e) => {
    
		let scrollTop = container.scrollTop;
		$('.posNum').html(scrollTop);


    if (scrollTop >= 1550) {
      $('.poster_title').addClass('on');
      $('.poster_content').addClass('on');
    }

    if (scrollTop >= 2800) {
      $('.event_info_title').addClass('on');
      $('.event_info_subtitle').addClass('on');
      $('.event_info').addClass('on');
    }

    if (scrollTop > 2000 && scrollTop < 3000) {
      $('#cursor').addClass('on')
    } else {
      $('#cursor').removeClass('on');
    }


        
        










  });



    /*  slide,click event section */

  $('.event_theater_btn .btn_st').click(function(){
    $('.event_theater_btn .btn_st .btn_after').css('opacity','1');
    $('.event_theater_btn .btn_im .btn_after').css('opacity','0');
    $('.event_theater_display').css('height','431px');
  });

  $('.event_theater_btn .btn_im').click(function(){
    $('.event_theater_btn .btn_im .btn_after').css('opacity','1');
    $('.event_theater_btn .btn_st .btn_after').css('opacity','0');
    $('.event_theater_display').css('height','542px');
  });

});


