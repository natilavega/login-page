$(document).ready(function ($) {

	$('#login-switch').click(function(){
		$('#login').fadeOut(500).promise().done(function(){
			$('#signup').fadeIn(500);
		});
	});

	$('#signup-switch').click(function(){
		$('#signup').fadeOut(500).promise().done(function(){
			$('#login').fadeIn(500);	
		});
	});

	$('#restore-password').click(function(){
		$('#login').fadeOut(500).promise().done(function(){
			$('#restore').fadeIn(500);	
		});
	});
});