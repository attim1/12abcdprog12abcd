		
		$(document).ready(function(){
		  // Aggiusto la larghezza del contenitore impostandola a tutta pagina
		  $("#fpol").css("height", $(document).height());
		 
		  // Quando il link viene cliccato apro la finestra overlay
		  $("#apri_fpol").click(function(){
			$('html, body').animate({ scrollTop: 0 }, 0, function() {
			  $("#fpol").fadeIn();
			  return false;
			});
		  });
		 
		  // Quando viene cliccato il link di chiusura... chiudo!
		  $("#chiudi_fpol").click(function(){
			$("#fpol").fadeOut();
			return false;
		  });
		});
		  
		// Aggiusto l'altezza del contenitore in caso di resize della finestra del browser
		$(window).bind("resize", function(){
		  $("#fpol").css("height", $(window).height());
		});
		
		  
    $(document).ready(function() {
    var i = 0;
    var speed = 500;
    link = setInterval(function() {
    i++;
    $(".apri").css('background-color', i%2 == 1 ? '#FFFF00' : '#fa0000');
    },speed);
    });
