(function() {
    var $ = jQuery;

    var TRANSFORM_TYPES = ['PUT', 'POST', 'DELETE'];

    $.activeTransforms = 0;

    $(document).ajaxSend(function(e, xhr, settings) {
        if (TRANSFORM_TYPES.indexOf(settings.type) < 0) return;
        return $.activeTransforms += 1;
    });

    $(document).ajaxComplete(function(e, xhr, settings) {
        if (TRANSFORM_TYPES.indexOf(settings.type) < 0) return;
        return $.activeTransforms -= 1;
    });

    window.onbeforeunload || (window.onbeforeunload = function() {
        if ($.activeTransforms) {
            return 'There are some pending network requests which\n' +
                'means closing the page may lose unsaved data.';
        }
    });
}).call(this);
