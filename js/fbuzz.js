$(document).ready(function(){
	$('button').click(function(){
		// $('.display').empty();
		fizzbuzz();
	});
	function fizzbuzz(){
		var num = $('#digit').val();
		for (n = 1; n <= num; n++){
			if (n % 5 ===0 && n % 3 === 0){
				numIs("FizzBuzz");
			} else if (n % 5 === 0) {
				numIs("Buzz");
			} else if (n % 3 === 0){
				numIs("Fizz");
			} else {
				numIs(n);
			}
		}
	}
	function numIs(n) {
		$('.display').append('<div>' +n+ '</div>');
	}
});