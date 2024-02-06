<template>
    <h2>un product</h2>
    <div class="card">
        <img :src="imgPath"  />
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.details }}</p>
          <p :class="{'Remise': product.discountedPrice}" v-if="product.discountedPrice">Prix : {{ priceDiscounted }} </p>
          <p class="AfterRemise">Nouveau prix : {{ priceForm }} </p>
        </div>
      </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCurrency } from '../composables/useCurrency.js';

const props = defineProps({
    products: {
        type: Array
    }
});

const { format, currency } = useCurrency({ currency: '$' });
const { params } = useRoute();

const product = computed(() => {
    const productId = parseInt(params.id); 
    return props.products.find(prod => prod.id === productId);
});

const priceForm = format(product.value.price, currency);
const priceDiscounted = computed(() => `${product.value.discountedPrice}€`);
const imgPath = computed(() => new URL(product.value.cover, import.meta.url).href);
</script>
