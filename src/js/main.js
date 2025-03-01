const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  // centeredSlides: true,
  // Navigation Custom
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});

// Function for accordion
function toggleAccordion(event) {
  const question = event.currentTarget;
  const content = question.nextElementSibling;
  const svgIcon = question.querySelector("svg");
  const image = document.getElementById("image-accordion");
  // close other accordion
  document.querySelectorAll(".accordion .content").forEach(item => {
    item.style.maxHeight = null;
    item.previousElementSibling
      .querySelector("svg")
      .classList.remove("rotate-180");
  });
  // toggle current accordion
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    svgIcon.classList.remove("rotate-180");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    svgIcon.classList.add("rotate-180");
  }
  switch (question.id) {
    case "ipad-iphone":
      image.src = "/public/pasangan/ipad-iphone.png";
      break;
    case "ipad-watch":
      image.src = "/public/pasangan/ipad-watch.jpg";
      break;
    case "ipad-mac":
      image.src = "/public/pasangan/ipad-mac.png";
      break;
  }
}
