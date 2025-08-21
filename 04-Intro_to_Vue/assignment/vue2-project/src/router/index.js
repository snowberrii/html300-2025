import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/home.vue";
import About from "@/components/about.vue";
import Project from "@/components/project.vue";
import Contact from "@/components/contact.vue";

// install vue router plugin
Vue.use(VueRouter);

// define the routes
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/project", component: Project },
  { path: "/contact", component: Contact },
];

export default new VueRouter({
  mode: "history",
  routes,
});


