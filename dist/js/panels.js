(function(){

    var Panels = function() {

        // Public methods
        this.show = function(panel) {

            if(typeof panel != 'undefined') {

                this.close_active();

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
            _animation_time = 400,
            _$panels = $('.panels'),
            _$panels_main = _$panels.find(_panel_class_prefix + 'main'),
            _$panels_overlay = _$panels.find(_panel_overlay_class);

        // Private methods
        var _init = function() {

            $(function() {

                _$panels.on('click', '[data-panels-trigger]', function() {
                    var trigger = $(this).attr('data-panels-trigger');
                    _context.show(trigger);
                });

                _$panels.on('click', _panel_overlay_class, function() {
                    _context.close_active();
                });

                // Get animation time value from pseudo element TODO: Move this exclusively to JS
                if(window.getComputedStyle) {
                    var el = _$panels[0],
                        raw_val = window.getComputedStyle(el,':after').getPropertyValue('content');

                    if(raw_val.length > 0) {
                        _animation_time = parseInt(raw_val.match(/\d+/)[0]);
                    }
                }
            });
        };

        _init();
    };

    /* TODO: Check if panels and jQuery exists */
    window.panels = new Panels();

})();
