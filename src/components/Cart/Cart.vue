<script setup>
import CartProductList from "./CartProductList.vue";
defineProps({
  cartList: Array,
});
const emit = defineEmits(["removeProductFromCart"]);
</script>

<template>
  <div class="p-20">
    <h2 class="mb-10">Panier</h2>
    <CartProductList
      :cartList="cartList"
      @remove-product-from-cart="
        (productId) => emit('removeProductFromCart', productId)
      "
    />
  </div>
</template>

<style lang="scss" scoped></style>
