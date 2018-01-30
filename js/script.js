$(document).ready(function() {

	// open/close navigation
	$('body').on('click', 'div.hamburger--nav, .nav a', function() {

	    $(".hamburger--nav").toggleClass("hamburger--visible");

	    $(".nav").toggleClass("nav--visible");

	    checkScroll();

	});

	// nav click to anchors
	$(".nav a, .header-anchor").click(function(e) {

		e.preventDefault();

		var target = $(this.hash);

		$('html,body').delay(250).animate({scrollTop: target.offset().top},'slow');

		console.log(e);

	});

	// flip work cards
	$(".card .front").click(function() {

		$(this).parent().toggleClass("card--flipped").siblings().removeClass("card--flipped");

	});

	// open work lightbox
	$(".work .card .back .click").click(function() {

		var	getData = $(this).parent(),
		 	subject = getData.attr("data-subject"),
		 	title 	= getData.prev().find("h2").text(),
		 	screen  = getData.attr("data-screen"),
			image 	= getData.attr("data-image"),
			opts	= getData.data("opts");

		$("main").append("<div class='modal'><div class='subject subject--" + subject + "'><div class='sec text'><h2>" + title + "</h2></div><div class='sec image " + screen + "'><div class='scrollable'><img data-opts='" + opts + "' src='img/modal/screens/" + subject + "/" + image + "'></div><div class='change_image left'></div><div class='change_image right'></div></div></div></div>");

		// if modal only has one image
		if ( opts === 0 ) {

			$(".modal .change_image").addClass("disabled");

		}

		$(".hamburger").toggleClass("hamburger--nav hamburger--modal").addClass("hamburger--visible");

		checkScroll();

	});

	// change lightbox image
	$(document).on('click touch touchstart', '.modal .image .change_image', function() {

		var target  = $(this).siblings(".scrollable").find("img"),
			limit  	= target.data("opts"),
			src     = target.attr("src"),
			srcInt  = src.match(/\d+/),
			num     = parseInt(srcInt);

		// left
		if ( $(this).hasClass("left") ) {

			if ( num === 0 ) {

				num = limit;	

			} else { num--; }

			target.attr('src', src.replace(/\d+/, num));

		}
		// right
		else {

			if ( num === limit ) {

				num = 0;	

			} else { num++; }

			target.attr('src', src.replace(/\d+/, num));

		}

		$(target).parent().scrollTop(0);

	});

	// close work lightbox
	$(document).on('click', 'div.hamburger--modal', function() {

		$("main .modal").remove();

		$(this).toggleClass("hamburger--nav hamburger--modal").removeClass("hamburger--visible");

		checkScroll();

	});

	// disable scroll
	function checkScroll() {

		var distance = $(window).scrollTop();


		if ( $(".modal").length > 0 || $(".nav--visible").length > 0) {

			$("body").addClass("noScrolling");

			stopScroll(true);

		} else {

			$("body").removeClass("noScrolling");

			stopScroll(false);

		}

	}

	// mobile scrolling
	function stopScroll (bool) {

	    if (bool === true) {

	        $(document).on('touchmove',function(e) { e.preventDefault(); });


	    } else { $(document).off('touchmove'); }
	}

	$(window).on("mousewheel DOMMouseScroll", function(e){
	    // fixes modal scroll on firefox
	});

	// send email failed
	$("#send").click(function(){

	    $(this).closest('form').find('[required]').addClass('required');

	});

	// send email
	$(function() {

	    $('form').on('submit', function(e) {
        
        	e.preventDefault();

        	// add loading wheel
        	$(".formDiv").removeClass("result--failure result--success").addClass("result result--loading");

        	// capture data
        	var data = {
			    name: $("#name").val(),
			    email: $("#email").val(),
			    message: $("#message").val()
			};

			// send email
			$.ajax({

			    url: "https://formspree.io/thomasjjbush@gmail.com", 
			    method: "POST",
			    data: data,
			    dataType: "json",

			    // add tick
			    success: function(){
			        $('.result').removeClass("result--loading result--failure").addClass("result--success");
			    },

			    // add cross
			    error: function() { 
                    $('.result').removeClass("result--loading result--success").addClass("result--failure"); 
                }

			});

	        return false;

	    });

	});

});

// fix to assign 1:1 ratio height to cards within flexbox
$(window).on("load resize",function(){

	var card  = $(".work .card"),
	 	width = card.width();

	$(card).css("height", width);

});




	