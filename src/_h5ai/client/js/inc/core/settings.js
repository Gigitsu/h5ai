modulejs.define('core/settings', ['config', '_'], function (config, _) {

    //config.options.log.files = config.setup.LOG_FILES;

    return _.extend({}, config.options, {
        appHref: config.setup.APP_HREF,
        rootHref: config.setup.ROOT_HREF,
        currentHref: config.setup.CURRENT_HREF,
        currentDomain: config.setup.CURRENT_DOMAIN,

        log:_.extend({}, config.options.log, {
            files:config.setup.LOG_FILES
        })
    });
});
