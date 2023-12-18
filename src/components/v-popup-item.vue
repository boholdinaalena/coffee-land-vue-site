<template>
  <div class="v-popup-item">
    <button @click="closePopup" class="btn-close">x</button>
    <img
      class="popup-img"
      :src="`src/assets/coffee_carts/${product_data.image}.jpg`"
    />
    <div class="full-information">
      <h1>{{ product_data.name }}</h1>
      <p class="description">{{ product_data.description }}</p>
      <p>Размер: <b>{{ product_data.size }}</b> </p>
      <p>Раздел: <b>{{ product_data.section }}</b> </p>
      <p>Цена: <b>{{ product_data.price }} рублей</b>  </p>
    </div>
    <button class="btn-popup" @click="addToCart(product_data)">Добавить в корзину</button>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import router from '../router/router';

export default {
  name: "v-popup-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: mapState(["saved_drinks"]),
  methods: {
    closePopup() {
      this.$emit("closePopup");
    },
    addToCart(data) {
        this.$store.dispatch('addToCart', data);
        router.push("/cart");
    },
  }
};
</script>
<style lang="scss">
@import '../assets/style.scss';

.v-popup-item {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background-color: #dcdcdc;
  z-index: 10;
}

.btn-close {
  right: 5%;
  top: 5%;
  position: fixed;
}

.btn-popup {
  position: fixed;
  top: 75%;
}

.popup-img {
  width: 30vw;
  top: 15%;
  left: 4%;
  position: fixed;
  border-radius: $border;
}

.full-information {
  position: fixed;
  top: 15%;
  left: 37%;
  text-align: left;
  margin-right: 5%;

  p {
    font-size: 1.3vw;
  }
}

.description {
  font-size: 18pt;
}
</style>
