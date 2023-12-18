<template>
  <div class="v-main-wrapper">
    <div class="header">
      <img class="logo" src="../assets/images/logo.svg" alt="logo" />
      <router-link to="/"><p>Главная страница</p></router-link>
      <router-link to="/catalog"><p>Каталог</p></router-link>
      <router-link to="/cart"><p>Корзина</p></router-link>
      <router-link v-if="user == null" to="/login"><p>Профиль</p></router-link>
      <router-link v-if="user != null" to="/profile"
        ><p id="last">Профиль</p></router-link
      >
      <div class="user-block" v-if="user">
        <p class="email"></p>
          {{ user.email }}
        <button  class="btn-signout" @click="signOut">Выйти</button>
      </div>
    </div>
    <router-view />
    <div class="block">
      <div class="block__blur-bg-wrap">
        <div class="block__blur-bg block__blur-bg_color-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "v-main-wrapper",
  computed: mapState(["user"]),
  methods: {
    signOut() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss">
@import '/src/assets/main';
@mixin link($link, $hover, $active, $before) {
  color: $link;

  &:hover {
    color: $hover;
  }

  &:active {
    color: $active;
  }

  &::marker {
    color: $before;
  }
}
.header {
  display: block;
  width: 100%;
  font-size: 1.4vw;
  position: absolute;
  margin-top: 1vw;
  z-index: 5;
  top: 0;

  .logo {
    float: left;
    width: 2.7vw;
    margin-top: 0.6vw;
    margin-right: 24vw;
    margin-left: 3vw;
  }

  p {
    display: inline-flex;
    float: left;
    margin-right: 2vw;
    @include link(#000000, #ffffff, #ffffff, #ffffff);
  }

.user-block {
  position: absolute;
  right: 0;
  font-size: 1vw;
  margin-top: 0.7vw;

  .email {
    right: 0;
    margin-top: 1.6vw;
  }
  
  .btn-signout {
    margin-left: 1.2vw;
    margin-right: 1.4vw;
  }

  .btn-signout:active {
    background-color: $color;
  }
}
.router-link-exact-active p {
  color: $color;
}
}
</style>
