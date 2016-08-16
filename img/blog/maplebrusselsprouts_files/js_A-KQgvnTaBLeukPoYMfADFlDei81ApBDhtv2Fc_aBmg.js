/**
 * @file
 * Javascript for invoking fivestar for a slide.
 */

(function($) {
  $(document).on('recipe::loaded',function() {
    Drupal.attachBehaviors();
  });
}(jQuery));
;
/**
 * @file
 * Javascript for invoking fivestar for a slide.
 */

(function($) {
  $(document).on('recipe::loaded',function(event) {
    slideOmnitureRefresh();
    updateAdFactoryParams();    
		AdsRefresh();
    reloadOutBrainModules();
  });
}(jQuery));

function reloadOutBrainModules() {
	if (typeof(OBR) !== "undefined" && typeof(OBR.extern) !== "undefined" && typeof(OBR.extern.researchWidget) !== "undefined") {
		OBR.extern.researchWidget("http://" + document.location.hostname + document.location.pathname);
	}
}
    
function slideOmnitureRefresh() {
  content_id = jQuery('#omniture_vars').find('.content_id').html();
  published_date = jQuery('#omniture_vars').find('.published_date').html();
  slide_authors = jQuery('#omniture_vars').find('.slide_authors').html();
  slide_terms = jQuery('#omniture_vars').find('.slide_terms').html();
  title = jQuery('.recipe__title').html();  
  title = title.replace(/^\s*|\s*$/g, '');
  pageName = 'fw|recipes|' + title + '-' + slide_authors;
  path = document.location.pathname;
  prop_four = document.location.pathname;
  sub_channel = path.replace(/\//g, '|');
  prop_five = sub_channel.substring(1);  
  page_title = title;
  lastword = page_title.match(/\w+$/)[0];
  if(lastword.toLowerCase() != 'recipe'){     
      page_title = page_title + ' Recipe';
  }
  if(jQuery.trim(slide_authors) != ''){
      document.title = page_title + ' - ' + slide_authors + ' | Food&Wine';      
  }else{
      document.title = page_title + ' | Food&Wine';
  }  

  url = location.protocol+"//"+location.host+location.pathname;
  s_time.url = url;
  s_time.pageName = pageName;
  s_time.campaign = "";
  s_time.eVar1 = "";
  s_time.eVar2 = "";
  s_time.prop4 = prop_four;
  s_time.prop5 = prop_five;
  s_time.prop6 = jQuery.trim(slide_terms);
  s_time.prop7 = jQuery.trim(slide_terms);
  s_time.prop9 = prop_four;
  s_time.prop11 = prop_five;
  s_time.prop13 = jQuery.trim(content_id);
  s_time.eVar14 = "";
  s_time.prop17 = location.href;
  s_time.prop19 = jQuery.trim(slide_authors);
  s_time.prop20 = jQuery.trim(published_date);
  s_time.prop28 = s_time.pageName;

  s_code = s_time.t();
}
//Updating the adFactory values when recipe carousel chagnes
function updateAdFactoryParams() {
  adFactory_theme = jQuery.trim(jQuery('#omniture_vars').find('.adfactory_theme').html()).split(',');
  adFactory_sub = jQuery.trim(jQuery('#omniture_vars').find('.adfactory_sub').html()).split(',');
  adFactory_nid = jQuery.trim(jQuery('#omniture_vars').find('.adfactory_nid').html());  
  adFactory.setParam('theme', adFactory_theme);
  adFactory.setParam('sub', adFactory_sub);
  adFactory.setParam('nid', adFactory_nid);
}
//To refresh the leaderboard Ad when recipe stitching
function AdsRefresh() {
  var tgxAds = !!(typeof Tgx_init != 'undefined');
  if (tgxAds) {
    var adSlots = new Array();    
    //Adding the adslot for desktop & mobile
    if (jQuery('div#adTop').length > 0) {        
      adSlots.push("adTop");
    }
    //Adding the adslot for mobile
    if (jQuery('div#ad_mobile_320x50').length > 0) {        
      adSlots.push("ad_mobile_320x50");
    }    
    adFactory.randomNumber = TiiAdsGetRandomNumber();
    adFactory.refreshAds(adSlots);
  }
}
;
