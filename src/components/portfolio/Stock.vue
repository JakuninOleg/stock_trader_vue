<template>
  <div class="stocks__card">
    <div class="stocks__card-header stocks__card-header--sell">
      <h3 class="heading-3">{{stock.name}} Price: ${{stock.price}} | Quantity: {{ stock.quantity }}</h3>
    </div>
    <div class="stocks__card-body">
      <input
        type="number"
        placeholder="Quantity"
        class="input"
        v-model.number="quantity"
        @focus="clearInput"
        @blur="returnInput"
      />
      <button
        class="btn btn--sell"
        @click="sellStock"
        :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(Number(quantity))"
      >{{ insufficientQuantity ? 'Too much' : 'Sell' }}</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    },
    insufficientQuantity() {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    },
    clearInput() {
      this.quantity = "";
    },
    returnInput() {
      if (this.quantity <= 0) this.quantity = 0;
    }
  }
};
</script>

<style lang="scss">
.btn--sell {
  background: #63B3ED;

      &:disabled {
      background-color: rgba(#63B3ED, 0.7);
    }
}
</style>

