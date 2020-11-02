$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   $('#logintext').animate({height: "toggle", opacity: "toggle"}, "slow");
   $('#registertext').animate({height: "toggle", opacity: "toggle"}, "slow");
});

(function() {
	  'use strict';
	  window.addEventListener('load', function() {
	    // Fetch all the forms we want to apply custom Bootstrap validation styles to
	    var forms = document.getElementsByClassName('needs-validation');
	    // Loop over them and prevent submission
	    var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
	        form.classList.add('was-validated');
	      }, false);
	    });
	  }, false);
	})();
	
function Registering(){
	document.getElementById("register-form").submit();
	var x = document.getElementById("registered");
		if (x.style.display === "none") {
			x.style.display = "block";
		} 
		else {
			x.style.display = "none";
		}
}