<template>
  <div class="v-catalog">
    <h1 class="caption">Выберите товары из каталога</h1>
    <div><button @click="displayAllSection">Меню</button></div>
    <div class="filter" v-for="filter_param in filter_params">
      <button @click="filterBySections(filter_param.section)">
        {{ filter_param.name }} напитки
      </button>
    </div>
    <router-link class="icon-cart" to="/cart">
      <img src="../assets/images/cart-icon1.webp" />
      <p class="cart-length">{{ cart.length }}</p>
    </router-link>
    <v-catalog-item
      v-for="product in products"
      :key="product.id"
      :product_data="product"
      @addToCart="addToCart"
      @addToProfile="addToProfile"
      @deleteFromProfile="deleteFromProfile(product.id)"
    />
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapState } from "vuex";
import router from "../router/router";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  data() {
    return {
      filter_params: [
        { name: "Классические", section: "classic" },
        { name: "Фирменные", section: "branded" },
        { name: "Авторские", section: "authorial" },
      ],
    }
  },
  methods: {
    addToCart(data) {
      this.$store.dispatch("addToCart", data);
    },
    addToProfile(data) {
      if (this.user == null) {
        router.push("/login");
      } else {
        this.$store.dispatch("addToProfile", data);
      }
    },
    deleteFromProfile(id) {
      this.$store.dispatch("deleteFromProfile", id);
    },
    deleteFromProfile(id) {
      this.$store.dispatch("deleteFromProfile", id);
    },
    filterBySections(params) {
      this.products.forEach((element) => {
        if (element.section == params) {
          element.filter = true;
        } else {
          element.filter = false;
        }
      });
    },
    displayAllSection() {
      this.products.forEach((element) => (element.filter = true));
    },
  },
  mounted() {
    this.$store.dispatch("loadProducts");
  },
  computed: mapState(["products", "cart", "user"]),
};
</script>

<style lang="scss">
.v-catalog {
  .caption {
    margin-top: 6vw;
    text-align: center;
  }

  .icon-cart {
    .cart-length {
      position: fixed;
      background: #ffff;
      width: fit-content;
      border-radius: 2vw;
      top: 83%;
      right: 1%;
      padding: 0.2vw;
      padding-left: 0.4vw;
      padding-right: 0.4vw;
      font-weight: 800;
    }
    img {
      width: 6vw;
      position: fixed;
      top: 87%;
      right: 1%;
    }
  }
}
</style>
