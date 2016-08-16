/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function($) {
    //Making Pop-up window for social share buttons
    Drupal.behaviors.socialSharePopup = {
        attach: function(context, settings) {
            $('a#social-share-button').click(function(e) {
                //Adding Omniture tracking for social sharing links
                var social_share_icon = $(this).siblings('div.social-share__item__count').attr('data-service-count-target');
                switch(social_share_icon) {
                    case 'p' : omniTrackEv('sharebar|pinterest'); break;
                    case 'f' : omniTrackEv('sharebar|facebook'); break;
                    case 't' : omniTrackEv('sharebar|twitter'); break;                               
                }                
                var url = $(this).attr('href');
                popupWindow = window.open(url,
                        'popUpWindow',
                        'height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
                return false;

            });
        }
    }
})(jQuery);
