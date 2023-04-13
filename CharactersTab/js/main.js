$(function () {


    /* scroll event section*/
    myHorizontalScrollbar.addListener((status) => {

        let scrollLeft = myHorizontalScrollbar.scrollLeft;
        let v = status.offset.x
        $('.posNum').html(v);
        console.log();

        



    });


    const playerContainers = document.querySelectorAll(".frame");
    playerContainers.forEach(container => {
      container.addEventListener("mouseover", () => {
        const player = container.querySelector("lottie-player");
        player.setDirection(1);
        player.play();
      });
    
      container.addEventListener("mouseleave", () => {
        const player = container.querySelector("lottie-player");
        player.setDirection(-1);
        player.play();
      });
    });
    



    /* slide, click event section */


    $('.toMain').click(function(){
        $('.charactertab_popUp').removeClass('on');
        $('.character_menu ul').children().removeClass('active');
        $('.charactertab_popUp').children().removeClass('on');
        $('.charactertab_popUp').charactertab_popUp().find('.popUp_container').children().removeClass('on');
        
    });




    $('.toVillan').click(function(){
        $('.menu_greenGoblin').addClass('active');
        $('.menu_greenGoblin').siblings().removeClass('active');

        $('.greenGoblin_popUp').addClass('on');
        $('.greenGoblin_popUp').siblings().removeClass('on');
        $('.greenGoblin_popUp').find('.popUp_container').children().addClass('on');
        $('.greenGoblin_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });

    $('.toHero').click(function(){
        $('.menu_spiderman').addClass('active');
        $('.menu_spiderman').siblings().removeClass('active');

        $('.spiderman_popUp').addClass('on');
        $('.spiderman_popUp').siblings().removeClass('on');
        $('.spiderman_popUp').find('.popUp_container').children().addClass('on');
        $('.spiderman_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });




    $('.spiderman').click(function(){
        $('.charactertab_popUp').addClass('on');
        $('.menu_spiderman').addClass('active');

        $('.spiderman_popUp').addClass('on');
        $('.spiderman_popUp').siblings().removeClass('on');
        $('.spiderman_popUp').find('.popUp_container').children().addClass('on');
        $('.spiderman_popUp').siblings().find('.popUp_container').children().removeClass('on');

    });

    $('.drStrange').click(function(){
        $('.charactertab_popUp').addClass('on');
        $('.menu_drStrange').addClass('active');

        $('.drStrange_popUp').addClass('on');
        $('.drStrange_popUp').siblings().removeClass('on');
        $('.drStrange_popUp').find('.popUp_container').children().addClass('on');
        $('.drStrange_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });

    $('.greenGoblin').click(function(){
        $('.charactertab_popUp').addClass('on');
        $('.menu_greenGoblin').addClass('active');

        $('.greenGoblin_popUp').addClass('on');
        $('.greenGoblin_popUp').siblings().removeClass('on');
        $('.greenGoblin_popUp').find('.popUp_container').children().addClass('on');
        $('.greenGoblin_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });

    $('.drOctopus').click(function(){
        $('.charactertab_popUp').addClass('on');
        $('.menu_drOctopus').addClass('active');

        $('.drOctopus_popUp').addClass('on');
        $('.drOctopus_popUp').siblings().removeClass('on');
        $('.drOctopus_popUp').find('.popUp_container').children().addClass('on');
        $('.drOctopus_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });

    $('.electro').click(function(){
        $('.charactertab_popUp').addClass('on');
        $('.menu_electro').addClass('active');

        $('.electro_popUp').addClass('on');
        $('.electro_popUp').siblings().removeClass('on');
        $('.electro_popUp').find('.popUp_container').children().addClass('on');
        $('.electro_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });


  
    $('.character_menu li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    
    $('.menu_spiderman').click(function(){
        $('.spiderman_popUp').addClass('on');
        $('.spiderman_popUp').siblings().removeClass('on');
        $('.spiderman_popUp').find('.popUp_container').children().addClass('on');
        $('.spiderman_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });

    $('.menu_drStrange').click(function(){
        $('.drStrange_popUp').addClass('on');
        $('.drStrange_popUp').siblings().removeClass('on');
        $('.drStrange_popUp').find('.popUp_container').children().addClass('on');
        $('.drStrange_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });

    $('.menu_greenGoblin').click(function(){
        $('.greenGoblin_popUp').addClass('on');
        $('.greenGoblin_popUp').siblings().removeClass('on');
        $('.greenGoblin_popUp').find('.popUp_container').children().addClass('on');
        $('.greenGoblin_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });

    $('.menu_drOctopus').click(function(){
        $('.drOctopus_popUp').addClass('on');
        $('.drOctopus_popUp').siblings().removeClass('on');
        $('.drOctopus_popUp').find('.popUp_container').children().addClass('on');
        $('.drOctopus_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });

    $('.menu_electro').click(function(){
        $('.electro_popUp').addClass('on');
        $('.electro_popUp').siblings().removeClass('on');
        $('.electro_popUp').find('.popUp_container').children().addClass('on');
        $('.electro_popUp').siblings().find('.popUp_container').children().removeClass('on');
    });

})