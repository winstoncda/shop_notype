<script setup>
import CartProduct from "./CartProduct.vue";

defineProps({
  cartList: Array,
});
const emit = defineEmits(["removeProductFromCart"]);
</script>

<template>
  <div>
    <CartProduct
      v-for="product of cartList"
      :product="product"
      @remove-product-from-cart="
        (productId) => emit('removeProductFromCart', productId)
      "
    />
  </div>
</template>

<style lang="scss" scoped></style>
