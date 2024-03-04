<template>
    <div class="navbar bg-base-100">
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
            <li>
                <h2 @click="push({name: 'home'})">VueRouter</h2>
            </li>
            <li>
            <RouterLink to="/" class="btn btn-ghost "> Home </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="btn btn-ghost"> About </RouterLink>
          </li>
          <li>
            <RouterLink to="/panier" class="btn btn-ghost indicator">
              <span class="indicator-item badge badge-secondary">{{ store.cartLength }}</span>
              <img src="../../src/assets/panier.png" style="width: 30px; height: 30px;">
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
import { useRouter } from 'vue-router'
const { push } = useRouter();
import { useCartStore } from '../stores/cart'
const store = useCartStore()
</script>