	$(document).ready(function(){
		$( ".toggle" ).on('click', function() {
			var url = $(this).attr('href');
			$(url).toggle( "blind");
		});
	});