let burger = document.querySelector(".burger"),
  menu = document.querySelector(".header-main"),
  back = document.querySelector("body"),
  main = document.querySelector(".main");
(burger.onclick = function () {
  burger.classList.toggle("active"),
    menu.classList.toggle("active"),
    back.classList.toggle("lock");
}),
  (menu.onclick = function () {
    main.classList.remove("active"), back.classList.toggle("lock");
  });
