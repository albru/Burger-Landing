"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){var a={sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:!0,updateURL:!1,keyboard:!0,beforeMove:null,afterMove:null,loop:!0,responsiveFallback:!1,direction:"vertical"};e.fn.swipeEvents=function(){return this.each(function(){var a,i,n=e(this);n.bind("touchstart",function(e){var o=e.originalEvent.touches;o&&o.length&&(a=o[0].pageX,i=o[0].pageY,n.bind("touchmove",t))});function t(e){var o=e.originalEvent.touches;if(o&&o.length){var s=a-o[0].pageX,d=i-o[0].pageY;s>=50&&n.trigger("swipeLeft"),s<=-50&&n.trigger("swipeRight"),d>=50&&n.trigger("swipeUp"),d<=-50&&n.trigger("swipeDown"),(Math.abs(s)>=50||Math.abs(d)>=50)&&n.unbind("touchmove",t)}}})},e.fn.onepage_scroll=function(i){var n=e.extend({},a,i),t=e(this),o=e(n.sectionContainer),s=o.length,d=0,r=0,l=0,c=500,p="";e.fn.transformPage=function(a,i,n){if("function"==typeof a.beforeMove&&a.beforeMove(n),e("html").hasClass("ie8"))if("horizontal"==a.direction){var o=t.width()/100*i;e(this).animate({left:o+"px"},a.animationTime)}else{o=t.height()/100*i;e(this).animate({top:o+"px"},a.animationTime)}else e(this).css({"-webkit-transform":"horizontal"==a.direction?"translate3d("+i+"%, 0, 0)":"translate3d(0, "+i+"%, 0)","-webkit-transition":"all "+a.animationTime+"ms "+a.easing,"-moz-transform":"horizontal"==a.direction?"translate3d("+i+"%, 0, 0)":"translate3d(0, "+i+"%, 0)","-moz-transition":"all "+a.animationTime+"ms "+a.easing,"-ms-transform":"horizontal"==a.direction?"translate3d("+i+"%, 0, 0)":"translate3d(0, "+i+"%, 0)","-ms-transition":"all "+a.animationTime+"ms "+a.easing,transform:"horizontal"==a.direction?"translate3d("+i+"%, 0, 0)":"translate3d(0, "+i+"%, 0)",transition:"all "+a.animationTime+"ms "+a.easing});e(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(e){"function"==typeof a.afterMove&&a.afterMove(n)})},e.fn.moveDown=function(){var a=e(this),i=e(n.sectionContainer+".active").data("index"),t=e(n.sectionContainer+"[data-index='"+i+"']"),o=e(n.sectionContainer+"[data-index='"+(i+1)+"']");if(o.length<1){if(1!=n.loop)return;s=0,o=e(n.sectionContainer+"[data-index='1']")}else var s=100*i*-1;if("function"==typeof n.beforeMove&&n.beforeMove(o.data("index")),t.removeClass("active"),o.addClass("active"),1==n.pagination&&(e(".onepage-pagination li a[data-index='"+i+"']").removeClass("active"),e(".onepage-pagination li a[data-index='"+o.data("index")+"']").addClass("active")),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+o.data("index")),history.replaceState&&1==n.updateURL){var d=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(i+1);history.pushState({},document.title,d)}a.transformPage(n,s,o.data("index"))},e.fn.moveUp=function(){var a=e(this),i=e(n.sectionContainer+".active").data("index"),t=e(n.sectionContainer+"[data-index='"+i+"']"),o=e(n.sectionContainer+"[data-index='"+(i-1)+"']");if(o.length<1){if(1!=n.loop)return;var d=100*(s-1)*-1;o=e(n.sectionContainer+"[data-index='"+s+"']")}else d=100*(o.data("index")-1)*-1;if("function"==typeof n.beforeMove&&n.beforeMove(o.data("index")),t.removeClass("active"),o.addClass("active"),1==n.pagination&&(e(".onepage-pagination li a[data-index='"+i+"']").removeClass("active"),e(".onepage-pagination li a[data-index='"+o.data("index")+"']").addClass("active")),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+o.data("index")),history.replaceState&&1==n.updateURL){var r=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(i-1);history.pushState({},document.title,r)}a.transformPage(n,d,o.data("index"))},e.fn.moveTo=function(a){var i=e(n.sectionContainer+".active"),o=e(n.sectionContainer+"[data-index='"+a+"']");if(o.length>0){"function"==typeof n.beforeMove&&n.beforeMove(o.data("index")),i.removeClass("active"),o.addClass("active"),e(".onepage-pagination li a.active").removeClass("active"),e(".onepage-pagination li a[data-index='"+a+"']").addClass("active"),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+o.data("index"));var s=100*(a-1)*-1;if(history.replaceState&&1==n.updateURL){var d=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(a-1);history.pushState({},document.title,d)}t.transformPage(n,s,a)}};function v(){var a=!1,i=_typeof(n.responsiveFallback);if("number"==i&&(a=e(window).width()<n.responsiveFallback),"boolean"==i&&(a=n.responsiveFallback),"function"==i){var o=n.responsiveFallback();"number"==(void 0===(a=o)?"undefined":_typeof(a))&&(a=e(window).width()<o)}a?(e("body").addClass("disabled-onepage-scroll"),e(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll"),t.swipeEvents().unbind("swipeDown swipeUp")):(e("body").hasClass("disabled-onepage-scroll")&&(e("body").removeClass("disabled-onepage-scroll"),e("html, body, .wrapper").animate({scrollTop:0},"fast")),t.swipeEvents().bind("swipeDown",function(a){e("body").hasClass("disabled-onepage-scroll")||a.preventDefault(),t.moveUp()}).bind("swipeUp",function(a){e("body").hasClass("disabled-onepage-scroll")||a.preventDefault(),t.moveDown()}),e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(e){e.preventDefault();g(e,e.originalEvent.wheelDelta||-e.originalEvent.detail)}))}function g(e,a){var i=a,o=(new Date).getTime();o-l<c+n.animationTime?e.preventDefault():(i<0?t.moveDown():t.moveUp(),l=o)}if(t.addClass("onepage-wrapper").css("position","relative"),e.each(o,function(a){e(this).css({position:"absolute",top:d+"%"}).addClass("section").attr("data-index",a+1),e(this).css({position:"absolute",left:"horizontal"==n.direction?r+"%":0,top:"vertical"==n.direction||"horizontal"!=n.direction?d+"%":0}),"horizontal"==n.direction?r+=100:d+=100,1==n.pagination&&(p+="<li><a data-index='"+(a+1)+"' href='#"+(a+1)+"'></a></li>")}),t.swipeEvents().bind("swipeDown",function(a){e("body").hasClass("disabled-onepage-scroll")||a.preventDefault(),t.moveUp()}).bind("swipeUp",function(a){e("body").hasClass("disabled-onepage-scroll")||a.preventDefault(),t.moveDown()}),1==n.pagination){if(e("ul.onepage-pagination").length<1&&e("<ul class='onepage-pagination'></ul>").prependTo("body"),"horizontal"==n.direction){var f=t.find(".onepage-pagination").width()/2*-1;t.find(".onepage-pagination").css("margin-left",f)}else{var u=t.find(".onepage-pagination").height()/2*-1;t.find(".onepage-pagination").css("margin-top",u)}e("ul.onepage-pagination").html(p)}if(""!=window.location.hash&&"#1"!=window.location.hash){var b=window.location.hash.replace("#","");if(parseInt(b)<=s&&parseInt(b)>0){e(n.sectionContainer+"[data-index='"+b+"']").addClass("active"),e("body").addClass("viewing-page-"+b),1==n.pagination&&e(".onepage-pagination li a[data-index='"+b+"']").addClass("active");var m=e(n.sectionContainer+"[data-index='"+b+"']");if(m&&(m.addClass("active"),1==n.pagination&&e(".onepage-pagination li a[data-index='"+b+"']").addClass("active"),e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,""),e("body").addClass("viewing-page-"+m.data("index")),history.replaceState&&1==n.updateURL)){var h=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+b;history.pushState({},document.title,h)}var w=100*(b-1)*-1;t.transformPage(n,w,b)}else e(n.sectionContainer+"[data-index='1']").addClass("active"),e("body").addClass("viewing-page-1"),1==n.pagination&&e(".onepage-pagination li a[data-index='1']").addClass("active")}else e(n.sectionContainer+"[data-index='1']").addClass("active"),e("body").addClass("viewing-page-1"),1==n.pagination&&e(".onepage-pagination li a[data-index='1']").addClass("active");return 1==n.pagination&&e(".onepage-pagination li a").click(function(){var a=e(this).data("index");t.moveTo(a)}),e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(a){a.preventDefault();var i=a.originalEvent.wheelDelta||-a.originalEvent.detail;e("body").hasClass("disabled-onepage-scroll")||g(a,i)}),0!=n.responsiveFallback&&(e(window).resize(function(){v()}),v()),1==n.keyboard&&e(document).keydown(function(a){var i=a.target.tagName.toLowerCase();if(!e("body").hasClass("disabled-onepage-scroll"))switch(a.which){case 38:"input"!=i&&"textarea"!=i&&t.moveUp();break;case 40:case 32:"input"!=i&&"textarea"!=i&&t.moveDown();break;case 33:"input"!=i&&"textarea"!=i&&t.moveUp();break;case 34:"input"!=i&&"textarea"!=i&&t.moveDown();break;case 36:t.moveTo(1);break;case 35:t.moveTo(s);break;default:return}}),!1}}(window.jQuery);