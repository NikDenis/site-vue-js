<template>
  <header class="page-header header-blog">

    <div class="center">
      <div class="page-header__wrapper">
        <div class="page-logo">
          <router-link class="page-logo__link" :to="'/'">
            <img class="page-logo__image" src="@/assets/images/page-logo.svg" alt="Logo" width="177">
          </router-link>
        </div>
        <div class="page-header__nav-wrapper">
          <nav class="page-header__nav">
            <ul class="page-header__list">
              <li class="page-header__item" v-for="link in   linksPage  " :key="link.id">
                <router-link class="page-header__link" :to="link.url">{{ link.name }}</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      linksPage: [
        {
          id: 1,
          name: 'Home',
          url: '/'
        },
        {
          id: 2,
          name: 'Project',
          url: '/project'
        },
        {
          id: 3,
          name: 'Blog',
          url: '/blog'
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/style/scss/vars.scss';

.page-header {
  padding: 55px 0;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 48px;
  }

  &__item {
    font-size: 20px;
    line-height: 125%;
  }

  &__link {
    font-family: "Jost", sans-serif;
    color: $text-color2;
    // color: #292f36;
  }
}
</style>