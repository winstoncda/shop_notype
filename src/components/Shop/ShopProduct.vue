<script setup lang="ts"></script>

<template>
  <div class="product d-flex flex-column">
    <div class="product-image"></div>
    <div class="p-10 d-flex flex-column">
      <h4>Mac Book Pro</h4>
      <p>
        Lorem, ipsum dolor. Nisi, quibusdam cum? Commodi, harum voluptatibus?
      </p>
      <div class="d-flex flex-row align-items-center">
        <strong class="flex-fill">Prix: 1500€</strong>
        <button class="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  background-color: #fff;
  border: var(--border-radius);
  &-image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    background-image: url(../../assets/macbook.jpg);
    background-size: cover;
    background-position: center;
    height: 250px;
  }
}
</style>
