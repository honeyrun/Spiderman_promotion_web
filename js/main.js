window.addEventListener('DOMContentLoaded', function () {


  $('.loading_spider').addClass('on');
  $('.loading_line').addClass('on');


  function open() {
    $('.fade_left').addClass('on');
    $('.fade_right').addClass('on');
    $('.loading_spider').addClass('off');
    $('.loading_line').addClass('off');
  }
  function dim() {
    $('.dim_logo').addClass('on');
  }
  function loading_off() {
    $('.loading').addClass('off');
  }
  
  setTimeout(open, 3000);
  setTimeout(dim, 4500);
  setTimeout(loading_off, 5000);


  /* scroll event section */
  container.addListener((e) => {
    
		let scrollTop = container.scrollTop;
		$('.posNum').html(scrollTop)


    // if (scrollTop < 4000) {
    //   $('.bg_spiderman').removeClass('on');
    // }
    // if (scrollTop >= 4000) {
    //   $('.bg_spiderman').addClass('on');
    // }

    
    if (scrollTop >= 150) {
      $('.scrollGuide_frame').addClass('on');
    }
 
    
    if (scrollTop < 4000) {
      $('.bg_city').removeClass('on');
    }
    if (scrollTop >= 4000) {
      $('.bg_city').addClass('on');
    }

    if (scrollTop >= 10000) {
      $('.toAbout_btn').addClass('on');
    }







  });



    /*  slide,click event section */
    gsap.to('.fix-this-1', {
        
			scrollTrigger: {
					trigger: ".trigger-this-1",
					start: "top top",
					// end: () => "+=" + 300,
					end: 'bottom bottom',
					pin: true,
					// horizontal: true,
					// pinSpace:false,
					pinSpacing: false,
					scrub: true,
			
			}
		});

    gsap.to('#section01 .bg_metalarm', {
        
      scale: 5,
      scrollTrigger: {
      trigger: "#section01",
      start: "top top",
      end: () => "+=" + 2000,
      // end: 'bottom bottom',
      // horizontal: true,
      scrub: true,
      }
    });

    gsap.to('#section01 .bg_spiderman', {
        
      scale: 3.5,
      y: 700,
      opacity: 0,
      scrollTrigger: {
      trigger: "#section01",
      start: "top top",
      end: () => "+=" + 4000,
      // end: 'bottom bottom',
      // horizontal: true,
      scrub: true,
      }
    });

    gsap.to('#section01 .bg_city', {
        
      scale: 1.7,
      scrollTrigger: {
      trigger: "#section01",
      start: "top top",
      end: () => "+=" + 6000,
      // end: 'bottom bottom',
      // horizontal: true,
      scrub: true,
      }
    });

    gsap.to('#section01 .trailer_mask', {
        
      scale: 8,
      opacity: 0,
      scrollTrigger: {
      trigger: "#section01",
      start: "4000 top",
      // end: () => "+=" + 6000,
      end: 'bottom bottom',
      // horizontal: true,
      scrub: true,
      }
    });

    gsap.to('#section01 .trailer_video', {
      
      scrollTrigger: {
      trigger: "#section01",
      start: "4000 top",
      // end: () => "+=" + 6000,
      end: 'bottom bottom',
      // horizontal: true,
      scrub: true,
      }
    });





});


