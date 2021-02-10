<template>
  <div class="cart">
    <p v-show="!products.length">
      <i>请添加产品到购物车</i>
    </p>
    <ul>
      <li v-for="product in products" :key="product.id">
        <span
          >{{ product.title }} -
          <i class="price"> ¥{{ product.price }}</i></span
        >
        x {{ product.quantity }}
      </li>
    </ul>
    <p>合计: ¥{{ total }}</p>
    <p>
      <button :disabled="!products.length" @click="checkout(products)">
        提交
      </button>
    </p>
    <p>
      <span class="success" v-show="checkoutStatus === 'success'"
        >支付成功</span
      >
      <span class="fail" v-show="checkoutStatus === 'fail'"
        >支付失败，请重新提交</span
      >
    </p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.cart.checkoutStatus,
    }),
    ...mapGetters("cart", {
      products: "cartProdcuts",
      total: "cartTotalPrice",
    }),
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    },
  },
};
</script>

<style>
.fail {
  color: red;
}
.success {
  color: green;
}
</style>