!function(e){"use strict";e.fn.fusion_scroll_to_anchor_target=function(t){var n,o,i,s,a,r,l,c=e(this).attr("href"),h=c.substr(c.indexOf("#")).slice(1),u=e("#"+h),f=e("html").hasClass("ua-edge")||e("html").hasClass("ua-ie")?"body":"html";if(t=void 0!==t?t:0,u.length&&""!==h){if((u.parents(".hundred-percent-height-scrolling").length||u.find(".hundred-percent-height-scrolling").length)&&(0!=fusionScrollToAnchorVars.container_hundred_percent_height_mobile||!Modernizr.mq("only screen and (max-width: "+fusionScrollToAnchorVars.content_break_point+"px)"))){if((l=u.hasClass("fusion-scroll-section-element")?u:u.parents(".fusion-scroll-section-element")).hasClass("active")&&l.offset().top>=e(window).scrollTop()&&l.offset().top<e(window).scrollTop()+e(window).height())return!1;if(location.hash&&"#_"===location.hash.substring(0,2)&&e(".fusion-page-load-link").addClass("fusion-page.load-scroll-section-link"),u.parents(".fusion-scroll-section").length)return u.parents(".fusion-scroll-section").hasClass("active")?u.parents(".fusion-scroll-section").find(".fusion-scroll-section-nav").find(".fusion-scroll-section-link[data-element="+l.data("element")+"]").trigger("click"):(r=Math.ceil(u.parents(".fusion-scroll-section").offset().top),e(f).animate({scrollTop:r},{duration:400,easing:"easeInExpo",complete:function(){setTimeout(function(){u.parents(".fusion-scroll-section").find(".fusion-scroll-section-nav").find(".fusion-scroll-section-link[data-element="+l.data("element")+"]").trigger("click"),location.hash&&"#_"===location.hash.substring(0,2)&&("history"in window&&"replaceState"in history&&history.replaceState("",window.location.href.replace("#_","#"),window.location.href.replace("#_","#")),e(".fusion-page-load-link").removeClass("fusion-page.load-scroll-section-link"))},parseInt(fusionScrollToAnchorVars.hundred_percent_scroll_sensitivity)+50)}})),!1}return n="function"==typeof getAdminbarHeight?getAdminbarHeight():0,o="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():0,i=e(document).scrollTop(),s=u.offset().top-n-o-t,a=Math.abs(i-s)/2,r=i>s?i-a:i+a,e(f).animate({scrollTop:r},{duration:400,easing:"easeInExpo",complete:function(){n="function"==typeof getAdminbarHeight?getAdminbarHeight():0,o="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():0,s=u.offset().top-n-o-t,e(f).animate({scrollTop:s},450,"easeOutExpo",function(){location.hash&&"#_"===location.hash.substring(0,2)&&"history"in window&&"replaceState"in history&&history.replaceState("",window.location.href.replace("#_","#"),window.location.href.replace("#_","#"))})}}),(u.hasClass("tab-pane")||u.hasClass("tab-link"))&&"function"==typeof e.fn.fusionSwitchTabOnLinkClick&&setTimeout(function(){u.parents(".fusion-tabs").fusionSwitchTabOnLinkClick()},100),!1}}}(jQuery),jQuery(document).ready(function(){jQuery("body").on("click",'.fusion-menu a:not([href="#"], .fusion-megamenu-widgets-container a, .search-link), .fusion-mobile-nav-item a:not([href="#"], .search-link), .fusion-button:not([href="#"], input, button), .fusion-one-page-text-link:not([href="#"]), .fusion-content-boxes .fusion-read-more:not([href="#"])',function(e){var t,n,o,i,s,a,r=jQuery("body").hasClass("fusion-builder-live");if(jQuery(this).hasClass("avada-noscroll")||jQuery(this).parent().hasClass("avada-noscroll")||jQuery(this).is(".fusion-content-box-button, .fusion-tagline-button")&&jQuery(this).parents(".avada-noscroll").length)return!0;if(this.hash){if(a=jQuery(this).attr("target")?jQuery(this).attr("target"):"_self",i=(o=void 0!==(n=(t=jQuery(this).attr("href")).split("#"))[1]?n[1]:"").substring(0,1),"/"!==(s=n[0]).substring(s.length-1,s.length)&&(s+="/"),"!"===i||"/"===i)return;e.preventDefault(),location.pathname.replace(/^\//,"")!=this.pathname.replace(/^\//,"")&&"#"!==t.charAt(0)||""!==location.search&&-1===location.search.indexOf("lang=")&&-1===location.search.indexOf("builder=")&&!jQuery(this).hasClass("tfs-scroll-down-indicator")&&!jQuery(this).hasClass("fusion-same-page-scroll")?r||("/"===s&&""!==location.search&&(s=location.href.replace(location.search,"")),window.open(s+"#_"+o,a)):(jQuery(this).fusion_scroll_to_anchor_target(),"history"in window&&"replaceState"in history&&!r&&history.replaceState("",t,t),jQuery(this).parents(".fusion-flyout-menu").length&&jQuery(".fusion-flyout-menu-toggle").trigger("click"))}})}),location.hash&&"#_"===location.hash.substring(0,2)&&(jQuery(".fusion-page-load-link").attr("href",decodeURIComponent("#"+location.hash.substring(2))),jQuery(window).on("load",function(){jQuery(".fusion-blog-shortcode").length?setTimeout(function(){jQuery(".fusion-page-load-link").fusion_scroll_to_anchor_target()},300):jQuery(".fusion-page-load-link").fusion_scroll_to_anchor_target()}));