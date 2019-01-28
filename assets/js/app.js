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
    // $('#portfolio-section').hide();
    // $('#car'+this.id).addClass('active');
  });
}
$(document).ready(function() {
    app.portPicstoHtml();
    // app.loadCar();
    view.fixedNavOnScroll();
});
// $(window).resize(function() {
//   if ($(document).height() <= $(window).height()){
//     $('.footer').addClass('footer-fixed');
//   }
//   else {
//     $('.footer').removeClass('footer-fixed');
//   }
// }).resize()
