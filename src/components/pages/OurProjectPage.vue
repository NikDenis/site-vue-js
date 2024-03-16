<template>
<PageHeader />

<PromoAndBradcrumbs :promoTitle="promoTitle" :promoText="promoText" />

<main>

  <section class="our-project">
    <div class="center">
      <div class="our-project__wrapper">
        <div class="our-project__category-wrapper">
          <button class="category-button" @click="selectButton($event)"
           v-for="(item, index) in categoryItems" :key="index"
           :class="'bed room' === item.toLowerCase() ? 'category-button--active' : ''">
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

<PageFooter />
</template>

<script>
import CardOurProject from '../CardOurProject.vue';
import PageFooter from '../PageFooter.vue';
import PageHeader from '../PageHeader.vue';
import PromoAndBradcrumbs from '../PromoAndBradcrumbs.vue';

  export default {
    components: { PageHeader, PageFooter, PromoAndBradcrumbs, CardOurProject },

    data() {
      return {
        promoTitle: 'Our Project',
        promoText: 'Home / Project',
        categoryItems: ['Bathroom','Bed Room', 'Kitchan', 'Living Area'],
        currentCards: null,
        
        bathroom: [
        {
          id: 1,
          imgSrc: require('@/assets/images/our-project/card-img_3.jpg'),
          title: 'Minimal bedroom1',
          text: 'Decor / Artchitecture',
        },
        {
          id: 2,
          imgSrc: require('@/assets/images/our-project/card-img_4.jpg'),
          title: 'Classic Minimal Bedroom1',
          text: 'Decor / Artchitecture',
        },
        {
          id: 3,
          imgSrc: require('@/assets/images/our-project/card-img_1.jpg'),
          title: 'Minimal Bedroom table1',
          text: 'Decor / Artchitecture',
        },
        {
          id: 4,
          imgSrc: require('@/assets/images/our-project/card-img_2.jpg'),
          title: 'Modern Medroom1',
          text: 'Decor / Artchitecture',
        },
        {
          id: 5,
          imgSrc: require('@/assets/images/our-project/card-img_8.jpg'),
          title: 'Minimal Bedroom1',
          text: 'Decor / Artchitecture',
        },
        {
          id: 6,
          imgSrc: require('@/assets/images/our-project/card-img_6.jpg'),
          title: 'Modern Bedroom1',
          text: 'Decor / Artchitecture',
        },
        {
          id: 7,
          imgSrc: require('@/assets/images/our-project/card-img_7.jpg'),
          title: 'System Table1',
          text: 'Decor / Artchitecture',
        },
        {
          id: 8,
          imgSrc: require('@/assets/images/our-project/card-img_5.jpg'),
          title: 'Modern Bedroom1',
          text: 'Decor / Artchitecture',
        },
        ],
        bedroom: [
        {
          id: 1,
          imgSrc: require('@/assets/images/our-project/card-img_1.jpg'),
          title: 'Minimal bedroom',
          text: 'Decor / Artchitecture',
        },
        {
          id: 2,
          imgSrc: require('@/assets/images/our-project/card-img_2.jpg'),
          title: 'Classic Minimal Bedroom',
          text: 'Decor / Artchitecture',
        },
        {
          id: 3,
          imgSrc: require('@/assets/images/our-project/card-img_3.jpg'),
          title: 'Minimal Bedroom table',
          text: 'Decor / Artchitecture',
        },
        {
          id: 4,
          imgSrc: require('@/assets/images/our-project/card-img_4.jpg'),
          title: 'Modern Medroom',
          text: 'Decor / Artchitecture',
        },
        {
          id: 5,
          imgSrc: require('@/assets/images/our-project/card-img_5.jpg'),
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture',
        },
        {
          id: 6,
          imgSrc: require('@/assets/images/our-project/card-img_6.jpg'),
          title: 'Modern Bedroom',
          text: 'Decor / Artchitecture',
        },
        {
          id: 7,
          imgSrc: require('@/assets/images/our-project/card-img_7.jpg'),
          title: 'System Table',
          text: 'Decor / Artchitecture',
        },
        {
          id: 8,
          imgSrc: require('@/assets/images/our-project/card-img_8.jpg'),
          title: 'Modern Bedroom',
          text: 'Decor / Artchitecture',
        },
        ],
        kitchan: [
        {
          id: 1,
          imgSrc: require('@/assets/images/our-project/card-img_5.jpg'),
          title: 'Minimal bedroom3',
          text: 'Decor / Artchitecture',
        },
        {
          id: 2,
          imgSrc: require('@/assets/images/our-project/card-img_3.jpg'),
          title: 'Classic Minimal Bedroom3',
          text: 'Decor / Artchitecture',
        },
        {
          id: 3,
          imgSrc: require('@/assets/images/our-project/card-img_2.jpg'),
          title: 'Minimal Bedroom table3',
          text: 'Decor / Artchitecture',
        },
        {
          id: 4,
          imgSrc: require('@/assets/images/our-project/card-img_4.jpg'),
          title: 'Modern Medroom3',
          text: 'Decor / Artchitecture',
        },
        {
          id: 5,
          imgSrc: require('@/assets/images/our-project/card-img_1.jpg'),
          title: 'Minimal Bedroom3',
          text: 'Decor / Artchitecture',
        },
        {
          id: 6,
          imgSrc: require('@/assets/images/our-project/card-img_6.jpg'),
          title: 'Modern Bedroom3',
          text: 'Decor / Artchitecture',
        },
        {
          id: 7,
          imgSrc: require('@/assets/images/our-project/card-img_7.jpg'),
          title: 'System Table3',
          text: 'Decor / Artchitecture',
        },
        {
          id: 8,
          imgSrc: require('@/assets/images/our-project/card-img_8.jpg'),
          title: 'Modern Bedroom3',
          text: 'Decor / Artchitecture',
        },
        ],
        livingarea: [
          {
            id: 1,
            imgSrc: require('@/assets/images/our-project/card-img_8.jpg'),
            title: 'Minimal bedroom4',
            text: 'Decor / Artchitecture',
          },
          {
            id: 2,
            imgSrc: require('@/assets/images/our-project/card-img_2.jpg'),
            title: 'Classic Minimal Bedroom4',
            text: 'Decor / Artchitecture',
          },
          {
            id: 3,
            imgSrc: require('@/assets/images/our-project/card-img_3.jpg'),
            title: 'Minimal Bedroom table4',
            text: 'Decor / Artchitecture',
          },
          {
            id: 4,
            imgSrc: require('@/assets/images/our-project/card-img_4.jpg'),
            title: 'Modern Medroom4',
            text: 'Decor / Artchitecture',
          },
          {
            id: 5,
            imgSrc: require('@/assets/images/our-project/card-img_5.jpg'),
            title: 'Minimal Bedroom4',
            text: 'Decor / Artchitecture',
          },
          {
            id: 6,
            imgSrc: require('@/assets/images/our-project/card-img_6.jpg'),
            title: 'Modern Bedroom4',
            text: 'Decor / Artchitecture',
          },
          {
            id: 7,
            imgSrc: require('@/assets/images/our-project/card-img_7.jpg'),
            title: 'System Table4',
            text: 'Decor / Artchitecture',
          },
          {
            id: 8,
            imgSrc: require('@/assets/images/our-project/card-img_1.jpg'),
            title: 'Modern Bedroom4',
            text: 'Decor / Artchitecture',
          },
        ],


      }
    },
    methods: {
     selectButton(elem) {
        let currentElem = elem.target;
        const parent = currentElem.parentElement;
        const children = parent.children;
        for (let i = 0; i < children.length; i++) {
          if(children[i].classList.contains('category-button--active')) {
            children[i].classList.remove('category-button--active')
          }
        }
        currentElem.classList.add('category-button--active');
        currentElem = currentElem.textContent.toLowerCase().replaceAll(' ', '');
        if(currentElem === 'bathroom') {
          this.currentCards = this.bathroom;
        }
        if(currentElem === 'bedroom') {
          this.currentCards = this.bedroom;
        }
        if(currentElem === 'kitchan') {
          this.currentCards = this.kitchan;
        }
        if(currentElem === 'livingarea') {
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

  &__wrapper {
    
  }
  
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