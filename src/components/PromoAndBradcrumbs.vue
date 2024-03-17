<template>
  <section class="promo">
    <div class="center">
      <div class="promo__wrapper">
        <div class="promo__banner">
          <div class="promo__text-wrapper">
            <h1 class="promo__title">{{ promoTitle }}</h1>
            <p class="promo__text">{{ promoText }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    promoTitle: String,
    promoText: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/vars.scss';

.promo {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  background: url(@/assets/images/blog/bg-image.jpg) no-repeat center / cover;

  &__wrapper {
    min-height: 356px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  &__banner {
    max-width: 503px;
    width: 100%;
    padding: 41px 78px;
    background-color: #fff;
    border-radius: 37px 37px 0 0;
  }

  &__text-wrapper {
    text-align: center;
  }

  &__title {
    text-transform: capitalize;
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    color: $text-color2;
  }

  &__text {
    letter-spacing: 0.01em;
  }
}
</style>