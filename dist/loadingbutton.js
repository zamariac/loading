$(document).on('ready', start);

function start(e){

	var $button = $('#mybutton');
	var loading = 

	$button.on ('click', addLoading);

	function addLoading(e){
		$button.html("Loading...");
			
	}

	setTimeout(function() {
		$button.html("Submit");
		},4000)


}

