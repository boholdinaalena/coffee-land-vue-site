<template>
  <div
    class="v-catalog-item"
    v-if="product_data.available && product_data.filter"
  >
    <center>
      <img
        class="item-img"
        :src="`src/assets/coffee_carts/${product_data.image}.jpg`"
      />
      <h3>{{ product_data.name }}</h3>
      <h3>{{ product_data.price }} рублей</h3>
      <button @click="addToCart">{{ isAddCart }}</button>
      <button @click="addToProfile">{{ isAddProfile }}</button>
    </center>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  type: Object,
  props: {
    product_data: {
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isAddCart: "Добавить в корзину",
      isAddProfile: "+",
    };
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
      if ((this.isAddCart == "Добавить в корзину")) {
        this.isAddCart = "Добавлено";
        console.log(this.isAddCart)
      } else {
        this.isAddCart = "Добавить в корзину";
      }
    },
    addToProfile() {
      this.$emit("addToProfile", this.product_data.id);
      if ((this.isAddProfile == "+")) {
        this.isAddProfile = "-";
      } else {
        this.isAddProfile = "+";
      }
    },
  },
};
</script>
