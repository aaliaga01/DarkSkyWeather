
$(document).ready (function(){

	$.ajax(
{
  url: "https://api.darksky.net/forecast/c8353c5e5293f515913acc8eb4aa2689/-33.4372,-70.6506",
	type: 'GET',
	dataType: 'JSON',
})
  .done(function(data) {
    console.log("success");

    $('#caja').append('<div class="icono">' + data.currently.icon + '</div>');
    $('#caja').append('<p>Temperature: ' + data.currently.temperature + '</p>');
    $('#caja').append('<p>Wind: ' + data.currently.windSpeed + '</p>');
    $('#caja').append('<p>Humidity: ' + data.currently.humidity + '</p>');
    $('#caja').append('<p>UV Index: ' + data.currently.uvIndex + '</p>');
    $('#caja').append('<p>Pressure: ' + data.currently.pressure + '</p>')

  })
  .fail(function(data) {
    console.log( "error" );
  })
  .always(function(data) {
    console.log( "complete" );
  });

});
