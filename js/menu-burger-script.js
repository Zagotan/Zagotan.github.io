$(document).ready(function() {
	$('.header_burger').click(function(event) {
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
$('.header_menu').click(function(){
       $('.header_burger, .header_menu').removeClass('active');
       $('body').removeClass('lock');
});

});


