export const storeage = {
  state: {
    inventory: [],
    cart: []
  },
  getters: {
    getInventory(state) {
      return state.inventory
    },
    getCart(state) {
      return state.cart
    }
  },
  mutations: {
    // addToCart(store, payload) {
    //   store.cart.push(payload)
    // },
    itemRemoved(store, payload) {
      store.cart.splice(payload, 1)
    },
    checkItem(state, item) {
      // if (state.cart.length < 1) {
      //   state.cart.push(item)
      // }
      state.cart.forEach(c => {
        if (c.id === item.id) {
          console.log('item found');
        } else {
          state.cart.push(item)
        }
      })
      //console.log(state.cart);
      //return result
    }
  }
}
