<template>
  <div class="v-main-wrapper">
    <router-link to="/">Главная страница</router-link> |
    <router-link to="/catalog">Каталог</router-link> |
    <router-link to="/cart">Корзина</router-link> |
    <router-link v-if="user == null" to="/login">Профиль</router-link>
    <router-link v-if="user != null" to="/profile">Профиль</router-link>
    <p class="email" v-if="user">{{ user.email }}
      <button @click="signOut">Выйти</button>
    </p>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "v-main-wrapper",
  computed: mapState(["user"]),
  methods: {
    signOut() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style>
.email {
  float: right;
}
</style>
