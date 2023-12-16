<template>
  <div
    class="v-catalog-item"
    v-if="product_data.available && product_data.filter"
    @click="openPopup"
  >
    <center>
      <img
        class="item-img"
        :src="`src/assets/coffee_carts/${product_data.image}.jpg`"
      />
      <h3>{{ product_data.name }}</h3>
      <div v-if="isClose">
        <v-popup-item
          v-if="isOpen === 1"
          :product_data="product_data"
          @closePopup="closePopup"
        />
      </div>
      <h3>{{ product_data.price }} рублей</h3>
      <button @click.stop="addToCart">Добавить в корзину</button>
      <button
        v-if="!saved_drinks.includes(product_data.id)"
        @click.stop="addToProfile"
      >
        +
      </button>
      <button 
        v-if="saved_drinks.includes(product_data.id)"
        @click.stop="deleteFromProfile"
      >-</button>
    </center>
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
      isOpen: 0,
      isClose: true,
    };
  },
  computed: mapState(["saved_drinks"]),
  methods: {
    openPopup() {
      this.isOpen = 1;
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
    }
  },
};
</script>

<style>
.modal-item {
  position: fixed;
  top: 100%;
  width: 800px;
  background-color: #fff0d5;
}
</style>
