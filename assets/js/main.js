
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
    $('#caja').append('<p>Temperatura: ' + data.currently.temperature + '</p>')
  })
  .fail(function(data) {
    console.log( "error" );
  })
  .always(function(data) {
    console.log( "complete" );
  });

});
