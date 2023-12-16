import { createStore } from "vuex";
import axios from "axios";
import router from "../router/router";
import { auth } from "../firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";

const store = createStore({
  state: {
    products: [],
    cart: [],
    user: null,
    saved_drinks: [],
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length > 0) {
        let isProductExists = false;
        state.cart.map(function (item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.count++;
          }
        });
        if (!isProductExists) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    },
    SET_SAVE_DRINKS(state, id) {
      if (state.saved_drinks.includes(id)) {
      } else {
        state.saved_drinks.push(id);
      }
    },
    REMOVE_FROM_PROFILE: (state, id) => {
      let index = state.saved_drinks.indexOf(id);
      console.log("mutation index:" ,index);
      state.saved_drinks.splice(index, 1);
      console.log("slice");
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios
        .get("http://localhost:3000/products")
        .then((r) => r.data)
        .then((products) => {
          commit("SET_PRODUCTS", products);
        });
    },
    addToCart({ commit }, product) {
      product.count = 1;
      product.add = "add";
      commit("SET_CART", product);
    },
    deleteFromCart({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            console.log("User not found");
            break;
          case "auth/wrong-password":
            console.log("Wrong password");
            break;
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/");
    },
    async register({ commit }, details) {
      const { email, password } = details;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;
          case "auth/week-password":
            alert("Week password");
            break;
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/");
    },
    async logout({ commit }) {
      await signOut(auth);
      commit("SET_USER", null);
      router.push("/");
    },
    async signInWithGoogle({ commit }) {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
        .then(() => {
          commit("SET_USER", auth.currentUser);
          router.push("/");
        })
        .catch((error) => {
          //handle error
        });
    },
    async signInWithApple({ commit }) {
      const provider = new OAuthProvider();
      await signInWithPopup(auth, provider)
        .then(() => {
          commit("SET_USER", auth.currentUser);
          router.push("/");
        })
        .catch((error) => {
          //handle error
        });
    },

    // fetchUser({ commit }) {
    //   auth.onAuthStateChanged(async (user) => {
    //     if (user === null) {
    //       commit("CLEAR_USER");
    //     } else {
    //       commit("SET_USER", user);
    //       if (router.isReady() && router.currentRoute.value.path === "/login") {
    //         router.push("/");
    //       }
    //     }
    //   });
    // },
    addToProfile({ commit }, id) {
      commit("SET_SAVE_DRINKS", id);
    },
    deleteFromProfile({ commit }, id) {
      console.log("action:", id)
      commit("REMOVE_FROM_PROFILE", id);
    },
  },
});

export default store;
