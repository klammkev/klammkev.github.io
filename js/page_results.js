// jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing["jswing"] = jQuery.easing["swing"]; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (e, t, n, r, i) { return jQuery.easing[jQuery.easing.def](e, t, n, r, i) }, easeInQuad: function (e, t, n, r, i) { return r * (t /= i) * t + n }, easeOutQuad: function (e, t, n, r, i) { return -r * (t /= i) * (t - 2) + n }, easeInOutQuad: function (e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t + n; return -r / 2 * (--t * (t - 2) - 1) + n }, easeInCubic: function (e, t, n, r, i) { return r * (t /= i) * t * t + n }, easeOutCubic: function (e, t, n, r, i) { return r * ((t = t / i - 1) * t * t + 1) + n }, easeInOutCubic: function (e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t + n; return r / 2 * ((t -= 2) * t * t + 2) + n }, easeInQuart: function (e, t, n, r, i) { return r * (t /= i) * t * t * t + n }, easeOutQuart: function (e, t, n, r, i) { return -r * ((t = t / i - 1) * t * t * t - 1) + n }, easeInOutQuart: function (e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n; return -r / 2 * ((t -= 2) * t * t * t - 2) + n }, easeInQuint: function (e, t, n, r, i) { return r * (t /= i) * t * t * t * t + n }, easeOutQuint: function (e, t, n, r, i) { return r * ((t = t / i - 1) * t * t * t * t + 1) + n }, easeInOutQuint: function (e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n; return r / 2 * ((t -= 2) * t * t * t * t + 2) + n }, easeInSine: function (e, t, n, r, i) { return -r * Math.cos(t / i * (Math.PI / 2)) + r + n }, easeOutSine: function (e, t, n, r, i) { return r * Math.sin(t / i * (Math.PI / 2)) + n }, easeInOutSine: function (e, t, n, r, i) { return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n }, easeInExpo: function (e, t, n, r, i) { return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n }, easeOutExpo: function (e, t, n, r, i) { return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n }, easeInOutExpo: function (e, t, n, r, i) { if (t == 0) return n; if (t == i) return n + r; if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n; return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n }, easeInCirc: function (e, t, n, r, i) { return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n }, easeOutCirc: function (e, t, n, r, i) { return r * Math.sqrt(1 - (t = t / i - 1) * t) + n }, easeInOutCirc: function (e, t, n, r, i) { if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n; return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n }, easeInElastic: function (e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i) == 1) return n + r; if (!o) o = i * .3; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n }, easeOutElastic: function (e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i) == 1) return n + r; if (!o) o = i * .3; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n }, easeInOutElastic: function (e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i / 2) == 2) return n + r; if (!o) o = i * .3 * 1.5; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n; return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n }, easeInBack: function (e, t, n, r, i, s) { if (s == undefined) s = 1.70158; return r * (t /= i) * t * ((s + 1) * t - s) + n }, easeOutBack: function (e, t, n, r, i, s) { if (s == undefined) s = 1.70158; return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n }, easeInOutBack: function (e, t, n, r, i, s) { if (s == undefined) s = 1.70158; if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n; return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n }, easeInBounce: function (e, t, n, r, i) { return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n }, easeOutBounce: function (e, t, n, r, i) { if ((t /= i) < 1 / 2.75) { return r * 7.5625 * t * t + n } else if (t < 2 / 2.75) { return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n } else if (t < 2.5 / 2.75) { return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n } else { return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n } }, easeInOutBounce: function (e, t, n, r, i) { if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n; return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n } });

$(document).ready(function () {

    //Size model Holders
    sizeHolders();
    scrollToModel();
    addInstagramCount();

    $(".modelHolder").imagesLoaded(function () {

    }).progress(function (instance, image) {
        var img = $(image.img);
        if (!img.parent().hasClass("loading")) {
            var container = img.closest(".modelHolder");
            img.addClass("loaded");
            if (container.find("img").not(".loading img").length === container.find("img.loaded").length) {
                container.find(".loading").remove();
                container.addClass("is-loaded");
            }
        }
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scrollup:not(.is-visible)").addClass("is-visible");
        } else {
            $(".scrollup.is-visible").removeClass("is-visible");
        }
    });

    $(".scrollup").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    //new york women image/development results
    if ($(".results-image").length > 0) {
        $(".portfolio-container").niceScroll({
            cursorcolor: "#000000",
            cursorwidth: "7px",
            cursorborder: "0",
            cursorborderradius: "7px",
            cursoropacitymax: "0.65",
            zindex: "9999"
        });
        var modelId = $(".results").attr("data-model-id"); // will be 0 if blank
        var modelUrl = $(".results").attr("data-model-url");
        if (modelId + "" !== "0" && modelUrl + "" !== "") {
            $(".results-image ul li#" + modelId + " .modelHolder").append("<div class=\"portfolio-loading\"></div>");
            loadImagePortfolio(modelUrl);
            $(".results").attr("data-model-url", "");
        }
        else {
            history.pushState({ title: $(".results").data("pageTitle"), url: $(".results").data("pageUrl") }, $(".results").data("pageTitle"), $(".results").data("pageUrl"));
        }
    }
    $(document).on("click touchend", ".results-image ul li", function (event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).find(".modelHolder").append("<div class=\"portfolio-loading\"></div>");
        var url = $(this).data("getUrl");
        loadImagePortfolio(url);
    });
    $(document).on("click touchend", ".dynamic-portfolio-link", function (event) {
        event.preventDefault();
        var url = $(this).data("getUrl");
        loadImagePortfolio(url, false);
    });
    $(document).on("click touchend", ".close-portfolio-link", function (event) {
        event.preventDefault();
        var closeLink = $(this);
        history.pushState({ title: $(".results").data("pageTitle"), url: closeLink.attr("href") }, $(".results").data("pageTitle"), closeLink.attr("href"));

        $(".container, .header, nav#nav_image").show();
        sizeHolders();
        destroySliderEvents();
        $(".portfolio-container")
                .animate({ bottom: "-100%" }, 1000, "easeInOutExpo", function () {
                    $(".portfolio-container").hide().empty();
                    scrollToModel();
                });
    });
    //end new york women image/development results
    
});       //ready end


var resizeResultsId;
$(window).resize(function () {
    clearTimeout(resizeResultsId);
    resizeResultsId = setTimeout(function () {
        sizeHolders();
    }, 100);
});

function scrollToModel() {
    var modelId = $(".results").attr("data-model-id"); // will be 0 if blank
    if (modelId + "" !== "0") {
        var offset = $("#" + modelId).offset().top;
        $("html, body").animate({
            scrollTop: offset
        }, 500);
    }
}

function sizeHolders() {
    var ratio = 440 / 290;
    var width = $(".modelHolder").width();
    var height = Math.floor(width * ratio);
    if ($(".results-image").length > 0) { //results of women images has name ontop of image instead of below
        $(".modelHolder").css("height", (height ) + "px");
    } else {
        $(".modelHolder").css("height", height + "px");
    }
}


//new york women image/development results functions
function prepPortfolio() {
    $(".portfolio-loading").remove();
    $(".container, .header, nav#nav_image").hide();
}

function loadPortfolio() {
    $(".portfolio-container .close-portfolio-link").attr("href", $(".portfolio").attr("data-back-url"));
    $(".results").attr("data-model-id", $(".portfolio").attr("data-model-id"));
    if ($(".portfolio-images-desktop, .portfolio-images-mobile").length > 0) {
        loadPortfolioImages();
        registerSliderEvents();
    }
    if ($(".portfolio-videos-desktop, .portfolio-videos-mobile").length > 0) {
        loadPortfolioVideos();
        registerSliderEvents();
    }
}

function loadPortfolioImages() {
    $(".fboxframe").fancybox({
        width: "300px",
        height: "570px"
    });

    $(".portfolio-images-desktop, .portfolio-images-mobile").imagesLoaded(function () {
    }).progress(function (instance, image) {
        var img = $(image.img);
        if (!img.parent().hasClass("loading")) {
            var container = img.closest(".portfolio-image");
            var largeSrc = img.attr("data-large");
            if (!image.isLoaded && largeSrc !== "") {
                console.log("Replacing image for " + image.img.src + " with " + largeSrc);
                img.attr("src", largeSrc);
            }
            container.find(".loading").remove();
            container.addClass("is-loaded");
            if (container.hasClass("portfolio-image-cover")) {
                setStatsWidth();
                setSliderArrows();
            }
            
        }
    });

    var slider = $("#slick1");
    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 600,
        lazyLoad: "progressive",
        easing: "easeInOutExpo",
        prevArrow: $(".slick-nav-prev"),
        nextArrow: $(".slick-nav-next")
    });
    slider.on('afterChange', function (event, slick, currentSlide) {
        setSliderArrows();
    });
}

function loadPortfolioVideos() {
    var slider = $("#slick2");
    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 600,
        lazyLoad: "progressive",
        easing: "easeInOutExpo",
        prevArrow: $(".slick-nav-prev"),
        nextArrow: $(".slick-nav-next")
    });
    slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        var videoPlayer = slider.find(".slick-slide[data-slick-index='" + currentSlide + "'] .portfolio-video-player");
        videoPlayer.each(function () {
            var player = $(this);

            //var videoBox = player.closest(".portfolio-video-box");
            if (player.hasClass("flowplayer")) {
                var flow = player.data("flowplayer");
                if (flow.playing) {
                    flow.stop();
                }
                /*player.hide();
                player.closest(".portfolio-video-box").fadeOut(300, function () {
                    player.show();
                });*/
            }
        });
    });
    slider.on('afterChange', function (event, slick, currentSlide) {
        //setSliderArrows();
    });

    var videoPlayer = $(".portfolio-video-player");
    videoPlayer.each(function () {
        var player = $(this);
        //if not initialized yet
        if (!player.hasClass("flowplayer")) {
            //poster setup for touch devices, because flowplayer shows grey splash screen instead of video element for touch devices
            if ($("html").hasClass("touch")) { //touch class added by modernizer
                player.css("background-image", "url('" + player.data("videoThumb") + "')");
            }
            player.flowplayer({
                key: player.data("videoKey"),
                clip: {
                    sources: [{ type: "video/mp4", src: player.data("url") }],
                    //title: player.data("title"),
                    splash: false
                }
            });
            /*player.data("flowplayer").on("finish", function (e, api) {
                api.unload();
                player.hide();
                player.closest(".portfolio-video-box").fadeOut(1000, function () {
                    player.show();
                });
            });*/
        }
    });
}

var mouseMoveSlickId;
function registerSliderEvents() {
    destroySliderEvents(); //destroy before register, to avoid multiple events
    $(document).on("click", ".slick-slide", slickClick);
    $(document).on({
        "mouseenter": slickMouseEnter,
        "mouseleave": slickMouseLeave,
        "mousemove": slickMouseMove
    }, ".slick-slider.slick-initialized");
}
function destroySliderEvents() {
    $(document).off("click", ".slick-slide", slickClick);
    $(document).off({
        "mouseenter": slickMouseEnter,
        "mouseleave": slickMouseLeave,
        "mousemove": slickMouseMove
    }, ".slick-slider.slick-initialized");
}
function isMouseLeft(event, elm) {
    var pWidth = elm.innerWidth(); //use .outerWidth() if you want borders
    var pOffset = elm.offset();
    var x = event.pageX - pOffset.left;
    return (pWidth / 2 > x);
}
function slickClick(event) {
    event.preventDefault();
    var thisSlider = $(this).closest(".slick-slider.slick-initialized");
    if (thisSlider.length > 0) {
        if (isMouseLeft(event, thisSlider)) {
            thisSlider.slick("slickPrev");
        } else {
            thisSlider.slick("slickNext");
        }
    }
}
function slickMouseEnter(event) {
    if (isMouseLeft(event, $(this))) {
        $(".slick-nav-next.hover").removeClass("hover");
        $(".slick-nav-prev:not(.hover)").addClass("hover");
    } else {
        $(".slick-nav-prev.hover").removeClass("hover");
        $(".slick-nav-next:not(.hover)").addClass("hover");
    }
}
function slickMouseLeave(event) {
    clearTimeout(mouseMoveSlickId);
    $(".slick-nav-prev.hover").removeClass("hover");
    $(".slick-nav-next.hover").removeClass("hover");
}
function slickMouseMove(event) {
    clearTimeout(mouseMoveSlickId);
    var thisSlider = $(this);
    mouseMoveSlickId = setTimeout(function () {
        if (isMouseLeft(event, thisSlider)) {
            $(".slick-nav-next.hover").removeClass("hover");
            $(".slick-nav-prev:not(.hover)").addClass("hover");
        } else {
            $(".slick-nav-prev.hover").removeClass("hover");
            $(".slick-nav-next:not(.hover)").addClass("hover");
        }
    }, 30);
}

function loadImagePortfolio(url, openPortfolio) {
    if (typeof openPortfolio !== "boolean") {
        openPortfolio = true;
    }
    $(".portfolio-container")
        .html("<p style=\"width:100%; text-align: center; margin-top: 100px;\">loading</p>")
        .append($(".close-portfolio-link").clone().show());

    $(".portfolio-container").load(url, function (response, status, xhr) {
        if (status === "error") {
            var msg = "Sorry, but there was an error: ";

            $(".portfolio-container")
                .html(msg + xhr.status + " " + xhr.statusText)
                .append($(".close-portfolio-link").clone().show());
            if (openPortfolio) {
                $(".portfolio-container")
                    .show()
                    .animate({ bottom: "0" }, 1000, "easeInOutExpo", function () {
                        prepPortfolio();
                    });
            }
        } else {
            history.pushState({ title: $(".portfolio").attr("data-page-title"), url: $(".portfolio").attr("data-page-url") }, $(".portfolio").attr("data-page-title"), $(".portfolio").attr("data-page-url"));
            $(".portfolio-container")
                .append($(".close-portfolio-link").clone().show());
            if (openPortfolio) {
                $(".portfolio-container")
                    .show()
                    .animate({ bottom: "0" }, 1000, "easeInOutExpo", function () {
                        prepPortfolio();
                        loadPortfolio();
                    });
            } else {
                loadPortfolio();
            }
        }
    });
}

function setStatsWidth() {
    
    var cover = $(".portfolio-image-cover.is-loaded img");
    if (cover.length > 0) {
        var stats = $(".portfolio-images-desktop .portfolio-stats");
        stats.css("max-width", cover.width() + "px");
        if (!stats.hasClass("is-loaded")) {
            stats.addClass("is-loaded");
        }
    }
}

function setSliderArrows() {
    if ($(".portfolio-images-desktop").is(":visible")) {
        var blocks = $(".slick-slide.slick-current .slider-block");
        if (blocks.length === 2) {
            var first = blocks.first().find("img, .portfolio-stats");
            var left = ((blocks.first().width() - first.width()) - 30);
            $(".slick-nav-prev").css("left", Math.max(left, -7) + "px");
            var last = blocks.last().find("img, .portfolio-stats");
            var right = ((blocks.last().width() - last.width()) - 30);
            $(".slick-nav-next").css("right", Math.max(right, -7) + "px");

            //var captionWidth = $(blocks).find('.shift-right').text().length;
            //$(".slider-block .shift-right").css("right", captionWidth < 15 ? captionWidth : captionWidth / 4 + "%");
            //$(".slider-block .shift-right").css("margin-right", - (captionWidth / 2) + "px");

        } else if (blocks.length === 1) {
            var only = blocks.find("img, .portfolio-stats");
            var left2 = (((blocks.width() - only.width()) / 2) - 30);
            var right2 = (((blocks.width() - only.width()) / 2) - 30);
            $(".slick-nav-prev").css("left", Math.max(left2, -7) + "px");
            $(".slick-nav-next").css("right", Math.max(right2, -7) + "px");

            //var captionWidth = $(blocks).find('.shift-right').text().length;
            //$(".slider-block .shift-right").css("right", captionWidth < 15 ? captionWidth : captionWidth / 4 + "%");
            //$(".slider-block .shift-right").css("margin-right", -(captionWidth / 2) + "px");
        }
    } else {
        $(".slick-nav-prev, .slick-nav-next, .slider-block .shift-right").removeAttr("style");
    }

}

function addInstagramCount() {

    var items = $('.modelHolder .modelName .instagram');

    items.each(function () {
        var num = $(this).data('count').toString().trim();
        var length = num.length;
        var count = add_commas(num, length).toString();
        console.log('count is: ' + count);
        $(this).find('span').html(count);
    });
}

var resizeImageResultsId;
$(window).resize(function () {
    clearTimeout(resizeImageResultsId);
    resizeImageResultsId = setTimeout(function () {
        if ($(".portfolio-container").is(":visible")) {
            if ($(".portfolio-images-desktop, .portfolio-images-mobile").length > 0) {
                setStatsWidth();
                setSliderArrows();
            }
            if ($(".portfolio-videos-desktop, .portfolio-videos-mobile").length > 0) {
            }
        }
    }, 100);
});
//end new york women image/development results functions
page_results.js