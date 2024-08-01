$(function(){


  // l_menu

  $(".top_menu .l_menu li").click(function(){
      $(".top_menu .l_menu li").removeClass("on");
      $(this).addClass("on");
  });
  


  // gnb

  $("header .sub, .gnb_box").hide();

  $("header .gnb>li, .gnb_box").hover(function(){
      $(".sub, .gnb_box").stop().slideToggle();
  });













  // slider_1

  setInterval(function(){



    $(".slider").animate({

      marginLeft: "-1920px"

    },1000,function(){
      $(".slider li:first").appendTo(".slider");
      $(".slider").css("margin-left","0")
    });

  },4000);
  




});