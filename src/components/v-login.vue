<template>
  <div class="v-login">
    <section class="form">
      <div class="register-container" v-if="!isVisible">
        <form class="register" @submit.prevent="register">
          <h2>Register</h2>
          <input
            type="email"
            placeholder="Email address"
            v-model="register_form.email"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="register_form.password"
          />
          <input type="submit" value="Register" @click="register" />
        </form>
        <p>
          У вас уже есть аккаунт
          <button @click="isVisible = true">Войти</button>
        </p>
      </div>

      <div class="login-container" v-if="isVisible">
        <form class="login" @submit.prevent="login">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email address"
            v-model="login_form.email"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="login_form.password"
          />
          <input type="submit" value="Login" @click="login" />
        </form>
        <p>
          У вас ещё нет аккаунта
          <button @click="isVisible = false">Зарегистрируйтесь</button>
        </p>
      </div>

      <button @click="loginWithGoogle">Sign In With Google</button>
      <button @click="loginWithApple">Sign In With Aple</button>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore, mapState } from "vuex";
import db from "../firebase/init";
import {
  doc,
  setDoc
} from "firebase/firestore";

export default {
  name: "v-login",
  data() {
    return {
      isVisible: true,
    };
  },
  
  computed: mapState(['user']),

  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    const register = () => {
      store.dispatch("register", register_form.value);
      
    };

    const loginWithGoogle = () => {
      store.dispatch("signInWithGoogle");
    };

    const loginWithApple = () => {
      store.dispatch("signInWithGoogle");
    };

    return {
      login_form,
      register_form,
      store,
      register,
      login,
      loginWithGoogle,
      loginWithApple,
    };
  },
};
</script>
