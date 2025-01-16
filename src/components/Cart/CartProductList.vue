<script setup lang="ts">
import CartProduct from "./CartProduct.vue";

defineProps({
  cartList: Array,
});
</script>

<template>
  <div>
    <CartProduct v-for="product of cartList" :product="product" />
  </div>
</template>

<style lang="scss" scoped></style>
