/*----accordian-plugin----*/
(function($) {
    $.fn.jaccordion = function(options) {
        var settings = $.extend({
            speed: '600',
            effect: 'none',
            active: true,
            activeClass: 'active',
            action: 'click'
        }, options);
        var btnTarget = $(this);
        $(this).each(function(index, element) {
            if ($(this).data("group")) {
                var btnAccGroup = '#' + $(this).data("target");
                $(btnAccGroup).addClass($(this).data("group"));
            }
        });
        var btnTarget = $(this);
        btnTarget.on(settings.action, (function(e) {
            e.preventDefault();
            if (settings.active) {
                if ($(this).hasClass(settings.activeClass)) {
                    $(btnTarget).each(function(index, element) {
                        $(this).removeClass(settings.activeClass);
                    });
                } else {
                    $(btnTarget).each(function(index, element) {
                        $(this).removeClass(settings.activeClass);
                    });
                    $(this).addClass(settings.activeClass);
                }
            }
            var btnAccTarget = '#' + $(this).data("target");
            var group = $(this).data("group");
            if (group) {
                var btnGroup = '.' + group;
                if ($(this).data("group")) {
                    $(btnGroup).not(btnAccTarget).animated({
                        speed: settings.speed,
                        effect: settings.effect,
                        type: "exit"
                    });
                    //animate(btnGroup, settings.speed, settings.effect, "exit");
                }
            }
            if ($(btnAccTarget).css("display") === "block") {
                //$(btnAccTarget).slideUp(settings.speed);
                $(btnAccTarget).animated({
                    speed: settings.speed,
                    effect: settings.effect,
                    type: "exit"
                });
            } else {
                //$(btnAccTarget).slideDown(settings.speed);
                $(btnAccTarget).animated({
                    speed: settings.speed,
                    effect: settings.effect,
                    type: "enter"
                });
            }
        }));
        (function($) {
            $.fn.animated = function(options) {
                var animSettings = $.extend({
                    speed: '300',
                    effect: 'fade',
                    type: 'none'
                }, options);
                if (animSettings.effect.toLowerCase() == "slide") {
                    if (animSettings.type.toLowerCase() == "enter") {
                        $(this).slideDown(animSettings.speed);
                    }
                    if (animSettings.type.toLowerCase() == "exit") {
                        $(this).slideUp(animSettings.speed);
                    }
                }
                if (animSettings.effect.toLowerCase() == "fade") {
                    if (animSettings.type.toLowerCase() == "enter") {
                        $(this).show(animSettings.speed);
                    }
                    if (animSettings.type.toLowerCase() == "exit") {
                        $(this).hide(animSettings.speed);
                    }
                }
                if (animSettings.effect.toLowerCase() == "none") {
                    if (animSettings.type.toLowerCase() == "enter") {
                        $(this).css('display', 'block');
                    }
                    if (animSettings.type.toLowerCase() == "exit") {
                        $(this).css('display', 'none');
                    }
                }
            }
        })(jQuery);
    }
}(jQuery));
