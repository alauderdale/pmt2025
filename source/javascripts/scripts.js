$(document).ready(function(){


var triggerOffset = 300;

$(window).on('scroll load', function() {
  var heroBottom = $('#product-hero').offset().top + $('#product-hero').outerHeight();
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= heroBottom - triggerOffset) {
    $('.buy-block-tall').addClass('buy-block-scrolled');
  } else {
    $('.buy-block-tall').removeClass('buy-block-scrolled');
  }
});


  //add class to sticky buy bar
  $(window).on('scroll load', function() {
  var heroBottom = $('.buy-block').offset().top + $('.buy-block').outerHeight();
  var scrollTop = $(window).scrollTop();

  if (scrollTop >= heroBottom) {
    $('.buy-bar').addClass('buy-bar-scrolled');
  } else {
    $('.buy-bar').removeClass('buy-bar-scrolled');
  }
});



  //collapse other panels when clicked
  var $myGroup = $('#videoGroup');
    $myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
  });


  // toggle checkout expander


  $(document).on('click', '.order-expander-outer', function (e) {
    e.preventDefault();

    var $summary = $('.checkout-right');
    var $btn = $(this);

    $summary.toggleClass('summary-closed');
    $btn.toggleClass('expanded');
  });


  // toggle show more expander


  $(document).on('click', '.show-more-toggle', function (e) {
    e.preventDefault();

    var $summary = $('.show-more-wrap');
    var $btn = $(this);

    $summary.toggleClass('show-more-expanded');
    $btn.toggleClass('show-more-action-expanded');
  });



  //only show "scroll for more items" at the top of the scroll


//only show "scroll for more items" at the top of the scroll
    $(function () {
        var $summaryList = $(".checkout-summary-list");
        var $scrollHint = $(".scroll-for-more");

        function updateScrollHint() {
            if (!$summaryList.length || !$scrollHint.length) {
                return;
            }

            // Check if there's actually scrollable content
            var hasOverflow = $summaryList[0].scrollHeight > $summaryList[0].clientHeight;

            if (hasOverflow && $summaryList.scrollTop() === 0) {
                // Position hint at bottom of .checkout-summary-list
                var listHeight = $summaryList.outerHeight();

                // Set position (hint is ~35px tall with padding)
                $scrollHint[0].style.top = (listHeight - 40) + "px"; // Fixed offset for hint height
                $scrollHint.addClass("visible");
            } else {
                $scrollHint.removeClass("visible");
            }
        }

        // Listen to scroll on the summary panel
        $summaryList.on("scroll", updateScrollHint);

        // Run once on load
        updateScrollHint();

        // Re-run on window resize
        $(window).on("resize", updateScrollHint);
    });

  // $(function () {
  //   var $summaryList = $('.checkout-summary-list'); // the scrollable div
  //   var $scrollHint  = $('.scroll-for-more');       // the hint OUTSIDE

  //   function updateScrollHint() {
  //     if ($summaryList.scrollTop() === 0) {
  //       $scrollHint.addClass('visible');
  //     } else {
  //       $scrollHint.removeClass('visible');
  //     }
  //   }

  //   // Listen to scroll on the summary panel
  //   $summaryList.on('scroll', updateScrollHint);

  //   // Run once on load
  //   updateScrollHint();
  // });



	 //fancybox
	$('.fancybox').fancybox();
	
	$('.fb-video').fancybox({
        padding: 0,
        helpers: {
            media: {}
        }
   });

	$('.tooltip-up').tooltip({html:true});

  $('.bas-tooltip').tooltip({html:true});


	///responsive tables!!!
	$('table').footable();

	$('#logo-slider .item:first-child').addClass('active');
  $('#testimonial-slider .item:first-child').addClass('active');

	$('.carousel').carousel({
  	interval: 4000
	});

  $('.checkout-testimonial-carousel').carousel({
    interval: 4000
  });






	$(window).scroll(function(){

    var divOffset = $('#mainContents').offset();
    if(window.scrollY > divOffset.top ){
      $('#hidden-menu').fadeIn(400);
    }

   if(window.scrollY < divOffset.top){
      $('#hidden-menu').fadeOut(90);
    }

  });

  //flip chevron

  var div = $(this).next('.fa-chevron-down');

  $( ".list-panel button" ).click(function() {
    $(this).find( '.fa-chevron-down' ).toggleClass('fa-flip-vertical');

  });


  $('.instructor-slider').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 2000,
      responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $(".expand-height").click(function(){
    $(this).prev().addClass("height-auto");
    $(this).remove();

  });

});
