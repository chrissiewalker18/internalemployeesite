//tealium universal tag - utag.35 ut4.0.201508141809, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={"view":1,"link":1};u.initialized=false;u.event_lookup={"search_view":"search","category_view":"catview","item_view":"itemview","add_to_cart":"cartadd","custom":"custom"};u.map={"pi_mid2":"acct1","pi_mid":"acct","pi_page_type:item":"item_view","pi_page_type:category":"category_view","pi_page_type:search":"search_view","friendly_url":"item","link_friendly_url":"custom_event.item","pi_category":"category","search_keyword":"search_term","pi_event_name":"custom_event_name","bundle_id":"customer.SubscriberBundleID","has_continuous_service":"customer.ContinuousService","has_donor":"customer.IsDonor","has_print_subscription":"customer.PrintSubscription","is_active_subscriber":"customer.ActiveSubscriber","is_bill_me":"customer.BillMe","is_giftee":"customer.Giftee","is_logged_in":"customer.LoggedIn","is_renewable":"customer.Renewable","login_status":"customer.LoginStatus","tcm_magcode":"customer.magcode","newsletter_email_address":"customer.NewsletterEmail,customer_id","subscriber_expiration_date":"customer.SubExpirationDate","subscriber_id":"customer.SubscriberID","subscriber_type":"customer.SubscriberType","subscription_status":"customer.SubscriberStatus","tier_level":"customer.TierLevel","treat_as_registered":"customer.TreatAsRegistered","tcm_microsite":"customer.MicrositeProductCode","customer_first_name":"customer.CustomerFirstName","customer_email":"customer.CustomerEmail,customer_id","customer_state":"customer.CustomerState","customer_zip":"customer.CustomerZip","customer_country":"customer.CustomerCountryCode"};u.extend=[function(a,b){try{if(b['ut.event']=='link'){try{b['link_friendly_url']=utag.data.friendly_url}catch(e){}}}catch(e){utag.DB(e)}},function(a,b,c,d){try{if((typeof b['event_name']!='undefined'&&b['event_name']!=''&&typeof b['social_network']!='undefined'&&b['social_network']!='')){c=[b['event_name'],b['social_network']];b['event_name']=c.join('_')}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){d=b['event_name'];if(typeof d=='undefined')return;c=[{'social_share_facebook':'FacebookShare'},{'social_share_twitter':'TwitterShare'},{'social_share_pinterest':'PinterestShare'},{'social_share_google':'GooglePlusShare'},{'social_share_linkedin':'LinkedinShare'},{'email_share':'EmailShare'},{'video_start':'VideoPlay'},{'user_register':'Registration'},{'comment_submit':'Commented'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['pi_event_name']=c[e][f];m=true};};if(m)break};if(!m)b['pi_event_name']='';},function(a,b){try{if(1){b['pi_mid']='7209235'}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){d=b['dom.domain'];if(typeof d=='undefined')return;c=[{'allyou.com':'7213751'},{'coastalliving.com':'7213752'},{'cookinglight.com':'7213753'},{'ew.com':'7213755'},{'essence.com':'7213756'},{'foodandwine.com':'7213757'},{'fortune.com':'7213333'},{'golf.com':'7213758'},{'health.com':'7213759'},{'instyle.com':'7213760'},{'myhomeideas.com':'7213754'},{'myrecipes.com':'7213763'},{'people.com':'7213764'},{'peoplestylewatch.com':'7213765'},{'realsimple.com':'7213768'},{'southernliving.com':'7213762'},{'si.com':'7213770'},{'sunset.com':'7213332'},{'thisoldhouse.com':'7213772'},{'time.com':'7213773'},{'travelandleisure.com':'7213769'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d.toString().indexOf(f)>-1){b['pi_mid2']=c[e][f];m=true};};if(m)break};if(!m)b['pi_mid2']='7209235';},function(a,b){try{if((typeof b['pi_mid2']!='undefined'&&b['pi_mid2']!=''&&b['pi_mid2']!='7209235')){try{b['pi_mid']=[b.pi_mid,b.pi_mid2]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(b['template_type'].toString().indexOf('home')>-1||b['dom.pathname']=='/'){b['pi_page_type']='home'}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['search_keyword']!='undefined'&&b['search_keyword']!=''||(typeof b['template_type']!='undefined'&&b['template_type']!=''&&b['template_type'].toString().indexOf('search')>-1)){b['pi_page_type']='search'}}catch(e){utag.DB(e)}},function(a,b){try{if((b['template_type']=='section front'&&typeof b['pi_page_type']=='undefined')||b['template_type']=='franchise'||b['template_type'].toString().indexOf('channel')>-1||b['template_type']=='insiderguide'||b['template_type']=='business_listing_landing_page'||/^index/.test(b['template_type'])||b['template_type']=='package'||b['template_type']=='topic front'||(b['template_type']=='blog'&&typeof b['content_id']=='undefined')||b['template_type']=='video_landing_page'){b['pi_page_type']='category'}}catch(e){utag.DB(e)}},function(a,b){try{if(b['template_type']=='generic-page'||b['template_type']=='recipe_landing_page'||b['template_type']=='blog_subcategory'||b['template_type']=='blog_landing_page'){b['pi_page_type']='category'}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['content_id']!='undefined'&&b['content_id']!=''&&typeof b['pi_page_type']=='undefined')){b['pi_page_type']='item'}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['site_section1']!='undefined'&&b['site_section1']!=''){b['pi_category']=b['site_section1']}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['site_section2']!='undefined'&&b['site_section2']!=''&&b['site_section2']!='main')){b['pi_category']=b['site_section2']}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['site_section3']!='undefined'&&b['site_section3']!=''&&b['site_section3']!='main')){b['pi_category']=b['site_section3']}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['site_section4']!='undefined'&&b['site_section4']!=''&&b['site_section4']!='main')){b['pi_category']=b['site_section4']}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"src":"","base_url":".collect.igodigital.com/collect.js","acct1":"","acct":"","search_term":"","category":"","item":"","custom_event_name":"","custom_event_details":{},"order_id":"","order_shipping":"","customer_id":"","product_id":[],"product_category":[],"product_quantity":[],"product_unit_price":[],"order_discount":"","customer_details":{}};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("customer.")===0){u.data.customer_details[e[f].substr(9)]=b[d];}else if(e[f].indexOf("custom_event.")===0){u.data.custom_event_details[e[f].substr(13)]=b[d];}else{u.data[e[f]]=b[d];}}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){g=""+u.event_lookup[u.map[d]];if(g!==""){b._cevent=g;}}}}
u.data.order_id=u.data.order_id||b._corder||"";u.data.order_shipping=u.data.order_shipping||b._cship||"";u.data.customer_id=u.data.customer_id||b._ccustid||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
u.loader_cb=function(){u.initialized=true;if(!u.data.acct)u.data.acct=u.data.acct1;_etmc.push(["setOrgId",u.data.acct]);if(u.data.customer_id){var user_info={};user_info.email=u.data.customer_id;user_info.details=u.data.customer_details;_etmc.push(["setUserInfo",user_info]);}
if(u.data.order_id){b._cevent="purchase";var order_details={};var items=[];for(i=0;i<u.data.product_id.length;i++){var item={};item.item=u.data.product_id[i];item.quantity=u.data.product_quantity[i];item.price=u.data.product_unit_price[i];items.push(item);}
order_details.cart=items;order_details.order_number=u.data.order_id;if(u.data.order_discount){order_details.discount=u.data.order_discount;}
if(u.data.order_shipping){order_details.shipping=u.data.order_shipping;}
_etmc.push(["trackConversion",order_details]);}else if(b._cevent==="search"){_etmc.push(["trackPageView",{"search":u.data.search_term}]);}else if(b._cevent==="catview"){_etmc.push(["trackPageView",{"category":u.data.category}]);}else if(b._cevent==="itemview"){_etmc.push(["trackPageView",{"item":u.data.item}]);}else if(b._cevent==="cartadd"){var items=[];for(i=0;i<u.data.product_id.length;i++){var item={};item.item=u.data.product_id[i];item.quantity=u.data.product_quantity[i];item.price=u.data.product_unit_price[i];items.push(item);}
_etmc.push(["trackCart",{"cart":items}]);}else if(b._cevent==="custom"||u.data.custom_event_name){var evt={};evt.name=u.data.custom_event_name;evt.details=u.data.custom_event_details;_etmc.push(["trackEvent",evt]);}else{_etmc.push(["trackPageView"]);}};if(!u.initialized){u.data.src="//"+u.data.acct1+u.data.base_url;u.loader({"type":"script","src":u.data.src,"cb":u.loader_cb,"loc":"script","id":"utag_35"});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);}("35","timeinc.foodandwine.com"));}catch(error){utag.DB(error);}
