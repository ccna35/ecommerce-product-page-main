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

document.body.addEventListener("click", (e) => {
  //   if (
  //     e.target.classList.value !== "cart-box" ||
  //     e.target.classList.value !== "cart"
  //   ) {
  //     console.log("yes");
  //     cartBox.classList.remove("showCartBox");
  //   }
  //   console.log(e.target.classList.value);
});
