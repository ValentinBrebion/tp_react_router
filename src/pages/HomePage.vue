<script setup>
 import ProductItem from '../components/ProductItem.vue';
 import { useCartStore } from '../stores/cart'

const store = useCartStore()

</script>

<template>
    <section class="list">
      <ProductItem v-for="product in store.products" :key="product" :product="product"></ProductItem>
    </section>
</template>