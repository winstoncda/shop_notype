<script setup>
import ShopProductList from "./ShopProductList.vue";

// récupération des données transmises depuis App
// nous récupérons un tableau de produits
defineProps({
  productList: Array,
});
</script>

<template>
  <div class="p-20">
    <ShopProductList :productList="productList" />
  </div>
</template>
