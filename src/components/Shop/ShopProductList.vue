<script setup lang="ts">
import ShopProduct from "./ShopProduct.vue";

defineProps({
  productList: Array,
});
</script>

<template>
  <div class="grid">
    <ShopProduct />
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
