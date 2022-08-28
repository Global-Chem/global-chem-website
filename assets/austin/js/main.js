(function($) {


  "use strict";

  $(window).on('load', function() {

      // Initialize Firebase

  /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* ==========================================================================
       countdown timer
       ========================================================================== */
     $('#clock').countdown('2019/10/20',function(event){
      var $this =$(this).html(event.strftime(''
      +'<div class="time-entry days"><span>%D</span> Days</div> '
      +'<div class="time-entry hours"><span>%H</span> Hours</div> '
      +'<div class="time-entry minutes"><span>%M</span> Minutes</div> '
      +'<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
      });

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    /* Nivo Lightbox
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

    // one page navigation
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    });

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

      $(function() {
          var timelineBlocks = $('.timeline-item'),
              offset = 0.8;

          //hide timeline blocks which are outside the viewport
          hideBlocks(timelineBlocks, offset);

          //on scolling, show/animate timeline blocks when entering the viewport
          $(window).on('scroll', function(){
              (!window.requestAnimationFrame)
                  ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
                  : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
          });

          function hideBlocks(blocks, offset) {
              blocks.each(function(){
                  ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
              });
          }

          function showBlocks(blocks, offset) {
              blocks.each(function(){
                  ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-icon').hasClass('is-hidden')) && $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('animate-it');

              });
          }
      });

  });

}(jQuery));

