<script setup>
import TheHeader from "./components/Header.vue";
import TheFooter from "./components/Footer.vue";
import Cart from "./components/Cart/Cart.vue";
import Shop from "./components/Shop/Shop.vue";
import { onMounted, reactive } from "vue";
import data from "./data/products";

// récupération des données depuis le fichier products dans data
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

// créer une fonction qui va ajouter des produits au panier
async function addProductToCart(productId) {
  // console.log(productId);
  try {
    // récupération du produit à ajouter au panier
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

// supprimer un article du panier
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
  <div class="app-container">
    <TheHeader class="header" />
    <!-- passage du tableau de produit -->
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
    <TheFooter class="footer" />
  </div>
</template>

<style lang="scss">
@use "./assets/base.scss" as *;
@use "./assets/debug.scss" as *;

.app-container {
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header header" "shop cart" " footer footer";
  grid-template-columns: 75% 25%;
  grid-template-rows: 48px auto 48px;
}

.header {
  grid-area: header;
}

.shop {
  grid-area: shop;
}

.cart {
  grid-area: cart;
  border-left: var(--border);
  background-color: #fff;
}

.footer {
  grid-area: footer;
}
</style>
