const carousel = document.querySelector(".carousel");
const temple = document.querySelector("#temple");

// หยุด Animation เมื่อชี้เมาส์
temple.addEventListener("mouseover", () => {
  carousel.style.animationPlayState = "paused";
});

// เล่น Animation ต่อเมื่อเอาเมาส์ออก
temple.addEventListener("mouseout", () => {
  carousel.style.animationPlayState = "running";
});
