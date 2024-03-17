import { createStore } from "vuex";
import NewsStore from "./modules/IndexPageStore.js";
import BlogDetailsStore from "./BlogDetailsStore.js";
import BlogStore from "./modules/BlogStore.js";
import OurProjectStore from "./modules/OurProjectStore.js";

export default createStore({
  state: {
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    NewsStore,
    BlogDetailsStore,
    BlogStore,
    OurProjectStore,
  }
});