/* ========================================================================
 * Input Controls
 * Bootstrap: input_controls.js v3.0.2
 * https://github.com/theprogramer/BootstrapInputControls
 * ========================================================================
 *
 * ======================================================================== */
+function($){ "use strict";

    $.fn.disable_cut_copy_paste = function() {
        return this.each( function() {
            var $this = $(this);
            $this.live("cut copy paste",function(e) {
                e.preventDefault();
            })
        });
    }

    // INPUT DATA-CONTROLS
    // ===================

    $(document).live('[data-controls="no-cut"],[data-controls="no-paste"],[data-controls="no-copy"]', function (e) {
	  e.preventDefault()
	  $(this).disable_cut_copy_paste();
	})

}(jQuery);
