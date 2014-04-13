(function ($) {

    $.fn.simplePopup = function (options) {
        return this.each(function () {

                // save this in that for easier syntax
                var that = $(this);
				
				// This is the easiest way to have default options.
                var settings = $.extend({
                    popUpSpeed: 300,
                    popUpPadding: 40,
                    popUpMask: true
                }, options);

                that.on('click', function () {

                    //Getting the variable's value from a link
                    var link = that.attr('href');

                    //Fade in the Popup
                    $(link).fadeIn(
                        settings.popUpSpeed
                    );

                    return false;
                });
				
            }
        );
    };
	
	$.fn.simpleclose = function (options) {
        return this.each(function () {

                // save this in that for easier syntax
                var that = $(this);
				
				// This is the easiest way to have default options.
                var settings = $.extend({
                    popUpSpeed: 300,
                    popUpPadding: 40,
                    popUpMask: true
                }, options);

                that.on('click', function () {

                    //Getting the variable's value from a link
                    var link = that.attr('href');

                    //Fade in the Popup
                    $(link).fadeOut(
                        settings.popUpSpeed
                    );

                    return false;
                });
				
            }
        );
    };
})(jQuery);