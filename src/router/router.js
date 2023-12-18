import { createWebHistory, createRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";


import Home from "../components/v-home.vue";
import Catalog from "../components/v-catalog.vue";
import Cart from "../components/v-cart.vue";
import Craft from "../components/v-craft.vue";
import Login from "../components/v-login.vue";
import Profile from "../components/v-profile.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/craft",
    name: "Craft",
    component: Craft,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active' 
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },

      reject
    );
  });
};


export default router;