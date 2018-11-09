$(document).ready(function(){
		$('nav a').click(function(){
			$('nav ul li a').removeClass("active");
			$(this).addClass('active');
		});
	});