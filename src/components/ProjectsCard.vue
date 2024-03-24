<template>
  <li class="projects__item" v-for="project in projects" :key="project.id">
    <article>
      <div class="projects__image-wrapper">
        <img class="projects__image" :src="project.img" alt="Photo" width="525">
      </div>
      <div class="card__description">
        <div class="card__info-wrapper">
          <h4 class="card__name">{{ project.name }}</h4>
          <span class="card__info">{{ project.cardInfo }}</span>
        </div>
        <div class="icon card__icon-arrow">
          <router-link class="icon-link" :to="project.linkDetails">
            <span class="icon-image card__icon-image"></span>
          </router-link>
        </div>
      </div>
    </article>
  </li>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          img: require('@/assets/images/projects/projects-1.jpg'),
          name: 'Modern kitchan',
          cardInfo: 'Decor / Artchitecture',
          linkDetails: '/project-details',

        },
        {
          id: 2,
          img: require('@/assets/images/projects/projects-2.jpg'),
          name: 'Modern kitchan',
          cardInfo: 'Decor / Artchitecture',
          linkDetails: '/project-details',

        },
        {
          id: 3,
          img: require('@/assets/images/projects/projects-3.jpg'),
          name: 'Modern kitchan',
          cardInfo: 'Decor / Artchitecture',
          linkDetails: '/project-details',

        },
        {
          id: 4,
          img: require('@/assets/images/projects/projects-4.jpg'),
          name: 'Modern kitchan',
          cardInfo: 'Decor / Artchitecture',
          linkDetails: '/project-details',
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped></style>