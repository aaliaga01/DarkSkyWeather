
$(document).ready (function(){

var cal= function(){

	$.ajax( {
	url: "https://api.darksky.net/forecast/37457c3f51925aa523a0b4d7702c1e54/37.8267,-122.4233",
	type: 'GET',
	dataType: 'JSON',
	data: {'temperature' : 1},
	})
	.done(function(response) {
		console.log("success");

	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	}
});
