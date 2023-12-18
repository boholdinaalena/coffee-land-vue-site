<template>
  <div class="v-cart-item">
    <img
      class="cart-item-img"
      :src="`src/assets/coffee_carts/${cart_data.image}.jpg`"
    />
    <div class="cart-info-container">
      <h3>{{ cart_data.name }}</h3>
      <p class="cart-item-description">{{ cart_data.description }}</p>
      <p>Цена: <b>{{ cart_data.price }}</b> Размер: <b>{{ cart_data.size }}</b></p>
      <h3>Стоимость: {{ cart_data.price * cart_data.count }} рублей</h3>
    </div>
    <div class="cart-item-count">
      <p class="count">
        <div class="count-container">
          <button @click="minusProduct">-</button>
            {{ cart_data.count}}
          <button @click="plusProduct">+</button>
          <img @click="deleteFromCart" src="../assets/images/garbage.png" alt="delete">
        </div>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-cart-item",
  props: {
    cart_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    minusProduct() {
      if (this.cart_data.count == 1) {
        this.deleteFromCart();
      } 
      this.cart_data.count = this.cart_data.count - 1;
    },
    plusProduct() {
      if (this.cart_data.count == 10) {
        this.cart_data.count = 10;
      } else {
        this.cart_data.count++;
      }
    },
  },
};
</script>

<style lang="scss">
.v-cart-item {
  background: #ffff;
  padding: 2vw;
  border-radius: 25px;
  display: block;
  height: 13vw;
  margin: 2vw;
  width: 50%;
  border: 1px solid;
}
.cart-item-img {
  width: 25%;
  border-radius: 20px;
  margin-right: 1vw;
  float: left;
}

.cart-info-container {
  margin-left: 3vw;
  font-size: 1vw;
}
.cart-item-count {
  background: #780000;
  float: right;
  font-size: 1.5vw;
  margin-top: -6vw;
  height: 0;
  width: 20%;

  .count-container {
    width: max-content;
    z-index: 11;

    img {
      width: 2vw;
      margin-left: 2vw;
      padding-top: 2vw;
      margin-bottom: -0.65vw;
      cursor: pointer;
    }
  }

  button {
    padding: 0.6vw;
    padding-left: 1vw;
    padding-right: 1vw;
    border: 5vw;
    font-size: 1vw;
  }
}
</style>
