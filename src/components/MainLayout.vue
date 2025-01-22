<script setup>
import Cart from "../components/Cart/Cart.vue";
import Shop from "../components/Shop/Shop.vue";
import { onMounted, reactive } from "vue";

let products = reactive([]);
const cart = reactive([]);

async function getProducts() {
  try {
    const response = await fetch("http://localhost:5000/");
    let data = await response.json();
    products.splice(0, products.length, ...data);
  } catch (error) {
    console.log(error);
  }
}

async function getCart() {
  try {
    const response = await fetch("http://localhost:5000/getCart");
    let data = await response.json();
    cart.splice(0, cart.length, ...data);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getProducts();
  getCart();
});

async function addProductToCart(productId) {
  try {
    const newProduct = products.find((product) => product.id === productId);
    await fetch("http://localhost:5000/addToCart", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await getCart();
  } catch (error) {
    console.log(error);
  }
}

async function removeProductFromCart(productId) {
  console.log(productId);
  try {
    const response = await fetch(
      `http://localhost:5000/deleteArticle/${productId}`,
      {
        method: "DELETE",
      }
    );
    await getCart();
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <Shop
    :productList="products"
    class="shop"
    @add-product-to-cart="addProductToCart"
  />
  <Cart
    @remove-product-from-cart="removeProductFromCart"
    :cartList="cart"
    class="cart"
  />
</template>

<style lang="scss"></style>
