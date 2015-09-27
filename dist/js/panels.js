(function(){

    var Panels = function() {

        // Public methods
        this.show = function(panel) {
            if(typeof panel != 'undefined') {
                var $panel = $(_panel_class_prefix + panel);
                this.close_active();
                _$panels.addClass('is_active is_active--' + panel);
                _$panels_main.addClass('is_disabled');
                $panel.attr('aria-hidden', 'false');
                _active_panel = panel;
            }
        };

        this.close = function(panel) {
            if(typeof panel != 'undefined') {
                var $panel = $(_panel_class_prefix + panel);
                _$panels.removeClass('is_active is_active--' + panel);
                _$panels_main.removeClass('is_disabled');
                $panel.attr('aria-hidden', 'true');
                _active_panel = undefined;
            }
        };

        this.close_active = function() {
            this.close(_active_panel);
        };

        // Private properties
        var _context = this,
            _panel_class_prefix = '.panels__panel--',
            _active_panel,
            _$panels = $('.panels'),
            _$panels_main = _$panels.find(_panel_class_prefix + 'main');

        // Private methods
        var _init = function() {

            $(function() {

                _$panels.on('click', '[data-panels-trigger]', function() {
                    var trigger = $(this).attr('data-panels-trigger');
                    _context.show(trigger);
                });

                _$panels.on('click', (_panel_class_prefix + 'main.is_disabled'), function() {
                    _context.close_active();
                });
            });
        };

        _init();
    };

    /* TODO: Check if panels and jQuery exists */
    window.panels = new Panels();

})();
