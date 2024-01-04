<template>
  <div class="v-profile" v-if="user">
    <div class="user-info">
      Здесь должна быть информация о пользователе:
      <p>{{ user_info }}</p>
      {{ saved_drinks }}
    </div>
    <v-catalog-item
      class="favorite-products"
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
import { mapState } from "vuex";

export default {
  name: "v-profile",
  components: {
    vCatalogItem
  },
  data() {
    return {
      profile_products: {},
    };
  },
  computed: mapState(["user", "user_info", "products", "saved_drinks"]),
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
    this.$store.dispatch("loadProducts");
  },
  mounted() {
    setInterval(() => {
      if (this.user_info) {
      this.consistProfileCatalog();
    }
    }, 2000)
  }
};
</script>

<!-- <script>
import vCatalogItem from "./v-catalog-item.vue";

import db from "../firebase/init";

<v-catalog-item
class="favorite-products"
v-for="product in profile_products"
:key="product.id"
:product_data="product"
@addToCart="addToCart"
@addToProfile="addToProfile"
@deleteFromProfile="deleteFromProfile(product.id)"
/>
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
      if (this.user) {
        let docSnap = await getDoc(
          doc(db, "personal-dataset", this.user.email)
        );

        if (docSnap.exists()) {
          console.log("User information:", docSnap.data());
        } else {
          //load user to database
          console.log("Create new user");
          await setDoc(doc(db, "personal-dataset", this.user.email), {
            name: "Лучший клиент",
            email: this.user.email,
          });
          console.log("New user created");
        }
      }
    },

    async getUserInfo() {
      if (this.user) {
        console.log("User login");
        //get logined user
        const querySnap = await getDocs(
          query(
            collection(db, "personal-dataset"),
            where("email", "==", this.user.email)
          )
        );

        //add each doc to 'user_info' object
        querySnap.forEach((doc) => {
          console.log(doc.data())
          this.user_info = doc.data();
        });
        console.log("Add each doc to user info:", this.user_info)


        if (this.user_info == true) {
          //get information about user's saved products in app
          let arr = this.user_info.saved_drinks_id;
          console.log("ID users's saved drinks:", arr);
          for (let i = 0; i < arr.length; i++) {
            this.$store.dispatch("addToProfile", arr[i]);
          }
        }
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

    async sendChangesToDb() {
      if (this.user) {
        console.log(
          "ID saved drinks sending to DB",
          this.user.email,
          Array(this.saved_drinks)
        );
        await setDoc(
          doc(db, "personal-dataset", this.user.email),
          {
            saved_drinks_id: this.saved_drinks,
          },
          { merge: true }
        );
        console.log("ID saved drinks send to DB", this.saved_drinks);
      }
    },
  },
  created() {
    this.createUser();
    setTimeout(() => {
      this.getUserInfo();
    }, 0)
    this.consistProfileCatalog();
  },
  beforeUpdate() {
    this.sendChangesToDb();
  },
  mounted() {
    this.$store.dispatch("loadProducts");
    // this.sendChangesToDb();
    this.getUserInfo();
  },
};
</script> -->
<style lang="scss">
.user-info {
  margin-top: 7vw;
  margin-left: 7vw;
}
</style>
