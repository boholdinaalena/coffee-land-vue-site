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

.cart-empty {
  position: absolute;
  top: 30%;
  left: 35%;
  text-align: center;

  img {
    width: 13vw;
    position: absolute;
    animation: empty-animation 15s infinite;
  }

  @keyframes empty-animation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: scale(1.2);
      transform: rotate(40deg);
    }
    75% {
      transform: rotate(-40deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .btn-empty {
    font-size: 1.5vw;
    font-weight: 600;
    padding-left: 3vw;
    padding-right: 3vw;
  }
}

#cart1 {
  top: -100%;
  left: -55%;
}
#cart2 {
  width: 18vw;
  rotate: -100deg;
  top: 100%;
  left: 85%;
}
#cart3 {
  top: 100%;
  left: -25%;
}
#cart4 {
  top: -75%;
  left: 100%;
}

.v-cart-total {
  color: #ffffff;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 1px;
  display: flex;
  justify-content: center;
  background-color: rgb(48, 48, 48);
  margin: 20px;
}
.btn-total {
  margin: 7px;
  padding: 5px;
  height: 40px;
}
</style>
