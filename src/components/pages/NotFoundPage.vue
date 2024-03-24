<template>
  <PageHeader />

  <main>
    <section class="not-found">
      <div class="center">
        <div class="not-found__content">
          <h1 class="not-found__title">404</h1>
          <p class="not-found__text">We are sorry, but the page you requested was not found</p>
          <button class="not-found__button">
            <span class="button-text">Back To Home</span>
            <span class="button-icon">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                  stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="not-found__image"></div>
    </section>
  </main>
</template>

<script>
import PageHeader from '../PageHeader.vue';

export default {
  components: { PageHeader }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/vars.scss';

.page-header {
  padding: 45px 0;
}

.not-found {
  position: relative;
  padding: 309px 0;
  max-width: 1926px;
  width: 100%;
  margin: 0 auto;


  &__image {
    position: absolute;
    top: 0;
    left: 1013px;
    max-width: 913px;
    width: 100%;
    height: 1042px;
    border-radius: 0 0 0 353px;
    background-image: url('@/assets/images/not-found/bg-image.jpg');
    background-position: right top;
    background-repeat: no-repeat;
    background-size: auto;
    z-index: -5;
  }

  &__content {
    max-width: 570px;
    width: 100%;
  }

  &__title {
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 250px;
    line-height: 172px;
    color: #cda274;
    margin-bottom: 32px;
  }

  &__text {
    font-family: "DM Serif Display", sans-serif;
    font-weight: 400;
    font-size: 35px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #292f36;
    margin-bottom: 40px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    padding: 26px 54px;
    box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);
    background: #292f36;
    font-family: "Jost", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 125%;
    letter-spacing: 0.02em;
    text-align: center;
    color: #fff;
  }
}

@media (max-width: 1500px) {
  .not-found {
    &__image {
      left: 725px;
    }
  }
}

.button-text {
  margin-right: 6px;
}

.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>