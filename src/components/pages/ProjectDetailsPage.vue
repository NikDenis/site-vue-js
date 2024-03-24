<template>
  <PageHeader />
  <div class="promo"></div>

  <main>
    <section class="project-details">
      <div class="center">
        <div class="project-details__description-wrapper">
          <div class="project-details__description">
            <h1 class="project-details__title">Minimal look bedrooms</h1>
            <p class="project-details__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae
              turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida
              dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus
              bibendum commodo.</p>
            <p class="project-details__text">In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus
              lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim,
              gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd
              porta. Proin tincidunt ligula id purus porttitor.</p>
          </div>
        </div>
        <div class="project-details__swiper-wrapper">

          <SwiperComponent />

        </div>
      </div>
    </section>
  </main>
  <PageFooter />
</template>

<script>
import PageFooter from '../PageFooter.vue';
import PageHeader from '../PageHeader.vue';
import SwiperComponent from '../SwiperComponent.vue';

export default {
  components: { SwiperComponent, PageHeader, PageFooter }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/vars.scss';

.promo {
  min-height: 351px;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto 200px;
  background: url(@/assets/images/project-details/bg-image-promo.jpg) no-repeat center / cover;
}

.project-details {
  padding: 200px 0;

  &__description-wrapper {
    margin-bottom: 100px;
  }

  &__description {
    max-width: 660px;
    width: 100%;
    margin: 0 auto;
  }

  &__title {
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: $text-color2;
    margin-bottom: 11px;
  }

  &__text {
    letter-spacing: 0.01em;
  }

  &__swiper-wrapper {
    height: 857px;

  }
}
</style>