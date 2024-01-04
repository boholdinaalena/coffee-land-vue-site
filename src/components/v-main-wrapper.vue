<template>
  <div class="v-main-wrapper">
    <div class="header">
      <img class="logo" src="../assets/images/logo.svg" alt="logo" />
      <router-link to="/"><p>Главная страница</p></router-link>
      <router-link to="/catalog"><p>Каталог</p></router-link>
      <router-link to="/cart"><p>Корзина</p></router-link>
      <router-link v-if="user == null" to="/login"><p>Профиль</p></router-link>
      <router-link v-if="user != null" to="/profile"
        ><p id="last">Профиль</p></router-link
      >
      <div class="user-block" v-if="user">
        <p class="email"></p>
        {{ user.email }}
        <button class="btn-signout" @click="signOut">Выйти</button>
      </div>
    </div>
    <router-view />
    <div class="block">
      <div class="block__blur-bg-wrap">
        <div class="block__blur-bg block__blur-bg_color-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import db from "../firebase/init";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
arrayRemove,
} from "firebase/firestore";

export default {
  name: "v-main-wrapper",
  data() {
    return {
      container: {},
    }
  },
  computed: mapState(["user", "saved_drinks"]),
  methods: {
    signOut() {
      this.$store.dispatch("logout");
      this.sendChangesToDb();
    },
    async sendChangesToDb() {
        console.log(
          "ID saved drinks sending to DB",
          this.user.email,
          Array(this.saved_drinks)
        );
        await setDoc(
          doc(db, "user-info", this.container.email),
          {
            saved_id: this.saved_drinks,
          },
          { merge: true }
        );
        console.log("ID saved drinks send to DB", this.saved_drinks);
    },
    async getUserInfo() {
      if (this.user) {
      console.log(this.user);
      console.log(this.user.email);
        let docUser = await getDoc(doc(db, "user-info", this.user.email));
        if (docUser.exists()) {
          //User exist in db, load user info in this.current_user
          let currentUser = await getDocs(
            query(
              collection(db, "user-info"),
              where("email", "==", this.user.email)
            )
          );
          currentUser.forEach((doc) => {
            this.container = doc.data();
          });
          this.$store.dispatch("loadUserInfo", this.container);
          if (this.container.saved_id) {
            this.loadUserSaved(this.container.saved_id)
          }
        } else {
          //Db hasn't this user
          //Add user email in db
          await setDoc(doc(db, "user-info", this.user.email), {
            email: this.user.email,
          });
          //Add user display name or name-uid
          if (this.user.displayName) {
            await setDoc(
              doc(db, "user-info", this.user.email),
              {
                name: this.user.displayName,
              },
              { merge: true }
            );
          } else {
            let generatedName = "user-coffee-" + this.user.uid.slice(0, 6);
            await setDoc(
              doc(db, "user-info", this.user.email),
              {
                name: generatedName,
              },
              { merge: true }
            );
          }
          //New user created
          this.getUserInfo();
        }
      } else {
        console.log("user not login");
      }
    },
    loadUserSaved(arr) {
      for (let i = 0; i < arr.length; i++) {
        this.$store.dispatch("addToProfile", arr[i]);
      }
    },
  },
  updated() {
    this.getUserInfo();
    setInterval(() => {
      if (this.user) {
        this.sendChangesToDb();
      }
    }, 3000);
  },
}
</script>

<style lang="scss">
@import "/src/assets/main";
@mixin link($link, $hover, $active, $before) {
  color: $link;

  &:hover {
    color: $hover;
  }

  &:active {
    color: $active;
  }

  &::marker {
    color: $before;
  }
}
.header {
  display: block;
  width: 100%;
  font-size: 1.4vw;
  position: absolute;
  margin-top: 1vw;
  z-index: 5;
  top: 0;

  .logo {
    float: left;
    width: 2.7vw;
    margin-top: 0.6vw;
    margin-right: 24vw;
    margin-left: 3vw;
  }

  p {
    display: inline-flex;
    float: left;
    margin-right: 2vw;
    @include link(#000000, #ffffff, #ffffff, #ffffff);
  }

  .user-block {
    position: absolute;
    right: 0;
    font-size: 1vw;
    margin-top: 0.7vw;

    .email {
      right: 0;
      margin-top: 1.6vw;
    }

    .btn-signout {
      margin-left: 1.2vw;
      margin-right: 1.4vw;
    }

    .btn-signout:active {
      background-color: $color;
    }
  }
  .router-link-exact-active p {
    color: $color;
  }
}
</style>
