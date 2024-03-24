<template>
  <IndexPagePromo />
  <ProjectsComponents />
  <QualityComponent />
  <NewsComponent />
</template>

<script>
import IndexPagePromo from '../IndexPagePromo.vue';
import ProjectsComponents from '../ProjectsComponents.vue';
import QualityComponent from '../QualityComponent.vue';
import NewsComponent from '../NewsComponent.vue';

export default {
  components: { IndexPagePromo, ProjectsComponents, QualityComponent, NewsComponent }

}
</script>

<style lang="scss" scoped></style>