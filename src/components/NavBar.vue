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
        </ul>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
import { useRouter } from 'vue-router'
const { push } = useRouter();

</script>