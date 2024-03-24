<template>
    <!-- <IndexPage />
<hr style="height: 1px;background-color: black;">
<BlogPage />
<hr style="height: 1px;background-color: black;">
<BlogDetailsPage />
<hr style="height: 1px;background-color: black;">
<OurProjectPage />
<hr style="height: 1px;background-color: black;">
<ProjectDetailsPage /> -->
    <PageHeader />

    <RouterView />

    <PageFooter />
</template>

<script>
import PageFooter from './components/PageFooter.vue';
import PageHeader from './components/PageHeader.vue';

// import BlogDetailsPage from './components/pages/BlogDetailsPage.vue';
// import BlogPage from './components/pages/BlogPage.vue';
// import IndexPage from './components/pages/IndexPage.vue';
// import OurProjectPage from './components/pages/OurProjectPage.vue';
// import ProjectDetailsPage from './components/pages/ProjectDetailsPage.vue';
// import PageFooter from './components/PageFooter.vue';



export default {
    components: { PageHeader, PageFooter }
}
</script>

<style lang="scss"></style>
