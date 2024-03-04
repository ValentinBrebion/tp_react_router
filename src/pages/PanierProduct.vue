<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cart.js'
const store = useCartStore()

const itemsCart = computed(() => {
  let result = {}
  store.cart.forEach((product) => {
    if (result[product.id]) {
      result[product.id].quantity++
    } else {
      result[product.id] = {
        ...product,
        quantity: 1
      }
    }
  })

  return result
})
</script>
<template>
	<h2>Votre Panier</h2>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Produit</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in itemsCart" :key="item.id">
          <td>
            <div class="font-bold">{{ item.name }}</div>
          </td>
          <td>
            <p
              v-if="item.discountedPrice"
              class="text-lg font-bold text-blue-500 dark:text-gray-400"
            >
              {{ format(item.discountedPrice).value }}
            </p>
            <span
              class="text-gray-500 dark:text-gray-400"
              :class="{
                'text-lg font-bold': !item.discountedPrice,
                'line-through text-xs': item.discountedPrice
              }"
              >{{ format(item.price).value }}
            </span>
          </td>
          <td>
            <div class="flex items-center justify-items-center">
              <button class="btn" @click="store.removeOneFromCart(item.id)">-</button>
              <span class="w-8 block text-center">
                {{ item.quantity }}
              </span>
              <button class="btn" @click="store.addToCart(item)">+</button>
            </div>
          </td>
          <th>
            <button class="btn btn-ghost" @click="store.removeAllFromCart(item.id)">
              <IconTrash></IconTrash>
            </button>
          </th>
        </tr>
      </tbody>
			<tfoot>
        <tr>
          <th></th>
          <th></th>
          <th>Prix total avant remise</th>
          <th>{{ format(store.totalRawCart).value }}</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>Prix total avec remise</th>
          <th>{{ format(store.totalCart).value }}</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>