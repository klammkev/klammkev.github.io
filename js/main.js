$(document).ready(function () {

   //avoid double-tap requirement on drop-down-less items
   $("#nav li:has(ul)").doubleTapToGo();

    //add fixed header
   if ($("header").hasClass("fixed")) {
       $("main").css("padding-top", "140px");
   }
   $("header.fixed").css("width", $(".container").width() + "px");

    //alphabet click
   $(".modelHolder").each(function () {
       var firstLetter = $(this).find(".modelName a").length > 0 ? $(this).find(".modelName a").text().charAt(0).toLowerCase() : $(this).find(".modelName").text().charAt(0).toLowerCase();
       $(this).parent("li").addClass(firstLetter);
       // Show letters with no models as inactive
       $(".alphabet " + "span#" + firstLetter).removeClass("inactive");
    });
   
   $(document).on("click touchend", ".alphabet span", function (event) {
       event.preventDefault();
       var letter = $(this).attr("rel");
       var correction;

       if ($("header").hasClass("fixed")) {
           correction = 140;
       } else {
           correction = 0;
       }

       if (letter === undefined) {

       } else {
           var offset = $("." + letter).offset().top;
            $("html, body").animate({
                scrollTop: offset - correction
            }, 2000);
        }
       
   });

   $(document).on("click touchend", ".image-menu-link", function (event) {
       event.preventDefault();
       $("nav#nav_image").toggleClass("opened");
   });

   // copyright
    var year = new Date().getFullYear();
    $("span.year").append(year);

    //search icon click
    $(document).on("click touchend", ".searchIcon", function (event) {
        event.preventDefault();
        $(".filterBox").toggleClass("open");
    });

    //$(".fancybox").fancybox();

    if ($(".login-layer-london").length > 0) {
        $(".login-layer-london").fancybox({
            openEffect: "none",
            closeEffect: "none",
            type: "iframe",
            autoSize: false,
            width: "380px",
            height: "192px",
            padding: "0",
            wrapCSS: "fancyPass",
            helpers: {
                title: {
                    type: "inside"
                }
            }
        });
    }

    //artists division dropdown
    $('.artists-ddl').change(function () {
        var route = $(this).val();

        location.href = route;

    });

});

$(window).resize(function () {
    $("header.fixed").css("width", $(".container").width() + "px");
});

function gotoUrl(url) {
    if (url === "")
        return;
    location.href = url;
}

// Add commas to numbers < 999
function add_commas(number, length) {

    var decimalValue = 1;
    var theNumber = "";
    var output = "";

    if (length > 4) {

        if (length < 7) {
            var mod = Math.floor(length / 2);

            if (number.substring(mod, mod + decimalValue) != "0") {
                output = number.substring(0, mod) + "," + number.substring(mod, mod + decimalValue) + "K"
            } else {
                output = number.substring(0, mod) + "K"
            }

        } else {
            var mod = Math.floor(length / 4);

            if (number.substring(mod, mod + decimalValue) != "0") {
                output = number.substring(0, mod) + "," + number.substring(mod, mod + decimalValue) + "M"
            } else {
                output = number.substring(0, mod) + "M"

            }
        }

        return output.toString();

    } else {

        if (length == 4) {
            theNumber = number.substring(0, 1) + "," + number.substring(1, 4)
        } else {
            theNumber = number;
        }

        return theNumber.toString();
    }

}