function imperialToMetric(unit) {
  return unit / 0.033814
}
function FahrenheitToCelsius(unit) {
  return ((unit * (5/9)) - 32)
}

$(document).ready(function() {
  $("form#convert").submit(function(event){
  event.preventDefault();
  var unit = parseInt($("#imperial1").val());
  var result = imperialToMetric(unit);
  $('#metricOutput').text(result + ' Milliliters');
})
$("form#tempconvert").submit(function(event){
event.preventDefault();
var unit = parseInt($("#temperature1").val());
var result = FahrenheitToCelsius(unit);
$('#tempOutput').html(result.toFixed(1) + ' &#8451');
})
});
