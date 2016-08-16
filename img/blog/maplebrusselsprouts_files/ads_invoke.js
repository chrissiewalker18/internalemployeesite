/**
 * @file
 * Javascript for loadind the ads
 * 1. Leaderbboard ad
 */


(function($){
  $(document).ready(function() {
    if ($(".node-type-blog").length > 0) {
      zergnetMobile();
      loadbottomAds();
    }
    if ($(".node-type-blog").length > 0) {
      // do not use this function
    }
    else {
      if ($("#leaderboard_ad_holder")) {
        loadAds();
      }
      loadbottomAds();
    }
  });
}(jQuery));
function zergnetMobile() {
  var detect_device = get_device();
  if (detect_device == 'phone') {
    if (jQuery("#zergnet-widget")) {
      jQuery("#zergnet-widget").hide();
    }  
  }  
}
function loadAds() {
  var detect_device = get_device();
  var leaderboard_holder = jQuery("#leaderboard_ad_holder"); 
  if (detect_device == 'phone') {
    leaderboard_holder.html('<div class="ad ad--mobile-leaderboard" data-js-component="fixToBottom"><div class="advertisement advertisement-mobile-320x50"><div id="ad_mobile_320x50_1"></div></div></div>');
    ad = adFactory.getMultiAd(new Array("320x50", "300x50"));
    ad.setPosition("1");
    ad.write("ad_mobile_320x50_1");
  }
  else if (detect_device == 'tablet') {
    leaderboard_holder.html('<div class="ad ad--leaderboard centered"><div id="adTop"></div></div>');
    ad = adFactory.getMultiAd(new Array("728x90"));
    ad.setPosition("1");
    ad.write("adTop");
  }
  else {
    var isFirefox = navigator.userAgent.match(/Firefox/i) != null;
    if (isFirefox) {
      leaderboard_holder.html(' <div class="ad ad--leaderboard centered"><div class="advertisement advertisement-dummy-ffx-2x9"><div id="ad_dummy_ffx_2x9"></div></div><div id="adTop"></div></div>');
      ad = adFactory.getAd("2", "9");
      ad.setPosition("1");
      ad.write("ad_dummy_ffx_2x9");       
    }
    else {
      leaderboard_holder.html('<div class="ad ad--leaderboard centered"><div id="adTop"></div></div>');
    }
    ad = adFactory.getMultiAd(new Array("728x90", "101x1", "970x90", "970x66", "970x250"));
    ad.setPosition("1");
    ad.write("adTop");
  }

  // Rebinds data-js-components found in leaderboard_holder (fixToBottom) after page load
  // Remove leaderboard_holder from this call if you'd like to search the entire DOM for new data-js-components that have been added via Javascript
  window.componentRegistry.initComponents(leaderboard_holder);
  
}

function loadbottomAds() {
  var detect_device = get_device();
  var gumgum_holder = jQuery("#gumgum_ad_holder"); 
  var teads_holder = jQuery("#teads_ad_holder");  
  // Constructing gumgum ad
  if (detect_device != 'phone') {
    gumgum_holder.html('<div class="ad-bottom advertisement-gumgum-ad"><div id="gumgum_ad_1x6"></div></div>');
        ad = adFactory.getAd("1", "6");
        ad.setPosition("1");
        ad.write("gumgum_ad_1x6");
  }
  // Constructing teads ad
  if (detect_device == 'desktop') {
    teads_holder.html('<div class="ad-bottom advertisement-teads-ad"><div id="teads_ad_5x5"></div></div>');
    ad = adFactory.getAd("5", "5");
    ad.setPosition("1");
    ad.write("teads_ad_5x5");
  }   
  window.componentRegistry.initComponents(gumgum_holder);
  window.componentRegistry.initComponents(teads_holder);
}

function get_device() {
  $detect_device = 'desktop';
  isPhone = navigator.userAgent.match(/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|iPhone|android|iemobile|mobile)/i) != null;
  isTablet = navigator.userAgent.match(/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i) != null;
  if (isTablet) isPhone = false;
  if (isPhone) $detect_device = 'phone';
  if (isTablet) $detect_device = 'tablet';
  return $detect_device;
}
