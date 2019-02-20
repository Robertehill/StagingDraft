var app = {};

app.portPicstoHtml = function() {
  $.each( portfolioPicsList, function( key, value ) {
    view.portPicstoHtml(value);
  });
}
app.loadCar = function() {
  $('.card').on('click', function() {
    console.log(this.id);
    $('.card').removeClass('full-screen');
    $(this).addClass('full-screen');
  });
}
$(document).ready(function() {
    app.portPicstoHtml();
    view.fixedNavOnScroll();
});
