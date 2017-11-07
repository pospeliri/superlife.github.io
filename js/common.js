$(function() {

	//hover effects 
	$('.otherpost__link').mouseenter(function(){
		$('.otherpost__link ').removeClass('otherpost__link-active');
		$(this).addClass('otherpost__link-active');
	});

	$('.search__btn').on('click', function(){
		$(this).prev('.search__input').toggleClass('search__input-active');
		//$('.search__input').toggleClass('search__input-active');
		//$(this).addClass('otherpost__link-active');
	});

	//parallax
	
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		console.log(st);
		$('.flyimage').css({
			"transform" : "translate(0%,"+(-st/7)+"%)"
		})
	});
	
});
