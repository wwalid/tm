
  var theText = $('.typer').data('text'),
        theTextLength = theText.length,
        n = 0,
        theTyper= setInterval(function(){
         $('.typer').each (function(){
          $(this).html($(this).html() + theText[n]);
         });
         n = n + 1
         if(n >=  theTextLength ){
          clearInterval(theTyper);
         }
        },400);

        $(function() {
          "ues strict";
          $(window).on("scroll", function(){
         var sc = $(window).scrollTop();
         if(sc > 1000){
           $('.mm').fadeIn(200);
         }else{
          $('.mm').fadeOut(200);
         }
          });
        });
        $('.mm').click(function () {
        $('html, body').animate({
          scrollTop: 0
        },1500);
        });
        $(function(){
          "ues strict";
          
             $(".navbar .nav-item .nav-link").click(function (e){
              e.preventDefault();
              $('html , body').animate({
               scrollTop: $('#' + $(this).data('scroll')).offset().top +1
              },2000);
             });
             $('.navbar li a').click(function(){
              $(this).addClass('active').parent().siblings().find('a').removeClass('active');
             });
            
          });
          $(window).scroll(function(){
            $(".block").each(function(){
             if($(window).scrollTop() > $(this).offset().top){
              var blockID = $(this).attr("id");
              $(".navbar a").removeClass('active');
              $('.navbar li a[data-scroll="'+ blockID +'"]').addClass('active');
             }
           });
        });
        //BUTTON
        $(function(){
          "ues strict";
          $(".from-left").hover(function(){
               $(this).find("span").eq(0).animate({
                width: "100%"
               },500);
              }, function (){
                $(this).find("span").eq(0).animate({
                width: "0"
               },500);
              
              });
          });
        

          $(document).ready(function() {
            $('#contain').mixItUp(); 
            $('.shuffle .filter').click(function (){
              $(this).addClass('fil').siblings().removeClass('fil');
            });
          });