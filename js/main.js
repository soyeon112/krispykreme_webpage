const menuItemEls = document.querySelectorAll(".main-menu .btn");
const menu__img = document.querySelector(".main-menu .new__img");
const menu__contents = document.querySelectorAll(".main-menu .item__contents");
const menu__item = document.querySelectorAll(".main-menu .item__contents li a");
const menu__bg = document.querySelector("header .menu__bg");
console.log(menuItemEls);
console.log(menu__img);
console.log(menu__contents);
console.log(menu__bg);

menuItemEls.forEach(function (menuItemEl, index) {
  menuItemEl.addEventListener("mouseover", function () {
    menuItemEl.classList.add("hover");
    gsap.to([menu__img, menu__contents, menu__bg], 0.3, {
      opacity: 1,
      display: "block",
    });
  });
  menuItemEl.addEventListener("mouseout", function () {
    menuItemEl.classList.remove("hover");
    gsap.to([menu__img, menu__contents, menu__bg], 0.3, {
      opacity: 0,
      display: "none",
    });
  });
});

menu__item.forEach(function (menu__item, index) {
  menu__item.addEventListener("mouseover", function () {
    gsap.to(menu__item, 0.1, {
      color: "#fff",
      background: "#d31145",
      borderRadius: 5,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
    });
    gsap.to([menu__img, menu__contents, menu__bg], 0.3, {
      opacity: 1,
      display: "block",
    });
  });
  menu__item.addEventListener("mouseout", function () {
    gsap.to(menu__item, 0.1, {
      color: "#000",
      background: "none",
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
    });
    gsap.to([menu__img, menu__contents, menu__bg], 0.3, {
      opacity: 0,
      display: "none",
    });
  });
});

// 배너

// 스와이퍼
const fadeEls = document.querySelectorAll(".banner .fade-in");
new Swiper(".banner .swiper", {
  spaceBetween: 10,
  // loop: true,
  autoplay: true,
  // centeredSlides: true, //true이면 1번 슬라이드가 중앙에 위치함
  pagination: {
    clickable: true,
  },
});

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 0.5, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.7초 마다 실행
    opacity: 1,
  });
});

// 이벤트 슬라이더
new Swiper(".promotion .swiper", {
  slidesPerView: 3, // 슬라이드 몇개 보여줄건지 (한번에 보여줄 슬라이드 개수)
  spaceBetween: 10, //슬라이드 간격(사이 여백)이 10px
  centeredSlides: true, //true이면 1번 슬라이드가 중앙에 위치함
  loop: true,
  // autoplay: {
  //   delay: 5000, //5초
  // },
});

const promotionEl = document.querySelectorAll(".promotion_items");
const promotion_btn = document.querySelectorAll(".promotion .promotion__btn");
const promotion_btn_text = document.querySelectorAll(
  ".promotion__btn .btn__text"
);
console.log(promotion_btn_text);

promotion_btn.forEach(function (pro_btnEl, index) {
  pro_btnEl.addEventListener("mouseover", function () {
    promotion_btn_text[index].classList.add("hover");
    promotionEl[index].classList.add("active");
  });
  pro_btnEl.addEventListener("mouseout", function () {
    promotion_btn_text[index].classList.remove("hover");
    promotionEl[index].classList.remove("active");
  });
});
