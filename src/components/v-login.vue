<template>
  <div class="bg-login">
    <div class="v-login">
      <img class="beans" id="b4" src="/src/assets/images/coffee_beans.svg" alt="coffee beans">
      <img class="beans" id="b5" src="/src/assets/images/coffee_beans.svg" alt="coffee beans">
      <section class="form">
        <div class="register-container" v-if="!isVisible">
          <form class="register" @submit.prevent="register">
            <h2>Регистрация</h2>
            <input
              type="email"
              placeholder="Email address"
              v-model="register_form.email"
            />
            <input
              type="password"
              placeholder="Password"
              v-model="register_form.password"
            />
            <button class="submit" @click="register">Регистрация</button>
          </form>
          <div class="change-form">
            <p>
              У вас уже есть аккаунт
              <button @click="isVisible = true">Войти</button>
            </p>
          </div>
        </div>

        <div class="login-container" v-if="isVisible">
          <form class="login" @submit.prevent="login">
            <h2>Вход</h2>
            <input
              type="email"
              placeholder="Email address"
              v-model="login_form.email"
            />
            <input
              type="password"
              placeholder="Password"
              v-model="login_form.password"
            />
            <button @click="login" class="submit">Войти</button>
          </form>
          <div class="change-form">
            <p>
              У вас ещё нет аккаунта
              <button @click="isVisible = false">Зарегистрируйтесь</button>
            </p>
          </div>
        </div>

        <button @click="loginWithGoogle">Sign In With Google</button>
        <button @click="loginWithApple">Sign In With Aple</button>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore, mapState } from "vuex";

export default {
  name: "v-login",
  data() {
    return {
      isVisible: true,
    };
  },

  computed: mapState(["user"]),

  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    const loginWithGoogle = () => {
      store.dispatch("signInWithGoogle");
    };

    const loginWithApple = () => {
      store.dispatch("signInWithGoogle");
    };

    return {
      login_form,
      register_form,
      store,
      register,
      login,
      loginWithGoogle,
      loginWithApple,
    };
  },
};
</script>
<style lang="scss">
@import "../assets/style";
.bg-login {
  position: fixed;
  padding: 4vw;
  background-color: #ecf0f3;
  position: fixed;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

#b4 {
  width: 8vw;
  top: -15%;
  left: -20%;
}

#b5 {
  width: 10vw;
  rotate: -90deg;
  top: 60%;
  left: 110%;
}

.v-login {
  position: fixed;
  top: 18%;
  left: 25%;
  width: 50vw;
  height: 33vw;
  border-radius: 20px;
  padding: 40px;
  box-sizing: border-box;
  background: #ecf0f3;
  box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;

  input {
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    margin-right: 2vw;
    width: 18vw;
    height: 50px;
    font-size: 14px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
    border: 1px solid #dedede;
  }
  button {
    margin: 1vw;
  }
  .submit {
    float: right;
    display: block;
    background: $color;
    box-shadow: 10px 5px 10px 2px rgba(58, 86, 107, 0.2) inset,
    10px 10px 10px 2px rgba(34, 60, 80, 0.2);
    color: #ffffff;
  }

  .change-form {
    margin-left: 1vw;
    margin-top: 5vw;
  }
}
</style>
