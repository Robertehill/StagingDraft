var view = {};

view.portPicstoHtml = function(obj) {
  var picID = "";
  var houseID = "";
  var fileName = "";
  var titletext = "";
  var bodyText = "";
  var photocredit = "";
  var photoCredLink = "";

  $.each( obj, function( key, value ) {
    if (key == "picID") {
      picID = value;
    }
    if (key == "houseID") {
      houseID = value;
    }
    if (key == "fileName") {
      fileName = value;
    }
    if (key == "titletext") {
      titletext = value;
    }
    if (key == "photocredit") {
      photocredit = value;
    }
    if (key == "bodyText") {
      bodyText = value;
    }
    if (key == "photoCredLink") {
      photoCredLink = value;
    }
  });
  var cardHtml = '<div id="'+picID+'" class="card col-sm-10 col-md-4 col-lg-4 pad-1em margin-auto margin-bottom-1em"><img class="card-img-top" src="assets/img/portfolio/'+fileName+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+titletext+'</h5><div id="'+picID+'Body"></div></div><p class="text-bottom">Photo by '+photocredit+'</p></div>';
  var carouselIndicators = '<li data-target="#carouselExampleIndicators" data-slide-to="'+(picID - 1)+'"></li>';
  var portCarouselInner = '<div id="car'+picID+'" class="carousel-item"><img class="d-block margin-auto" src="assets/img/portfolio/'+fileName+'" alt=""></div>';
  $('#portfolio-div').append(cardHtml);
  if (photoCredLink != '' || photoCredLink != null) {
    $('#'+picID).append('<p class="text-bottom"><a class="font-black" href="'+photoCredLink+'">'+photoCredLink+'</a></p>');
  }
  $.each(bodyText, function( key, value ) {
    $('#'+picID+'Body').append('<p>'+value+'</p>');
    console.log(key+' '+value);
  });
}
view.fixedNavOnScroll = function() {
  $(document).scroll(function(e){
      var scrollTop = $(document).scrollTop();
      if(scrollTop >= $('header').height()+5){
          $('.navbar').removeClass('navbar-static-top').addClass('fixed-top');
      } else {
          $('.navbar').removeClass('fixed-top').addClass('navbar-static-top');
      }
  });
}
