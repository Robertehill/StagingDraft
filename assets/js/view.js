var view = {};

view.portPicstoHtml = function(obj) {
  var picID = "";
  var houseID = "";
  var fileName = "";
  var titletext = "";
  var bodyText = "";
  var photocredit = "";

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
  });
  var html = '<div class="card col-sm-10 col-md-4 col-lg-4 pad-1em margin-auto margin-bottom-1em"><img class="card-img-top" src="assets/img/portfolio/'+fileName+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+titletext+'</h5><div id="'+picID+'Body"></div><p class="card-text">Photo by '+photocredit+'</p></div></div>';
  $('#portfolio-section').append(html);
  // console.log("bodyText ="+ bodyText);
  $.each(bodyText, function( key, value ) {
    $('#'+picID+'Body').append('<p>'+value+'</p>');
    console.log(key+' '+value);
  });
}
