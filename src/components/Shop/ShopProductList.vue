<script setup lang="ts">
import ShopProduct from "./ShopProduct.vue";

defineProps({
  productList: Array,
});

const emit = defineEmits(["addProductToCart"]);
</script>

<template>
  <div class="grid">
    <ShopProduct
      v-for="(product, index) of productList"
      :product="product"
      :key="index"
      @add-product-to-cart="(productId) => emit('addProductToCart', productId)"
    />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 400px;
  gap: 20px;
}
</style>
