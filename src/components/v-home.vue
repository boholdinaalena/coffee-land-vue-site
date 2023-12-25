<template>
  <div class="v-home">
    <img class="beans" id="b1" src="/src/assets/images/coffee_beans.svg" alt="coffee beans">
    <img class="beans" id="b2" src="/src/assets/images/coffee_beans.svg" alt="coffee beans">
    <img class="beans" id="b3" src="/src/assets/images/coffee_beans.svg" alt="coffee beans">
    <div class="title">
      <p class="title coffee">Coffee</p>
      <p class="title land">Land</p>
      <img src="/src/assets/images/glass1.webp" alt="coffee"  align="middle"/>
    </div>
    <p class="title-description">Место - где рождается кофе</p>
  </div>
</template>
<script>
export default {
  name: "v-home",
};
</script>
<style lang="scss">
.title {
  font-size: 10vw;
  line-height: 0;

  .coffee {
    margin-left: 15vw;
    margin-top: 22vw;
  }

  .land {
    margin-left: 56vw;
  }

  img {
    position: absolute;
    top: 4vw;
    width: 25vw;
    left: 38%;
    rotate: 5deg;
  }
  img:hover {
    animation: el-rotate 2s infinite;
  }
  @keyframes el-rotate {
    0% {
        transform: rotate(-5deg);
    }
    25% {
        transform: rotate(15deg);
    }
    50% {
        transform: rotate(-5deg);
    }
    25% {
        transform: rotate(15deg);
    }
    100% {
        transform: rotate(5deg);
    }
  }
}

.title-description {
    margin-top: 10vw;
    text-align: center;
    font-size: 1.7vw;
}

.beans {
    width: 4vw;
    position: absolute;
    z-index: 5;
}

#b1 {
    top: 28vw;
    left: 34vw;
}
#b2 {
    top: 10vw;
    left: 65vw;
    rotate: -100deg;
}
#b3 {
    top: 50vw;
    left: -2vw;
    width: 10vw;
    rotate: 80deg;
}

.beans:hover {
    animation: el-rotate 2s infinite;
  }
</style>
