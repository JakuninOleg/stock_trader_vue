<template>
  <div class="stocks__card">
    <div class="stocks__card-header stocks__card-header--buy">
      <h3 class="heading-3">{{stock.name}} (Price: ${{stock.price}})</h3>
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
        class="btn btn--success"
        @click="buyStock"
        :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(Number(quantity))"
      >{{ insufficientFunds ? 'No money' : 'Buy' }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
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
.stocks {
  &__card {
    // display: grid;
    // grid-template-rows: 50px 100px;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    overflow: hidden;
    // width: 200px;
  }

  &__card-header {
    grid-row: 1;

    padding: 1rem 2rem;
    display: grid;
    align-items: center;

    &--sell {
      background: #bee3f8;
    }

    &--buy {
      background: #c6f6d5;
    }
  }

  &__card-body {
    grid-row: 2;
    display: grid;
    align-items: center;
    grid-template-columns: minmax(250px, 2fr) 1fr;
    grid-gap: 1rem;
    padding: 3rem 2rem;
  }
}

.input {
  border: 1px solid #dff1ff;
  font-size: 1.6rem;
  padding: 1rem;
  width: 100%;
  // outline: none;
}

.btn {
  padding: 1.2rem 2rem;
  color: #f7fafc;
  border: 0.5px solid #cbd5e0;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 400;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  justify-self: end;
  // box-shadow: 0 .3rem 2rem rgba(black, 0.2);

  &:active {
    transform: translateY(1px);
    // box-shadow: 0 0.5rem 1.5rem rgba(black, 0.2);
  }

  &--success {
    background-color: #68d391;

    &:disabled {
      background-color: rgba(#68d391, 0.7);
    }
  }
}
</style>
