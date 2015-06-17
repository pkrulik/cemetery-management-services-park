
var $win = $(window),
	$fullHeightDiv = $('.full-height');
	$verticalCenter = $('.vertical-center');
	$nav = $('nav'),
	smallScreenBreakPoint = 800,
	currentURL = window.location.href,
	currentPage = currentURL.substr(currentURL.lastIndexOf('/')+1);




$win.load(function(){
	
	reset();
	fadeMainPhotos();
	
	hideLoader();
	
});


$win.resize(function(){
	
	reset();
	
});


function reset() {
	
	console.log('reset()')
	
	winWidth = $win.width();	
	winHeight = $win.height();
	verticalCenterHeight = $verticalCenter.height();
	navHeight = $nav.height();
	visibleWindowHeight = winHeight - navHeight;
	
	if (winWidth > smallScreenBreakPoint) {
		$verticalCenter.css({'padding-top': ( visibleWindowHeight - verticalCenterHeight)/2 })
	} else {
		
		$verticalCenter.css({'padding-top': ( visibleWindowHeight - verticalCenterHeight)/2 + navHeight })
		
	}
	
	$fullHeightDiv.css({height:winHeight});
	
	centerBackgroundImages();
	
	if ( $('.secondary-nav').length ) {
		
		// make the first secondary nav link active
		$('.secondary-nav ul li a').first().addClass('active');
		
	}
	
}

function fadeMainPhotos() {
	
	// fade out last li
	// add it back to the list
	
	activePhoto = $('.background-images ul li:last-child');
	
	
	setTimeout(function(){
		activePhoto.fadeOut(5000, function(){
			$('.background-images ul').prepend(activePhoto);
			activePhoto.css({display:'inline'})
			fadeMainPhotos();
		});
	}, 3000);
	
	
	
	
}




function centerBackgroundImages() {
	
	imgs = $('.background-images ul li img');
	imgWidth = imgs.width();
	imgHeight = imgs.height();

	// center it vertically
	$('.background-images ul li').css({top: (visibleWindowHeight - imgHeight)/2 })
	
	// center it horizontally
	if (winWidth > smallScreenBreakPoint) {
		$('.background-images ul li').css({left: ((winWidth/2) - imgWidth)/2  })
	} else {
		$('.background-images ul li').css({left: (winWidth - imgWidth)/2  })
	}
	
	
}


$(document).on("scroll", onScroll);

$('a').on('click', function (e) {
	
	
	// new page
	if ( $(this).attr('href').charAt(0) !== "#" ) {
		
		e.preventDefault();
		newLocation =	this.href;
		
		showLoader();
		setTimeout(function(){
			window.location = newLocation;
		}, 1000);

		console.log('newpage')
		
		
	} 
	
	
	// scroll to
	else {
		
		e.preventDefault();
		$(document).off("scroll");

		$('.secondary-nav a').each(function () {
			$(this).removeClass('active');
		})

		$(this).addClass('active');

		var target = this.hash;
		$target = $(target);

		$('html, body').stop().animate({

			'scrollTop': $target.offset().top - $('.secondary-nav').outerHeight() - 40

		}, 500, 'swing', function () {

// 				window.location.hash = target;
			$(document).on("scroll", onScroll);

		});
		
	}
	

});
	

function onScroll(event){
	

	var scrollPosition = $(document).scrollTop(); // this is how far you've scrolled from the top
					
	if ( $('.secondary-nav').length ) {
		
		$('.secondary-nav a').each(function () {
		
			var currentLink = $(this); // returns <a href="#test"></a>
			var currentLinkHREF = currentLink.attr('href'); // returns #test
			var refElement = $(currentLinkHREF); // returns $('#test')
			
			
			// check to see if the top of $('#test') is at browser top
			if (refElement.position().top-100 <= scrollPosition) {
				
				$('.secondary-nav ul li a').removeClass("active");
				currentLink.addClass("active");

				$('*[data-section-id="' + currentLinkHREF +'"]').addClass('youarehere');
				
			}
		
			else{
				
				currentLink.removeClass("active");
				
			}
		
		});
		
	}

}





// MAGNIFIC.JS

$(document).ready(function() { 
	
	$('.gallery').magnificPopup({
	    delegate: 'a', // the selector for gallery item
	    type: 'image',
	    gallery: {
	      enabled:true
	    }
	});
	
});



/*
// track main nav active state 
$('.primary-nav a').each(function(){
	
	if ( $(this).attr('href') == currentPage ) {
		
		$(this).addClass('active');
		
	}
	
});
*/

// LOADER
function hideLoader() {
	$('.loader').fadeOut(1000);
	
	$('.float-right').removeClass('off-screen').addClass('on-screen');
	
}

function showLoader() {
	$('.loader').fadeIn(1000);
	console.log('showLoader()')
}








