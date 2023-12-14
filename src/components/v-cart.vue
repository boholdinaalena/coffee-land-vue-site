<template>
  <div class="v-cart">
    <h1>Cart</h1>
    <div v-if="!cart.length">
      <p>В корзине пока нет товаров</p>
      <p>Вы можете добавить товары в каталоге -></p>
      <router-link to="/catalog"><button>Каталог</button></router-link>
    </div>
    <v-cart-item
      v-if="cart.length"
      v-for="(item, index) in cart"
      :key="item.id"
      :cart_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
    <div class="v-cart-total">
      <p>Total: {{ calculate_cost }}</p>
    </div>
  </div>
</template>
<script>
import vCartItem from "./v-cart-item.vue";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    calculate_cost() {
      let sum = 0;
      for (let item of Object.values(this.cart)) {
        sum += item.count * item.price;
      }
      this.$store.dispatch('calc_total', sum);
      return sum;
    },
  },
  methods: {
    deleteFromCart(index) {
      this.$store.dispatch("deleteFromCart", index);
    },
  },
};
</script>

<style>
.v-cart-total {
  color: #ffffff;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 20%;
  padding: 1px;
  display: flex;
  justify-content: center;
  background-color: rgb(48, 48, 48);
}
</style>
