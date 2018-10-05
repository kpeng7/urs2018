window.addEventListener("load", async () => {
        setTipsHeight();
});

const setTipsHeight = () => {
        let e = document.getElementById("tips");
        let col1 = document.getElementById("generalPresColumn1");
        let col2 = document.getElementById("generalPresColumn2");
        let maxHeight = Math.max($(col1).height(), $(col2).height());
        e.style.height = (maxHeight + 300).toString() + "px";
};

const showTip = (tipNum) => {
        let e = document.getElementById("tip" + tipNum + "Description");
        // if (e.style.display == "none") {
        //         e.style.display = "block";
        //         setTipsHeight();
        // } else {
        //         e.style.display = "none";
        //         setTipsHeight();
        // }
        $(e).slideToggle({
                duration: "slow",
                progress: function(){
                    setTipsHeight();
            }
    });

};

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

jQuery(document).ready(function() {

        var documentEl = $(document),
            parallaxBg = $('#homeBackground');

        documentEl.on('scroll', function() {
            var currScrollPos = documentEl.scrollLeft();
            parallaxBg.css('background-position', -currScrollPos + ' 0px');
        });
});
