//tealium universal tag - utag.39 ut4.0.201511121654, Copyright 2015 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"dom.referrer":"referral_bsg","cp.utag_main__sn":"firstimp_bsg","visit_num":"loyalty_bsg","partner_code":"partner_code"};u.extend=[function(a,b){try{if(typeof b['cp.s_vnum_m']!='undefined'){try{b['visit_num']=utag.data["cp.s_vnum_m"].split("=")[1]}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b['partner_code']='timeinccontent193iZxR31'}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"//s.moatads.com/","partner_code":""
};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f]=="qsp_delim"||e[f]=="kvp_delim"||e[f]=="qs_delim"||e[f]=="base_url"||e[f]=="secure_base_url"||e[f]=="partner_code"){u.data[e[f]]=b[d];}else{c.push(e[f]+u.data.kvp_delim+encodeURIComponent(b[d]));}}}}
u.loader({"type":"script","src":u.data.base_url+u.data.partner_code+"/moatcontent.js?"+c.join(u.data.qsp_delim),"cb":u.loader_cb,"loc":"script","id":'utag_39'});}};utag.o[loader].loader.LOAD(id);})("39","timeinc.foodandwine.com");}catch(error){utag.DB(error);}
