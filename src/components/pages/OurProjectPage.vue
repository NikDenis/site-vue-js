<template>
  <PromoAndBradcrumbs :promoTitle="promoTitle" :promoText="promoText" />

  <main>

    <section class="our-project">
      <div class="center">
        <div class="our-project__wrapper">
          <div class="our-project__category-wrapper">
            <button class="category-button" @click="selectButton($event)" v-for="(item, index) in categoryItems"
              :key="index" :class="'bed room' === item.toLowerCase() ? 'category-button--active' : ''">
              {{ item }}
            </button>
          </div>
          <div class="our-project__list-wrapper">
            <ul class="our-project__list">
              <CardOurProject :cards="!currentCards ? this.bedroom : currentCards" />
            </ul>
          </div>
          <!-- <div class="our-project__pagination"></div> -->
        </div>
      </div>
    </section>


  </main>
</template>

<script>
import { mapState } from 'vuex';
import CardOurProject from '../CardOurProject.vue';
import PromoAndBradcrumbs from '../PromoAndBradcrumbs.vue';

export default {
  components: { PromoAndBradcrumbs, CardOurProject },
  data() {
    return {
      currentCards: null,
    }
  },
  computed: {
    ...mapState({
      promoTitle: (state) => state.OurProjectStore.promoTitle,
      promoText: (state) => state.OurProjectStore.promoText,
      categoryItems: (state) => state.OurProjectStore.categoryItems,

      bathroom: (state) => state.OurProjectStore.bathroom,
      bedroom: (state) => state.OurProjectStore.bedroom,
      kitchan: (state) => state.OurProjectStore.kitchan,
      livingarea: (state) => state.OurProjectStore.livingarea,
    })
  },
  methods: {
    selectButton(elem) {
      let currentElem = elem.target;
      const parent = currentElem.parentElement;
      const children = parent.children;
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('category-button--active')) {
          children[i].classList.remove('category-button--active')
        }
      }
      currentElem.classList.add('category-button--active');
      currentElem = currentElem.textContent.toLowerCase().replaceAll(' ', '');
      if (currentElem === 'bathroom') {
        this.currentCards = this.bathroom;
      }
      if (currentElem === 'bedroom') {
        this.currentCards = this.bedroom;
      }
      if (currentElem === 'kitchan') {
        this.currentCards = this.kitchan;
      }
      if (currentElem === 'livingarea') {
        this.currentCards = this.livingarea;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/vars.scss';

.promo {
  background: url(@/assets/images/our-project/bg-image-promo.jpg) no-repeat center / cover;
}

.our-project {
  padding: 200px 0;

  &__wrapper {}

  &__category-wrapper {
    margin: 0 auto 60px;
    max-width: 880px;
    border: 1px solid #cda274;
    border-radius: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &__list {
    column-count: 2;
  }
}

.category-button {
  max-width: 220px;
  width: 100%;
  height: 73px;
  border-radius: 18px;
  background-color: transparent;
  font-weight: 600;
  font-size: 18px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: $text-color2;
  cursor: pointer;
}

.category-button--active {
  background-color: #cda274;
  color: #fff;
}
</style>