!function(){var e,t,o,c,n;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),c=function(){var o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",c),o.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(o){o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),$(".slideshow").slick({draggable:!0,touchMove:!0,fade:!0,cssEase:"linear",arrows:!1,dots:!0,dotsClass:"slick-dots"}),$(".gallery__slider").slick({touchMove:!0,arrows:!1,dots:!1,dotsClass:"slick-dots",fade:!0,cssEase:"linear",autoplay:!0,autoplaySpeed:3e3}),"function"!=typeof(n=window.Element.prototype).matches&&(n.matches=n.msMatchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),c=0;o[c]&&o[c]!==t;)++c;return Boolean(o[c])}),"function"!=typeof n.closest&&(n.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}));var a=document.querySelector("#buynow");a.addEventListener("click",(function(){a.disabled=!0}));var d=document.querySelector("#read-more");d.addEventListener("click",(function(){d.disabled=!0}));var r=document.querySelector("#product");r.addEventListener("click",(function(){r.disabled=!0}));var s=document.querySelector("#locations");s.addEventListener("click",(function(){s.disabled=!0}));var i=document.querySelector("#how_its_made");i.addEventListener("click",(function(){i.disabled=!0}));var l=document.querySelector("#franchise");l.addEventListener("click",(function(){l.disabled=!0}))}();
//# sourceMappingURL=index.14f3711b.js.map