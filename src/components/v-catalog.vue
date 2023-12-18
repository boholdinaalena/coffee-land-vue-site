<template>
  <div class="v-catalog">
    <h1 class="caption">Выберите товары из каталога</h1>
    <router-link class="icon-cart" to="/cart"
      >
      <img src="../assets/images/cart-icon1.webp"/>
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
  methods: {
    addToCart(data) {
        this.$store.dispatch('addToCart', data)
    },
    addToProfile(data) {
      if (this.user == null) {
        router.push("/login");
      } else {
        this.$store.dispatch('addToProfile', data)
      }
    },
    deleteFromProfile(id) {
      this.$store.dispatch("deleteFromProfile", id);
    },    deleteFromProfile(id) {
      this.$store.dispatch("deleteFromProfile", id);
    },
  },
  mounted() {
    this.$store.dispatch('loadProducts');
  },
  computed: mapState(['products', 'cart', 'user']),
  data() {
    return {};
  },
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
