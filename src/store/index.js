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
      if (state.cart.length === 0) {
        state.cart.push(item)
        return true
      }

      state.cart.forEach(c => {
        if (c.id === item.id) {
          console.log('already added')
          return false
        } else {
          console.log('i triggered')
          state.cart.push(item)
        }
      })
      //console.log(state.cart);
      //return result

    },
    logdata() {
      console.log(state.cart);
    }
  }
}
