


		function wrong(bottone){
		$(bottone).addClass('animated swing').one('webkitAnimationEnd MSAnimationEnd oanimationend animationend', 
			function(){
			$(this).removeClass('animated swing');
			});
		};
		
		
		
		function correct(bottone){
		$(bottone).addClass('animated bounce').one('webkitAnimationEnd MSAnimationEnd oanimationend animationend', 
			function(){
			$(this).removeClass('animated bounce');
			});
		};