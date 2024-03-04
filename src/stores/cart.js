import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: [],
		products: [
            {
                id: 1,
                name: 'Canapé jaune',
                cover: '../assets/canape-jaune.png',
                details: 'Livraison sous 2 semaines',
                price: 400,
                discountedPrice: 250,
                disabled: true
              },
              {
                id: 2,
                name: 'Chaise bois',
                cover: '../assets/chaise-bois.png',
                details: 'Livraison sous 3 jours',
                price: 299,
                disabled: true
              },
              {
                id: 3,
                name: 'Fauteuil jaune',
                cover: '../assets/fauteuil-jaune.png',
                details: 'Rupture de stock',
                price: 500,
                discountedPrice: 250,
                disabled: true
              }
        ]
	}),
    getters: {
		cartLength: (state) => state.cart.length
	},
    actions: {
		addToCart(product) {
      this.cart.push(product)
    },
	}
});