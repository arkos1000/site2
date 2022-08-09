// Serch form

let form = document.querySelector(".header__form");
let headerSearch = document.querySelector(".header__search-btn");

headerSearch.addEventListener("click", function () {
  form.classList.add("header__form--active");
});

let exit = document.querySelector(".header__form-close");
exit.addEventListener("click", function () {
  form.classList.remove("header__form--active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Burger Menu

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header_nav");
let menuLinks = menu.querySelectorAll("header__link");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("header_nav--active");
    document.body.classList.toggle("stop-scroll");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header_nav--active");
    body.classList.remove("stop-scroll");
  });
});

// Work Tabs

const tabsBtn = document.querySelectorAll(".work__step-button");
const tabItems = document.querySelectorAll(".work__content");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log("clicked");
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    console.log(tabId);
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function (item) {
      item.classList.remove("work__step-button--active");
    });

    tabItems.forEach(function (item) {
      item.classList.remove("work__content--active");
    });

    currentBtn.classList.add("work__step-button--active");
    currentTab.classList.add("work__content--active");
  });
});

// Hero Swiper

const container = document.querySelector(".hero__container");
const swiper = new Swiper(".hero__swiper", {
  loop: true,
  slidePerView: 1,
  effect: "cube",
  speed: 900,
  pagination: {
    el: ".hero__pagination",
    type: "bullets",
    clickable: true,
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
    paginationBulletMessage: "Перейти к слайду номер {{index}}",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  let acc = new Accordion(".accordion__list", {
    duration: 700,
    elementClass: "accordion__item",
    triggerClass: "accordion__top",
    panelClass: "accordion__bottom",
    showMultiple: false,
  });
});
