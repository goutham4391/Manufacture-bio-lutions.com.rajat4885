jQuery(document).ready(function() {
    jQuery('#info_popup').show();
    jQuery('body').addClass('no_scroll');

    jQuery('.popup_close, .popup_close_big').click(function() {
    	jQuery("#popupvid").prop('muted', true); //mute
        jQuery('#info_popup').hide();
        jQuery('body').removeClass('no_scroll');
    });
});