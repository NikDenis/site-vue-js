<template>
  <li class="our-project__item" v-for="card in cards" :key="card.id">
    <article class="our-project__card">
      <div class="our-project__image-wrapper">
        <img class="our-project__image" :src="card.imgSrc" alt="Photo" width="585">
      </div>
      <div class="card__description">
        <div class="card__info-wrapper">
          <h4 class="card__name">{{ card.title }}</h4>
          <span class="card__info">{{ card.text }}</span>
        </div>
        <div class="icon card__icon-arrow">
          <router-link class="icon-link" :to="card.linkDetails">
            <span class="icon-image card__icon-image"></span>
          </router-link>
        </div>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  props: {
    cards: Object,
  },

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/vars.scss';

.our-project {

  &__item {
    display: inline-block;
    margin-bottom: 35px;
  }

  &__image-wrapper {
    max-width: 585px;
    width: 100%;
    max-height: 853px;
    margin-bottom: 24px;
  }



}
</style>