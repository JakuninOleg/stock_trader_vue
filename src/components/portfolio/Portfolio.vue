<template>
  <section class="stocks">
    <div class="stocks__grid">
      <app-stock v-for="stock in stockPortfolio" :key="stock.name" :stock="stock"></app-stock>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters(["stockPortfolio"])
  },
  components: {
    appStock: stock
  }
};
</script>
