var app = {};

app.portPicstoHtml = function() {
  $.each( portfolioPicsList, function( key, value ) {
    view.portPicstoHtml(value);
  });
}
$( document ).ready(function() {
    app.portPicstoHtml();
});
