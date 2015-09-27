(function(){

    var Panels = function() {

        // Public methods
        this.show = function(panel) {

            if(typeof panel != 'undefined') {

                this.close();

                var $panel = $(_panel_class_prefix + panel);
                $panel.attr('aria-hidden', 'false');
                _$panels.addClass('is_active is_active--' + panel);
                _$panels_main.attr('aria-disabled', 'true');
                _active_panel = panel;
            }
        };

        this.close = function() {

            if(typeof _active_panel != 'undefined') {

                var $panel = $(_panel_class_prefix + _active_panel);
                $panel.attr('aria-hidden', 'true');
                _$panels.removeClass('is_active is_active--' + _active_panel);
                _$panels_main.attr('aria-disabled', 'false');
                _active_panel = undefined;
            }
        };

        // Private properties
        var _context = this,
            _panel_class_prefix = '.panels__panel--',
            _panel_overlay_class = '.panels__overlay',
            _active_panel = undefined,
            _$panels = $('.panels'),
            _$panels_main = _$panels.find(_panel_class_prefix + 'main');

        // Private methods
        var _init = function() {

            $(function() {

                _$panels.on('click', '[data-panels-trigger]', function() {
                    var trigger = $(this).attr('data-panels-trigger');
                    _context.show(trigger);
                });

                _$panels.on('click', _panel_overlay_class, function() {
                    _context.close();
                });
            });
        };

        _init();
    };

    /* TODO: Check if panels and jQuery exists */
    window.panels = new Panels();

})();
