import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Diary from '@/views/Diary'
import Event from '@/views/Event'
import Gallery from '@/views/Gallery'

Vue.use(VueRouter);

const routes = [
  {
    path: "/OAO",
    redirect: "/OAO/home",
  },
  {
    path: "/OAO/home",
    name: "Home",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/OAO/diary",
    name: "Diary",
    component: Diary,
    meta: {
      title: "日记"
    }
  },
  {
    path: "/OAO/event",
    name: "Event",
    component: Event,
    meta: {
      title: "事件",
    }
  },
  {
    path: "/OAO/gallery",
    name: "Gallery",
    component: Gallery,
    meta: {
      title: "相册",
    }
  }
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: routes,
});

router.beforeEach((to, from, next) => {
  document.title = "OAO - " + to.matched[0].meta.title;
  next();
});

export default router;
