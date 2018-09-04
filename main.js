if (browse != "IE") {
  $(document).ready(function(){
    $(".smooth").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  $(document).ready(function() {

          var documentEl = $(document),
              parallaxBg = $('#homeBackground');

          documentEl.on('scroll', function() {
              var currScrollPos = documentEl.scrollLeft();
              parallaxBg.css('background-position', -currScrollPos + ' 0px');
          });
      })();

  function modifyRows() {
      var tipsTotalHeight1 = 240.0 + document.getElementById('generalPresColumn1').offsetHeight;
      var tipsTotalHeight2 = 240.0 + document.getElementById('generalPresColumn2').offsetHeight;
      var h = Math.max(tipsTotalHeight1, tipsTotalHeight2);
      document.getElementById('generalPresColumn2').style.border = "thin dotted red";
      document.documentElement.style.setProperty("--tipsRowNum", Math.ceil(h/40.0));
      $('#tip1Description').toggle();
  }

  $(document).ready(function(){
      $(".tipTitle").onclick(function(){
        var num = this.id.slice(3);
        $('#tip'+num+'Description').toggle();
      });
  });

  $(".tipTitle").click(function() {
    $('#tip1Description').hide();
  });


  // var resizeSchedule = function() {
  //   var w = $('.content').width();
  //   $('#scheduleContent').width(w);
  // }
  // $(document).ready(resizeSchedule);
  // $(window).resize(resizeSchedule);

}
