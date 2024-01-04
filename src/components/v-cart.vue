<template>
  <div class="v-cart">
    <div class="cart-empty" v-if="!cart.length">
      <img id="cart1" src="../assets/images/glass1.webp"/>
      <img id="cart2" src="../assets/images/glass2.webp"/>
      <img id="cart3" src="../assets/images/glass3.webp"/>
      <img id="cart4" src="../assets/images/croissant.webp"/>
      <p>В корзине пока нет товаров</p>
      <p>Вы можете добавить товары в каталоге -></p>
      <router-link to="/catalog"><button class="btn-empty">Каталог</button></router-link>
    </div>
    <v-cart-item
      v-if="cart.length"
      v-for="(item, index) in cart"
      :key="item.id"
      :cart_data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
    <div class="v-cart-total">
      <p>Сумма: {{ calculate_cost }}</p>
      <button class="btn-total" v-if="calculate_cost > 0">Заказать</button>
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

<style lang="scss">
.v-cart {
  margin-top: 6vw;
  margin-bottom: 100px;
}


</style>
