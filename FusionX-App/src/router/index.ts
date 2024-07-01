import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/Home.vue";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";
import Services from "../components/Services.vue";
import AboutUs from "../components/AboutUs.vue";
import Contact from "../components/Contact.vue";
import NotFound from "../components/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/about-us",
    name: "About Us",
    component: AboutUs,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/:patchMatch(.*)*",
    name: "404: Not Found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const isAuthenticated = !!localStorage.getItem("authToken");

  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
