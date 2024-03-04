<template>
    <h1>Panier</h1>
    <table class="table">
        <tbody>
            <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prix</th>
                <th scope="col">Quantité</th>
                <th scope="col">Supprimé</th>
            </tr>
            <tr v-for="(cartStore, index) in store.cart" :key="index">
                <th scope="row">{{ cartStore.name }}</th>
                <td>{{ cartStore.price }}</td>
                <td><input type="number" id="tentacles" name="tentacles" min="0" max="100" /></td>
                <td><button @click="store.deleteProduct(product)"><img src="../assets/poubelle.png" style="width: 30px; height: 30px;"></button></td>
            </tr>
        </tbody>
    </table>
    <h1>Prix total avant remise</h1> : 
</template>

<script>
import { useCartStore } from '../stores/cart.js';

export default {
    setup() {
        const store = useCartStore();
        return {
            store
        };
    }
};
</script>

<style>
.table {
    display: flex;
    flex-direction: row;
    width:100%;
}
</style>
