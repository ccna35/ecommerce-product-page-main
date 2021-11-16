const thumbnails = document.querySelectorAll(".thumbnail");
const bigImages = document.querySelectorAll(".big-img");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
    });
    thumbnail.classList.add("active");
    bigImages.forEach((bigImage) => {
      bigImage.classList.remove("show");
      if (thumbnail.dataset.img === bigImage.dataset.img) {
        bigImage.classList.add("show");
      }
    });
  });
});

// Items plus & minus

const add2cart = document.querySelector("#add2cart");
const add = document.querySelector("#plus");
const subtract = document.querySelector("#minus");
const itemsCount = document.querySelector("#items-count");
const cartItems = document.querySelector(".cart span");

let count = 0;

add.addEventListener("click", () => {
  count += 1;
  itemsCount.innerHTML = count;
});

subtract.addEventListener("click", () => {
  if (count != 0) {
    count -= 1;
  }
  itemsCount.innerHTML = count;
});

add2cart.addEventListener("click", () => {
  cartItems.innerHTML = count;
});

// Upper Cart

const cart = document.querySelector(".cart");
const cartBox = document.querySelector(".cart-box");

cart.addEventListener("click", () => {
  cartBox.classList.toggle("showCartBox");
});

// Mobile Slider

const leftArrow = document.querySelector(".arrows img:first-child");
const rightArrow = document.querySelector(".arrows img:last-child");

let i = 0;

rightArrow.addEventListener("click", () => {
  bigImages.forEach((img) => {
    img.classList.remove("show");
  });
  if (i == bigImages.length - 1) {
    i = 0;
    bigImages[i].classList.add("show");
  } else {
    i += 1;
    bigImages[i].classList.add("show");
  }
});

leftArrow.addEventListener("click", () => {
  bigImages.forEach((img) => {
    img.classList.remove("show");
  });
  if (i == 0) {
    i = bigImages.length - 1;
    bigImages[i].classList.add("show");
  } else {
    i -= 1;
    bigImages[i].classList.add("show");
  }
});

// Mobile Menu

const burgerIcon = document.querySelector(".burger-menu");
const closeIcon = document.querySelector(".close");
const modal = document.querySelector(".modal-container");

burgerIcon.addEventListener("click", () => {
  modal.classList.add("toggleModal");
});

closeIcon.addEventListener("click", () => {
  modal.classList.remove("toggleModal");
});
