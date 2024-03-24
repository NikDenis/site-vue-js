import { createRouter, createWebHistory } from "vue-router";

import IndexPage from '@/components/pages/IndexPage.vue';
import BlogPage from '@/components/pages/BlogPage.vue';
import BlogDetailsPage from '@/components/pages/BlogDetailsPage.vue';
import ProjectDetailsPage from '@/components/pages/ProjectDetailsPage.vue';
import OurProjectPage from '@/components/pages/OurProjectPage.vue';


const routes = [
  {
    path: '/',
    name: 'homePage',
    component: IndexPage,
  },
  {
    path: '/project',
    name: 'ProjectPage',
    component: OurProjectPage,
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: BlogPage,
  },
  {
    path: '/blog-details',
    name: 'BlogDetailsPage',
    component: BlogDetailsPage,
  },
  {
    path: '/project-details',
    name: 'ProjectDetailsPage',
    component: ProjectDetailsPage,
  },

];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    }
  }
});

export default router;