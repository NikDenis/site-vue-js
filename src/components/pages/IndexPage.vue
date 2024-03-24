<template>
  <PageHeader />
  <IndexPagePromo />
  <ProjectsComponents />
  <QualityComponent />
  <NewsComponent />
  <PageFooter />
</template>

<script>
import IndexPagePromo from '../IndexPagePromo.vue';
import ProjectsComponents from '../ProjectsComponents.vue';
import QualityComponent from '../QualityComponent.vue';
import NewsComponent from '../NewsComponent.vue';
import PageHeader from '../PageHeader.vue';
import PageFooter from '../PageFooter.vue';

export default {
  components: { IndexPagePromo, ProjectsComponents, QualityComponent, NewsComponent, PageHeader, PageFooter }

}
</script>

<style lang="scss" scoped></style>