Swal.fire({
  title: "This website collects cookies to deliver better user experience",

  showClass: {
    popup: "animate__animated animate__fadeInDown ",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp ",
  },
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
