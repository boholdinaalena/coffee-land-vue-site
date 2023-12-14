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
        <button @click="minusProduct">-</button>
          Количество: {{ cart_data.count}}
        <button @click="plusProduct">+</button>
      </p>
      <button class="delete" @click="deleteFromCart">Delete</button>
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

<style>
.v-cart-item {
  border: 2px solid #313131;
  padding: 8px;
  border-radius: 25px;
  display: block;
  height: 270px;
  margin: 5px;
  float: left;
}
.cart-item-img {
  width: 18%;
  float: left;
  border-radius: 20px;
}
.cart-info-container {
  width: 100%;
  background-color: rgb(229, 229, 229);
}
.cart-item-description {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.cart-item-count {
  float: right;
  width: 400px;
  height: fit-content;
}

.count {
  display: block;
  float: left;
  margin-top: 3px;
}
</style>
