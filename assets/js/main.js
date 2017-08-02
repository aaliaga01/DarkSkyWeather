
$.getJSON('https://api.darksky.net/forecast/c8353c5e5293f515913acc8eb4aa2689/37.8267,-122.4233', function(resp) {
    $.each(resp, function(k, v) {
        console.log(k + ' : ' + v);
});
});


/* Me sale este error todo el rato, no se que hacer
XMLHttpRequest cannot load https://api.darksky.net/forecast/c8353c5e5293f515913acc8eb4aa2689/37.8267,-122.4233. 
No 'Access-Control-Allow-Origin' header is present on the requested resource. 
Origin 'null' is therefore not allowed access.
*/