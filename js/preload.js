(function($) {

    var imgList = [];

    $.extend({

        preload: function(imgArr, option) {

            var setting = $.extend({

                init: function(loaded, total) {},

                loaded: function(img, loaded, total) {},

                loaded_all: function(loaded, total) {}

            }, option);

            var total = imgArr.length;

            var loaded = 0;

            setting.init(0, total);

            for(var i in imgArr) {

                imgList.push($("<img />")

                    .attr("src", imgArr[i])

                    .on('load', function(){

                        loaded++;

                        setting.loaded(this, loaded, total);

                        if(loaded == total) {

                            setting.loaded_all(loaded, total);

                        }

                    })

                );

            }

        }

    });

    $.preload(
        [
            "img/logo.png",
            "img/mountain.jpg",
            "img/about/placeholder.jpg",
            "img/contact/success.jpg",
            "img/contact/loading.gif",
            "img/modal/desktop.jpg",
            "img/modal/ipad.jpg",
            "img/modal/screens/ask_xmas/christmas_menu_full_0.jpg",
            "img/modal/screens/ask_xmas/christmas_menu_full_1.jpg",
            "img/modal/screens/ask_xmas/christmas_menu_full_2.jpg",
            "img/modal/screens/easy_view/easy_view_0.jpg",
            "img/modal/screens/esp/ow_twenty_0.jpg",
            "img/modal/screens/iws/iws_full_0.jpg",
            "img/modal/screens/iws/iws_full_1.jpg",
            "img/modal/screens/iws/iws_full_2.jpg",
            "img/modal/screens/iws/iws_full_3.jpg",
            "img/modal/screens/iws/iws_full_4.jpg",
            "img/modal/screens/iws/iws_full_5.jpg",
            "img/modal/screens/light_duty/ld_0.jpg",
            "img/modal/screens/light_duty/ld_1.jpg",
            "img/modal/screens/light_duty/ld_2.jpg",
            "img/modal/screens/light_duty/ld_3.jpg",
            "img/modal/screens/light_duty/ld_4.jpg",
            "img/modal/screens/light_duty/ld_5.jpg",
            "img/modal/screens/meg/engine_guarantee_full_0.jpg",
            "img/modal/screens/meg/engine_guarantee_full_1.jpg",
            "img/modal/screens/meg/engine_guarantee_full_2.jpg",
            "img/modal/screens/meg/engine_guarantee_full_3.jpg",
            "img/modal/screens/meg/engine_guarantee_full_4.jpg",
            "img/modal/screens/meg/engine_guarantee_full_5.jpg",
            "img/modal/screens/mpa/mpa_full_0.jpg",
            "img/modal/screens/mpa/mpa_full_1.jpg",
            "img/modal/screens/mpa/mpa_full_2.jpg",
            "img/modal/screens/mpa/mpa_full_3.jpg",
            "img/modal/screens/smart_hub/smart_hub_0.jpg",
            "img/modal/screens/smart_hub/smart_hub_1.jpg",
            "img/modal/screens/smart_hub/smart_hub_2.jpg",
            "img/modal/screens/smart_hub/smart_hub_3.jpg",
            "img/modal/screens/smart_hub/smart_hub_4.jpg",
            "img/modal/screens/the_frame/the_frame_full_0.jpg"

        ], 
        {
        init: function(loaded, total) {
            console.log("Loading "+loaded+" of "+total+" images");
        },
        loaded: function(img, loaded, total) {
            console.log("Loading "+loaded+" of "+total+" images");
        },

        loaded_all: function(loaded, total) {

            // min load time is 2 seconds
            setTimeout(function(){
              
                $(".preloader").addClass("preloader--hidden").delay(300).queue(function(){

                    $(this).hide().parent().removeClass("noScrolling");

                });

            }, 2000);

        }

    });

})(jQuery);