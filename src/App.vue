<template>
<IndexPage />
<hr style="height: 1px;background-color: black;">
<BlogPage />
<hr style="height: 1px;background-color: black;">
<BlogDetailsPage />
<hr style="height: 1px;background-color: black;">
<OurProjectPage />
<hr style="height: 1px;background-color: black;">
<ProjectDetailsPage />
</template>

<script>
import BlogDetailsPage from './components/pages/BlogDetailsPage.vue';
import BlogPage from './components/pages/BlogPage.vue';
import IndexPage from './components/pages/IndexPage.vue';
import OurProjectPage from './components/pages/OurProjectPage.vue';
import ProjectDetailsPage from './components/pages/ProjectDetailsPage.vue';
// import PageFooter from './components/PageFooter.vue';



export default {
    components: { IndexPage, BlogPage, BlogDetailsPage, OurProjectPage, ProjectDetailsPage }
}
</script>

<style lang="scss">

</style>
