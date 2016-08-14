function pingPong(goal) {
	var output = [];
	for (var i = 0; i <= goal; i++) {
		if (i % 15 === 0) {
			output.push("ping-pong");
		}
		else if (i % 3 === 0) {
			output.push("ping");
		}
		else if (i % 5 === 0) {
			output.push("pong");
		}
		else {
			output.push(i);
		}
	}
	return output;
}

$(document).ready(function(){
	$('#ping-pong-form').submit(function(event) {
		event.preventDefault();
		var goal = $('#goal').val();
		var output = pingPong(goal);
		output.forEach(function(element) {
			$('#solution').append("<li>" + element + "</li>");
		});
	});
});