<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <span
        >{{ product.title }} - <i class="price"> ¥{{ product.price }}</i></span
      >
      <br />
      <button :disabled="product.canAdd == 0" @click="desCanNumber(product.id)">
        -
      </button>
      {{ product.canAdd }}
      <button
        :disabled="product.canAdd == product.inventory"
        @click="addCanNumber(product.id)"
      >
        +
      </button>
      <button
        class="addprod"
        :disabled="!product.inventory || !product.canAdd"
        @click="addProductToCart(product)"
      >
        加入购物车
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  //将store中的products module的all赋值给当前页面的products
  computed: mapState({
    products: (state) => state.products.all,
  }),
  // mapActions 调用cart中的addProductToCart action
  // 用mapMutations来找到对应命名空间products中的两个mutation
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    ...mapMutations("products", {
      desCanNumber: "productDesCanNumber",
      addCanNumber: "productAddCanNumber",
    }),
  },
  created() {
    //进来调用dispatch调用getAllProducts action
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>

<style>
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  margin-top: 15px;
}
.price {
  color: red;
  font-style: normal;
  font-size: 18px;
}
.addprod {
  margin-left: 10px;
}
</style>