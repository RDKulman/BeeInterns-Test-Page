"use strict";var header=document.querySelector(".header");header.addEventListener("click",(function(e){var t=e.target.closest(".header__sidebar-btn")||e.target.closest(".header__user-profile-btn");if(t){var a,r,s=1,i="";t.classList.contains("header__sidebar-btn")?(a=document.querySelector(".sidebar"),r=document.querySelector(".toolbar"),s=-1,i="header__sidebar-btn--active"):(a=document.querySelector(".toolbar"),r=document.querySelector(".sidebar"),i="header__user-profile-btn--active"),r.hasAttribute("data-open")||(a.hasAttribute("data-open")?(a.style.transform="translateX(".concat(100*s,"%)"),a.removeAttribute("data-open"),t.classList.remove(i)):(a.style.transform="translateX(0)",a.setAttribute("data-open",!0),t.classList.add(i)))}}));var navBarLinksList=document.querySelector(".navbar__list"),previousUlHeight=0;navBarLinksList.addEventListener("click",(function(e){if("SPAN"===e.target.nodeName){var t=e.target,a=t.nextElementSibling;a.hasAttribute("data-open")?(a.classList.remove("navbar__list-inner--active"),a.removeAttribute("data-open"),t.classList.remove("navigation-link--nest-lvl-1--active")):(a.classList.add("navbar__list-inner--active"),a.setAttribute("data-open","true"),t.classList.add("navigation-link--nest-lvl-1--active"))}}));