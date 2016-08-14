var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
	$('#ping-pong-form').submit(function(event) {
		event.preventDefault();
		var goal = $('#goal').val();
		var simpleCalculator = Calculator("hot pink");
		var output = simpleCalculator.pingPong(goal);
		output.forEach(function(element) {
			$('#solution').append("<li>" + element + "</li>");
		});
	});
});