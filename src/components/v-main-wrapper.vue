<template>
  <div class="v-main-wrapper">
        <router-link to="/">Главная страница</router-link> |
        <router-link to="/catalog">Каталог</router-link> |
        <router-link to="/cart">Корзина</router-link> |
        <router-link to="/craft">Крафтовый кофе</router-link> |
        <router-link to="/login">Регистрация</router-link> |
        <router-link to="/profile">Профиль</router-link> 
        <p class="email" v-if="user">{{ user.email }}</p>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'v-main-wrapper',
  computed: mapState(['user']),
}
</script>

<style>
.email {
  float: right;
}
</style>