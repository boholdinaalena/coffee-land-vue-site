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
      <h3>{{ product_data.size }}</h3>
      <p>Раздел: {{ product_data.section }}</p>
      <h1>{{ product_data.price }} рублей</h1>
    </div>
    <!-- <button @click="addToCart">Добавить в корзину</button> -->
    <!-- <button
      v-if="!saved_drinks.includes(product_data.id)"
      @click="addToProfile"
    >
      +
    </button> -->
    <!-- <button v-if="saved_drinks.includes(product_data.id)">-</button> -->
  </div>
</template>
<script>
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
  methods: {
    closePopup() {
      this.$emit("closePopup");
    }
  }
};
</script>
<style>
.v-popup-item {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background-color: #dcdcdc;
}

.btn-close {
  right: 5%;
  top: 5%;
  position: fixed;
}

.popup-img {
  width: 30%;
  top: 15%;
  left: 2%;
  position: fixed;
}

.full-information {
  position: fixed;
  top: 15%;
  left: 37%;
  text-align: left;
  margin-right: 5%;
}

.description {
  font-size: 18pt;
}
</style>
