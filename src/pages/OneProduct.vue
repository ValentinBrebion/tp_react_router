<template>
    <h2>Product Details</h2>
    <div v-if="product" class="card">
        <img :src="imgPath" />
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.details }}</p>
          <p v-if="product.discountedPrice">Discounted Price: {{ priceDiscounted }}</p>
          <p>New Price: {{ priceForm }}</p>
        </div>
        <button class="btn btn-primary mt-5" @click="store.addToCart(product)">
            Ajouter au panier
        </button>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCurrency } from '../composables/useCurrency.js';
import { useCartStore } from '../stores/cart.js';

const store = useCartStore();
const { format, currency } = useCurrency({ currency: '$' });
const { params } = useRoute();

const product = computed(() => {
    const productId = parseInt(params.id);
    return store.products.find(prod => prod.id === productId);
});

const priceForm = computed(() => {
    if (product.value) {
        return format(product.value.price, currency);
    }
    return '';
});

const priceDiscounted = computed(() => {
    if (product.value && product.value.discountedPrice) {
        return `${format(product.value.discountedPrice, currency)} (Discounted)`;
    }
    return '';
});

// Compute the image path
const imgPath = computed(() => {
    if (product.value) {
        return new URL(product.value.cover, import.meta.url).href;
    }
    return '';
});
</script>
