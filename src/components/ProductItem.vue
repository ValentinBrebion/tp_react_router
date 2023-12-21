<script setup>
import { useCurrency } from '@/composables/useCurrency';
import { computed } from 'vue'

const { format, change } = useCurrency({ currency: '€' });

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const imgPath = computed(() => new URL(props.product.cover, import.meta.url).href);

const discountedPrice = format(props.product.discountedPrice);
const price = format(props.product.price);

// To test currency changes
setTimeout(() => change('$'), 5000);
</script>

<template>
  <div class="card">
    <img :src="imgPath" :alt="props.product.name" />
    <div class="card-body">
      <h2 class="card-title">{{ props.product.name }}</h2>
      <p>{{ props.product.details }}</p>
      <div class="card-actions justify-between">
        <div class="flex">
          <p v-if="props.product.discountedPrice" class="text-4xl">
            {{ discountedPrice }}
          </p>
          <p
            :class="{
              'text-4xl': !props.product.discountedPrice,
              'line-through': props.product.discountedPrice
            }"
          >
            {{ price }}
          </p>
        </div>
        <button class="btn btn-primary" :disabled="!props.product.price">Commander</button>
      </div>
    </div>
  </div>
</template>
