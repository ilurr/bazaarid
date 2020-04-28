$(document).ready(function() {
	var headerHeight = $('.header').outerHeight();
	var headerTop = $('.header').offset().top;
	
	if($('.cover').length>0 || $('.logo-block').length>0) {
		// scroll
		$(window).scroll(function () {
			var scrollpos = $(window).scrollTop();
			if(scrollpos > headerTop) {
				$(".header").addClass("-fixed");
				$(".header-holder").css("padding-bottom",headerHeight+"px");
			} else {
				$(".header").removeClass("-fixed");
				$(".header-holder").removeAttr("style");
			}
		});			
	} else {
		$(".header").addClass("-fixed");
		$(".header-holder").css("padding-bottom",headerHeight+"px");
	}
		
	// sticky share
    if($('.js-sticky').length>0 && $('.js-parent').length>0) {
		$(".js-sticky").stick_in_parent({
			parent: ".js-parent",
			inner_scrolling: false,
			spacer: false,
			offset_top:70,
		}).on('sticky_kit:bottom', function(e) {
			$(this).parent().css('position', 'static');
		}).on('sticky_kit:unbottom', function(e) {
		});
	}

	// menu
	$('.js-menu').click(function(e){
		e.preventDefault();
		$('body').toggleClass('-panel-show');
		$('.search-bar').removeClass('-active');
	});
	
	// search
	$('.js-search').click(function(e){
		e.preventDefault();
		$('body').toggleClass('-panel-search-show');
		var has = $('body').hasClass('-panel-search-show');
		if(has){
			//console.log(has)
			$('.search-input').focus();
		}
	});
	$('.js-search-close').click(function(e){
		e.preventDefault();
		$('body').removeClass('-panel-search-show');
	});
	
	// follow
	$('.js-follow').click(function(e){
		e.preventDefault();
		$('.social-bar').toggleClass('-active');
		$('.search-bar').removeClass('-active');
		$('body').removeClass('-panel-show');
		var has = $('.social-bar').hasClass('-active');
	});

	// submenu
    $('.js-arrow').click(function(e) {
        e.stopPropagation();
		e.preventDefault();
		var wrap = $(this).parent();
        $(this).toggleClass('-active');
        var ha = $(this).outerHeight();
        var es = $(this).parent();
        var ed = es.find('ul');
        var curHeight = es.height();
        var he = ed.outerHeight();
        var tot = he + ha;
        // es.css('height',he);
        console.log(he);
        es.height(curHeight).animate({
             height: tot == curHeight ? ha : tot
        }, 200, 'swing');
        var ws = es.toggleClass("-show");
    });
	
	// ads
	$('.js-ads-close').click(function(e){
		e.preventDefault();
		$('.ads-horizontal').hide();
	});
	
});
