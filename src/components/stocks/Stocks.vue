<template>
  <section class="stocks">
    <div class="stocks__grid">
      <app-stock v-for="stock in stocks" :key="stock.name" :stock="stock"></app-stock>
    </div>
  </section>
</template>

<script>
import Stock from './Stock.vue';

export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style lang="scss">
.stocks {
  padding-top: 5rem;
}

.stocks__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 5rem;
}
</style>
