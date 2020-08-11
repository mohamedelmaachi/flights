$(function () {

  function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      }
      else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      }
      else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
    else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      }
      else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
      else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  $('.toggle-fullscreen').click(function () {
    toggleFullScreen();
  });

  $(document).on("click", ".parent-trip", function () {


    var _this = $(this);
    var container = _this.parent().siblings(".container-trip");

    $(".parent-trip").not(_this).removeClass('expandi').addClass('collapsi');

    $('.container-trip').not(container).slideUp();

    $(container).slideToggle(500);

    if (_this.hasClass('expandi')) {
      _this.removeClass('expandi').addClass('collapsi');
    } else {
      _this.removeClass('collapsi').addClass('expandi');
    }

  });


  /* ZONE DE TEXT OGRIN ET DEPART VOYAGE */
  // For Select citites
  $(document).on('focus', '#adresse_compl', function (e) {
    $('.city-start-end').addClass('city-start-end-focus');
    //e.stopPropagation();
  });


  $(document).on('click', '#select-cities', function () {
    var city = $('#city-start').val() + ' , ' + $('#city-end').val();
    $('#adresse_compl').val(city);
    $('.city-start-end').removeClass('city-start-end-focus');
  });

  $(document).click(function (e) {
    if (e.target.id != 'city-data' && e.target.id != 'adresse_compl' && e.target.id != 'city-start' && e.target.id != 'city-end' &&
      e.target.id != 'lb-start-city' && e.target.id != 'lb-end-city' && e.target.id != 'marker-cities1' && e.target.id != 'marker-cities2' && e.target.id != 'container-cities') {
      $('.city-start-end').removeClass('city-start-end-focus');
    }
  });

  $(document).on('focus', '#adresse_compl', function () {
    $(this).blur();
  });


  $(document).on('focus', '#status_compl', function (e) {
    $('.status-start-end').addClass('status-start-end-focus');
    //e.stopPropagation();
  });

  $(document).click(function (e) {
    if (e.target.id != 'city-data' && e.target.id != 'status_compl' && e.target.id != 'status-start' && e.target.id != 'status-end' &&
      e.target.id != 'lb-start-city' && e.target.id != 'lb-end-city' && e.target.id != 'marker-status1' && e.target.id != 'marker-status2'
      && e.target.id != 'container-cities') {
      $('.status-start-end').removeClass('status-start-end-focus');
    }
  });
  $(document).on('focus', '#status_compl', function () {
    $(this).blur();
  });


  /* ZONE DE TEXT Num chauffeur, tracteur et remorque */
  // For chauffeur, tracteur et remorque
  $(document).on('focus', '#type-vehicule', function (e) {
    $('.vehicule-type').addClass('vehicule-focus');
    //e.stopPropagation();
  });

  $(document).on('click', '#select-vehicule', function () {
    var vehicule = $('#chauffeur-field').val() + ' , ' + $('#tracteur-field').val() + ' , ' + $('#remorque-field').val();
    $('#type-vehicule').val(vehicule);
    $('.vehicule-type').removeClass('vehicule-focus');
  });

  $(document).click(function (e) {
    if (e.target.id != 'date-data' && e.target.id != 'type-vehicule' && e.target.id != 'chauffeur-field' && e.target.id != 'tracteur-field' && e.target.id != 'remorque-field' &&
      e.target.id != 'lb-chauffeur' && e.target.id != 'lb-tracteur' && e.target.id != 'lb-remorque' && e.target.id != 'marker-cities1' && e.target.id != 'marker-cities2' && e.target.id != 'marker-cities3' && e.target.id != 'container-vehicule') {
      $('.vehicule-type').removeClass('vehicule-focus');
    }
  });

  $(document).on('focus', '#type-vehicule', function () {
    $(this).blur();
  });


  //Debut fixation du filtre
  /* $(window).scroll(function(){
    if ($(this).scrollTop() > 130) {
          $('.filtre').addClass('filtre_fixed');
          $('#list_voyage').addClass('list_voyage_fixed');
    } else {
          $('.filtre').removeClass('filtre_fixed');
          $('#list_voyage').removeClass('list_voyage_fixed');
    }
  });*/
  //Fin fixation du filtre


  /* ZONE DE TEXT Pour date depart et arrivée */
  // For date départ et d'arrivée
  $(document).on('focus', '#start-end-date-field', function (e) {
    $('.date-start-end').addClass('date-start-end-focus');
    //e.stopPropagation();
  });

  $(document).on('click', '#select-date', function () {
    var date = $('#date-start').val() + ' , ' + $('#date-end').val();
    $('#start-end-date-field').val(date);
    $('.date-start-end').removeClass('date-start-end-focus');
  });

  $(document).click(function (e) {
    if (e.target.id != 'city-data' && e.target.id != 'start-end-date-field' && e.target.id != 'date-start' && e.target.id != 'date-end' &&
      e.target.id != 'lb-start-date' && e.target.id != 'lb-end-date' && e.target.id != 'marker-cities1' && e.target.id != 'marker-cities2' && e.target.id != 'container-date') {

      $('.date-start-end').removeClass('date-start-end-focus');
    }
  });

  $(document).on('focus', '#start-end-date-field', function () {
    $(this).blur();
  });


  $(document).on('click', '.close-but-popup', function () {
    $('.modified_modal').modal('toggle');
  });

  //For Data Table without pagination
  if ($('.without-paginate').length) {
    $('.without-paginate').DataTable({searching: false, paging: false, "bInfo": false});
  }


  //For Data Table with pagination
  if ($('.with-paginate').length) {
    $('.with-paginate').DataTable({
      searching: false,
      paging: true,
      "bInfo": false,
      "pageLength": 20,
      "bLengthChange": false,
      "language": {
        "paginate": {
          "previous": "Précédent",
          "next": "Suivant"
        }
      },
      "sDom": '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>'
    });
  }


  /* ZONE DE TEXT Pour Date Min et Max ( Réclamations ) */
  $(document).on('focus', '#date_recl', function (e) {
    $('.date-start-end-rec').addClass('date-start-end-focus');
    $(this).blur();
    //e.stopPropagation();
  });

  $(document).on('click', '#select-rec-date', function () {
    var date = $('#date-rec-start').val() + ' , ' + $('#date-rec-end').val();
    $('#date_recl').val(date);
    $('.date-start-end-rec').removeClass('date-start-end-focus');
  });

  $(document).click(function (e) {
    if (e.target.id != 'date-rec-start' && e.target.id != 'date-rec-end' && e.target.id != 'date_recl' &&
      e.target.id != 'lb-start-date' && e.target.id != 'lb-end-date' && e.target.id != 'marker-cities-rec-1' && e.target.id != 'marker-cities-rec-2' && e.target.id != 'container-date') {
      $('.date-start-end-rec').removeClass('date-start-end-focus');
      $('#date_recl').blur();
    }
  });


  $(document).on("click", "[data-toggle]", function () {
    var id = $(this).data("target");
    $('#' + id).modal();
  });

});


