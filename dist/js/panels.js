(function(){

    var Panels = function() {

        // Public methods
        this.show = function(panel) {
            var $panel = $(_panel_class_prefix + panel);
            this.close_active();
            _$panels.addClass('is_active is_' + panel + '_active');
            _$panels_main.addClass('is_disabled');
            $panel.attr('aria-hidden', 'false');
            _active_panel = panel;
        };

        this.close = function(panel) {
            var $panel = $(_panel_class_prefix + panel);
            _$panels.removeClass('is_active is_' + panel + '_active');
            $panel.attr('aria-hidden', 'true');
            _active_panel = undefined;
        };

        this.close_active = function() {
            _$panels.removeClass('is_active is_' + _active_panel + '_active');
            _$panels_main.removeClass('is_disabled');
        };

        this.toggle = function(panel) {

        };

        // Private properties
        var _context = this,
            _panel_class_prefix = '.panels__',
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

                _$panels.on('click', '.panels__main.is_disabled', function() {
                    _context.close_active();
                });
            });
        };

        _init();
    };

    /* TODO: Check if panels and jQuery exists */
    window.panels = new Panels();

})();
