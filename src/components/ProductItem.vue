<template>
    <div class="card">
        <img :src="imgPath"  />
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.details }}</p>
          <p :class="{'Remise': props.product.discountedPrice}" v-if="product.discountedPrice">Prix : {{ priceDiscounted }} </p>
          <p class="AfterRemise">Nouveau prix : {{ priceForm }} </p>
          <div class="card-actions">
            <RouterLink
                class="btn btn-primary"
                :to="{ name: '/product', params: { id: props.product.id } }"
            >
	        Commander
            </RouterLink>
          </div>
        </div>
      </div>
</template>
<script setup>
 import { computed } from 'vue'
 import { useCurrency } from '../composables/useCurrency.js'
 const { format, currency } = useCurrency({currency: '$'});
 const imgPath = computed(() => new URL(props.product.cover, import.meta.url).href);
 const props = defineProps({
    product : {
        type: Object
    }
})
const priceForm = format(props.product.price, currency);
 //const price = computed(() => `${props.product.price}€`);
 const priceDiscounted = computed(() => `${props.product.discountedPrice}€`);
</script>