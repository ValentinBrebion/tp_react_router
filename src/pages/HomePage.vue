<script setup>
 import ProductItem from '../components/ProductItem.vue';
 const props = defineProps({
	products: {
		type: Array
	}
});

</script>

<template>
    <section class="list">
    <ProductItem 
      v-for="product in props.products"
      :key="product"
      :product="product"
      />
    </section>
</template>