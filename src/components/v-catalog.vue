<template>
  <div class="v-catalog">
    <h1>Каталог</h1>
    <router-link class="icon-cart" to="/cart"
      >Товаров в корзине: {{ cart.length }}
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

<style scoped>
.icon-cart {
  position: fixed;
  bottom: 40px;
  right: 10px;
  border-radius: 25px;
  border: solid 2px #2c2c2c;
  padding: 10px;
}
</style>
