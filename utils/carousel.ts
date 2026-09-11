import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

// Imported lazily by the carousels: static imports here keep Swiper tree-shaken to the one module we use
const createCarousel = (selector: string, options: SwiperOptions): Swiper =>
    new Swiper(selector, { modules: [Pagination], ...options });

export default createCarousel;
