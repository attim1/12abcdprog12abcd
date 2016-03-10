	


		function start(bottone){
		$(bottone).addClass('animated flipOutX').one('webkitAnimationEnd MSAnimationEnd oanimationend animationend', 
			function(){
			$(this).removeClass('animated flipOutX');
			window.location.href = "quiz.html";
			});
		};
		
		function start2(bottone){
		$(bottone).addClass('animated flipOutY').one('webkitAnimationEnd MSAnimationEnd oanimationend animationend', 
			function(){
			$(this).removeClass('animated flipOutY');
			});
		};
		
		function start3(bottone){
		$(bottone).addClass('animated flip').one('webkitAnimationEnd MSAnimationEnd oanimationend animationend', 
			function(){
			$(this).removeClass('animated flip');
			});
		};