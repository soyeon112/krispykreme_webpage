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

// 배너 스와이퍼
new Swiper(".banner .swiper", {
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  pagination: {
    clickable: true,
  },
});
