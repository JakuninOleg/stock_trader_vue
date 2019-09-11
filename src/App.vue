<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>


<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  line-height: 1.6;
}

main {
  padding: 0 15rem;
  // margin: 0 auto;
}

.heading-3 {
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 400;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
