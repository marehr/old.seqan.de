jQuery.fn.fusionCalculateBlogEqualHeights=function(){var i=0,e=jQuery(this).find(".fusion-post-grid:visible").not(".invisible-after-ajax").length,n={},o=0;0<e&&(i=Math.round(1/(jQuery(this).children(":visible").first()[0].getBoundingClientRect().width/jQuery(this).width()))),jQuery(this).find(".invisible-after-ajax").hide().removeClass("invisible-after-ajax"),jQuery(this).find(".fusion-post-grid:visible").each(function(e){var s=Math.ceil((e+1)/i),t=jQuery(this).outerHeight();(void 0===n[s]||n[s]<t)&&(o+=n[s]<t?t-n[s]:t,n[s]=t)}),1<i&&1<e&&jQuery(this).find(".fusion-post-grid:visible").each(function(e){var n=parseInt(jQuery(this).css("top"),10),s=0;s=1==(e+1)%i?jQuery(this).parent().find(".fusion-post-grid:visible:eq("+(e+i)+")").length?parseInt(jQuery(this).parent().find(".fusion-post-grid:visible:eq("+(e+i)+")").css("top"),10)-n:o-n:parseInt(jQuery(this).parent().find(".fusion-post-grid:visible:eq("+(e-1)+")").css("height"),10),jQuery(this).css("height",s+"px")})},jQuery(document).ready(function(){window.blogEqualHeightsResizeTimer,jQuery(window).on("resize",function(i,e){void 0!==e&&!0!==e||(jQuery(".fusion-blog-equal-heights").each(function(){jQuery(this).find(".fusion-post-grid").css("height","")}),jQuery(".fusion-blog-equal-heights").length&&(clearTimeout(window.blogEqualHeightsResizeTimer),window.blogEqualHeightsResizeTimer=setTimeout(function(){jQuery(".fusion-blog-equal-heights").isotope()},50)))})}),jQuery(window).on("load fusion-element-render-fusion_blog",function(){var i,e;jQuery().isotope&&jQuery(".fusion-blog-layout-grid").each(function(){var i=jQuery(this),e=".fusion-post-grid",n="packery";jQuery(this).hasClass("fusion-blog-layout-masonry")&&(e=".fusion-post-masonry"),jQuery(this).hasClass("fusion-blog-equal-heights")&&(n="fitRows"),jQuery(this).hasClass("fusion-blog-layout-masonry")&&!jQuery(this).hasClass("fusion-blog-layout-masonry-has-vertical")&&0<jQuery(this).find(".fusion-post-masonry:not(.fusion-grid-sizer)").not(".fusion-element-landscape").length&&jQuery(this).addClass("fusion-blog-layout-masonry-has-vertical"),i.data("isotope")&&(i.isotope("destroy"),i.removeData("isotope")),i.isotope({layoutMode:n,itemSelector:e,isOriginLeft:!jQuery("body.rtl").length,resizable:!0,initLayout:!1}),i.on("layoutComplete",function(i){var e=jQuery(i.target);e.hasClass("fusion-blog-equal-heights")&&(e.find(".fusion-post-grid").css("height",""),e.fusionCalculateBlogEqualHeights()),e.css("min-height","")}),i.isotope(),setTimeout(function(){jQuery(window).trigger("resize",[!1])},250)}),i=jQuery(".fusion-blog-layout-timeline").find(".fusion-timeline-date").last().text(),e=!0,jQuery(".fusion-blog-layout-timeline").find(".fusion-timeline-date").click(function(){jQuery(this).next(".fusion-collapse-month").slideToggle()}),jQuery(".fusion-timeline-icon").find(".fusion-icon-bubbles").click(function(){e?(jQuery(this).parent().next(".fusion-blog-layout-timeline").find(".fusion-collapse-month").slideUp(),e=!1):(jQuery(this).parent().next(".fusion-blog-layout-timeline").find(".fusion-collapse-month").slideDown(),e=!0)}),jQuery(".fusion-posts-container-infinite").each(function(){var n,o,s,t=jQuery(this),u=jQuery(this).find(".post");jQuery(this).find(".fusion-blog-layout-timeline").length&&(t=jQuery(this).find(".fusion-blog-layout-timeline")),n="",t.parents(".fusion-blog-shortcode").length&&(n="."+t.parents(".fusion-blog-shortcode").attr("class").replace(/\ /g,".")+" "),jQuery(t).infinitescroll({navSelector:n+".fusion-infinite-scroll-trigger",nextSelector:n+"a.pagination-next",itemSelector:n+"div.pagination .current, "+n+"article.post:not( .fusion-archive-description ), "+n+".fusion-collapse-month, "+n+".fusion-timeline-date",loading:{finishedMsg:fusionBlogVars.infinite_finished_msg,msg:jQuery('<div class="fusion-loading-container fusion-clearfix"><div class="fusion-loading-spinner"><div class="fusion-spinner-1"></div><div class="fusion-spinner-2"></div><div class="fusion-spinner-3"></div></div><div class="fusion-loading-msg">'+fusionBlogVars.infinite_blog_text+"</div>")},maxPage:t.data("pages")?t.data("pages"):void 0,errorCallback:function(){t.find(".fusion-post-grid").css("height",""),jQuery(t).hasClass("isotope")&&jQuery(t).isotope()}},function(n){jQuery(t).hasClass("fusion-blog-layout-timeline")&&(jQuery(n).first(".fusion-timeline-date").text()==i&&jQuery(n).first(".fusion-timeline-date").remove(),i=jQuery(t).find(".fusion-timeline-date").last().text(),jQuery(t).find(".fusion-timeline-date").each(function(){jQuery(this).next(".fusion-collapse-month").append(jQuery(this).nextUntil(".fusion-timeline-date",".fusion-post-timeline"))}),e||setTimeout(function(){jQuery(t).find(".fusion-collapse-month").hide()},200),setTimeout(function(){jQuery(t).find(".fusion-collapse-month").each(function(){jQuery(this).children().length||jQuery(this).remove()})},10),jQuery(t).find(".fusion-timeline-date").unbind("click"),jQuery(t).find(".fusion-timeline-date").click(function(){jQuery(this).next(".fusion-collapse-month").slideToggle()})),fusionInitPostFlexSlider(),jQuery(t).hasClass("fusion-blog-layout-grid")&&jQuery().isotope&&(jQuery(n).hide(),imagesLoaded(n,function(){jQuery(n).fadeIn(),jQuery(t).hasClass("isotope")&&(t.hasClass("fusion-portfolio-equal-heights")&&t.find(".fusion-post-grid").css("height",""),jQuery(t).isotope("appended",jQuery(n))),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")})})),jQuery(n).each(function(){jQuery(this).find(".full-video, .video-shortcode, .wooslider .slide-content").fitVids()}),o=t,jQuery(t).hasClass("fusion-blog-layout-timeline")&&(o=jQuery(t).parents(".fusion-posts-container-infinite")),s=o.find(".current").html(),o.find(".current").remove(),o.data("pages")==s&&(o.parent().find(".fusion-loading-container").hide(),o.parent().find(".fusion-load-more-button").hide()),"individual"!==fusionBlogVars.lightbox_behavior&&u.find(".fusion-post-slideshow").length||(window.avadaLightBox.activate_lightbox(jQuery(n)),u=t.find(".post")),window.avadaLightBox.refresh_lightbox(),setTimeout(function(){jQuery(window).trigger("resize",[!1])},500),jQuery.isFunction(jQuery.fn.initWaypoint)&&jQuery(window).initWaypoint(),"undefined"!=typeof niceScrollReInit&&niceScrollReInit()}),(jQuery(t).hasClass("fusion-blog-archive")&&"load_more_button"===fusionBlogVars.blog_pagination_type||jQuery(t).hasClass("fusion-posts-container-load-more")||jQuery(t).hasClass("fusion-blog-layout-timeline")&&jQuery(t).parent().hasClass("fusion-posts-container-load-more"))&&(jQuery(t).infinitescroll("unbind"),(jQuery(t).hasClass("fusion-blog-archive")?jQuery(t).parent().find(".fusion-load-more-button"):jQuery(t).parents(".fusion-blog-archive").find(".fusion-load-more-button")).on("click",function(i){i.preventDefault(),jQuery(t).infinitescroll("retrieve"),jQuery(t).hasClass("fusion-blog-layout-grid")})),o=t,jQuery(t).hasClass("fusion-blog-layout-timeline")&&jQuery(t).parents(".fusion-blog-layout-timeline-wrapper").length&&(o=jQuery(t).parents(".fusion-posts-container-infinite")),1===parseInt(o.data("pages"),10)&&(o.parent().find(".fusion-loading-container").hide(),o.parent().find(".fusion-load-more-button").hide())})}),jQuery(window).on("fusion-column-resized",function(i,e){var n=jQuery('div[data-cid="'+e+'"]').find(".fusion-blog-layout-grid");n.data("isotope")&&n.isotope("layout")}),jQuery(window).on("fusion-dynamic-content-render",function(i,e){var n=jQuery(e).find(".fusion-blog-shortcode");0<n.length&&n.each(function(){jQuery(this).find(".fusion-blog-layout-grid").isotope()})});