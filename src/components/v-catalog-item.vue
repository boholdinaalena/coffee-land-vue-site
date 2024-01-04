<template>
  <div
    class="v-catalog-item"
    v-if="product_data.available && product_data.filter"
    @click="openPopup"
  >
    <img
      v-if="!saved_drinks.includes(product_data.id)"
      @click.stop="addToProfile"
      src="../assets/images/unlike.png"
      class="like"
    />
    <img
      v-if="saved_drinks.includes(product_data.id)"
      @click.stop="deleteFromProfile"
      src="../assets/images/like.png"
      class="like"
    />
    <img class="item-img" :src="`src/assets/coffee_carts/${product_data.image}.webp`" />
    <h3 class="item-name">{{ product_data.name }}</h3>
    <div v-if="isClose">
      <v-popup-item
        v-if="isOpen"
        :product_data="product_data"
        @closePopup="closePopup"
      />
    </div>
    <h3 class="item-price">{{ product_data.price }}<span> рублей</span></h3>
    <button @click.stop="addToCart">Добавить в корзину</button>
  </div>
</template>

<script>
import vPopupItem from "./v-popup-item.vue";
import { mapState } from "vuex";

export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: { vPopupItem },
  data() {
    return {
      isAddProfile: "+",
      isOpen: false,
      isClose: true,
    };
  },
  computed: mapState(["saved_drinks"]),
  methods: {
    openPopup() {
      this.isOpen = true;
    },
    closePopup() {
      this.isClose = false;
    },
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
    addToProfile() {
      this.$emit("addToProfile", this.product_data.id);
      if (this.isAddProfile == "+") {
        this.isAddProfile = "-";
      } else {
        this.isAddProfile = "+";
      }
    },
    deleteFromProfile() {
      this.$emit("deleteFromProfile", this.product_data.id);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/style.scss";

.v-catalog-item {
  background-color: #ffffff;
  border-radius: 3vw;
  margin: 2vw;
  margin-right: 0;
  width: 22%;
  height: 30vw;
  float: left;
  font-size: 1vw;
  text-align: center;
  border: 0.5px solid #424242;

  .item-img {
    display: block;
    margin: auto;
    margin-top: 2vw;
    width: 15vw;
    border-radius: $border;
    z-index: -2;
  }

  button {
    font-size: 1vw;
    font-weight: 700;
    display: inline-block;
    vertical-align: bottom;
    margin: 0.5vw;
  }

  .item-name {
    margin: 0.5vw;
    margin-top: 0.8vw;
  }

  .item-price {
    font-weight: 500;
    font-size: 2.5vw;
    margin: 0.7vw;
    height: fit-content;


    span {
      font-size: 1.2vw;
    }
  }

  .like {
    width: 2vw;
    float: right;
    display: block;
    margin-left: -10vw;
    margin-right: 1vw;
    margin-top: 1.2vw;
    cursor: pointer;
  }
}

.v-catalog-item:hover {
  -webkit-box-shadow: 0px 0px 28px 8px $color;
  -moz-box-shadow: 0px 0px 28px 8px $color;
  box-shadow: 0px 0px 28px 8px $color;
}
</style>
