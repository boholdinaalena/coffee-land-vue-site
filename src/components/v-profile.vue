<template>
  <div class="v-profile">
    <h1>User</h1>
    <p>{{ saved_drinks }}</p>
    <p>Name: {{ user_info.name }}</p>
    <p>Email: {{ user_info.email }}</p>
    <h2>Ваши любимые товары:</h2>
    <v-catalog-item
      v-for="product in profile_products"
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

import db from "../firebase/init";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { mapState } from "vuex";

export default {
  name: "v-profile",
  components: { vCatalogItem },
  data() {
    return {
      user_info: [],
      haveDiaplayName: true,
      profile_products: [],
    };
  },
  computed: mapState(["user", "saved_drinks", "products"]),
  methods: {
    addToCart(data) {
      this.$store.dispatch("addToCart", data);
    },
    addToProfile(data) {
      this.$store.dispatch("addToProfile", data);
    },
    deleteFromProfile(id) {
      this.$store.dispatch("deleteFromProfile", id);
    },
    async createUser() {
      if (this.user != null) {
        //get logined user information
        let docSnap = await getDoc(
          doc(db, "personal-dataset", this.user.email)
        );

        if (docSnap.exists()) {
        } else {
          //load user to database
          await setDoc(doc(db, "personal-dataset", this.user.email), {
            name: "Лучший клиент",
            email: this.user.email,
            saved_drinks_id: [],
          });
        }
      }
    },

    async getUserInfo() {
      if (this.user != null) {
        //get logined user
        const querySnap = await getDocs(
          query(
            collection(db, "personal-dataset"),
            where("email", "==", this.user.email)
          )
        );

        //add each doc to 'user_info' object
        querySnap.forEach((doc) => {
          this.user_info = doc.data();
        });

        //get information about user's saved products in app
        let arr = this.user_info.saved_drinks_id;
        for (let i = 0; i < arr.length; i++) {
          this.$store.dispatch("addToProfile", arr[i]);
        }
      }
    },

    async sendChangesToDb() {
      if (this.user != null) {
        await setDoc(
          doc(db, "personal-dataset", this.user.email),
          {
            saved_drinks_id: this.saved_drinks,
          },
          { merge: true }
        );
      }
    },

    consistProfileCatalog() {
      this.products.forEach((element) => {
        if (this.saved_drinks.includes(element.id)) {
          element.filter = true;
        } else {
          element.filter = false;
        }
      });
      this.profile_products = this.products;
    },
  },
  created() {
    this.createUser();
    this.getUserInfo();
    this.consistProfileCatalog();
  },
  updated() {
    this.sendChangesToDb();
  },
  mounted() {
    this.$store.dispatch("loadProducts");
  },
};
</script>
<style></style>
