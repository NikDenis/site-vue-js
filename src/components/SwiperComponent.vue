<template>
  <swiper :style="{
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#fff',
  }" :zoom="true" :navigation="false" :pagination="{
  clickable: true,
}" :modules="modules" class="mySwiper">
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/images/project-details/swiper-image.jpg" />
      </div>
    </swiper-slide><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/images/project-details/swiper-image.jpg" />
      </div>
    </swiper-slide><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/images/project-details/swiper-image.jpg" />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>

<style lang="scss" >
@import '@/assets/style/scss/vars.scss';

.swiper {
  width: 100%;
  height: 857px;
  border-radius: 70px;

}

.swiper-wrapper {
  height: 800px;
}

.swiper-slide {
  height: 800px;
  overflow: hidden;
  cursor: grab;
  border-radius: 70px;
}

.swiper-slide:active {
  cursor: grabbing;
}

.swiper-pagination-bullet {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: transparent;
  border: 2px solid #000;
}

.swiper-pagination {
  padding: 12px 0;
  position: static;
}
</style>