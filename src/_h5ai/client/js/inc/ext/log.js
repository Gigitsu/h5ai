modulejs.define('ext/log', ['_', '$', 'marked', 'prism', 'core/settings', 'core/resource', 'ext/preview-txt'], function (_, $, marked, prism, allsettings, resource, previewtxt) {

    var settings = _.extend({
        enabled: false,
        packageName: 'package'
    }, allsettings.log);
    var logsBtnTemplate =
        '<div id="log" class="tool">' +
        '<img src="' + resource.image('log') + '" alt="log"/>' +
        '</div>';

    function init() {

        if (!settings.enabled || settings.files.length === 0) {
            return;
        }

        $(logsBtnTemplate).append(
            $('<ul>').append(
                $.map(settings.files, function(value, index){
                    return $('<li>').append(
                            $('<a>').attr('href', value).
                                append(value.substring(value.lastIndexOf('/')+1)).
                                on('click', function(event){
                                    event.preventDefault();

                                    previewtxt.enter(_.map(settings.files, function(file) {
                                        return {
                                            type: "txt-log",
                                            absHref: file,
                                            label: file.substring(file.lastIndexOf('/')+1)
                                        };
                                    }), index);
                                })
                    );
                })
            )
        ).appendTo('#toolbar');
    }

    init();
});
