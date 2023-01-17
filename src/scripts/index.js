// accordion

new Accordion('.accordion-container');

const swiperAboutUs = new Swiper('.about-us__swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  slideClass: 'swiper-slide',
  slidesPercolumn: 1,
  autoplay: {
    delay: 6000,
  }
})