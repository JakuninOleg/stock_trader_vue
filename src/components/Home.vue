<template>
  <section class="home">
    <h1>Trade or view your portfolio</h1>
    <h4>You may Save & Load your Data</h4>
    <h4>Click End Day to begin a new day!</h4>
    <h3>Your funds: <span class="funds">$ {{ funds }}</span></h3>
  </section>
</template>

<script>
export default {
  computed: {
    funds() {
      let funds = this.$store.getters.funds
      return funds.toLocaleString();
    }
  }
};
</script>

<style lang="scss">
.home {
  line-height: 2;
  font-size: 1.8rem;
  padding: 5rem 0;
}

.funds {
  padding: 0 .5rem;
}
</style>
