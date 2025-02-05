import Swiper from '../vendor/swiper';
import {Navigation} from '../vendor/modules';

// let init = false;
// let swiper;

// export function createSwiper() {
//   if (window.innerWidth < 768) {
//     if (!init) {
//       init = true;
//       swiper = new Swiper('.courses__slider', {
//         modules: [Navigation],
//         loop: true,
//         slidesPerView: 1,
//         allowTouchMove: true,
//         navigation: {
//           nextEl: '.slider-navigation__button--next',
//           prevEl: '.slider-navigation__button--prev',
//         },
//       });
//     }
//   } else if (init) {
//     swiper.destroy();
//     init = false;
//   }
// }
// createSwiper();
// window.addEventListener('resize', createSwiper);

export function createSwiper() {
  // eslint-disable-next-line
  const swiper = new Swiper('.courses__slider', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    grid: {
      rows: 2,
    },
    navigation: {
      nextEl: '.slider-navigation__button--next',
      prevEl: '.slider-navigation__button--prev',
    },

    // breakpoints: {
    //   768: {
    //     slidesPerView: 2,
    //     enabled: false,
    //   },

    //   1440: {
    //     modules: [ Navigation ],
    //     enabled: true,
    //     slidesPerView: 3.58,
    //     slidesPerGroup: 2,
    //     spaceBetween: 30,
    //     loop: true,
    //     allowTouchMove: false,
    //   }
    // }
  });
}
export {Swiper};
