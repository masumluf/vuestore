<template>
  <div id="app">
    <navbar></navbar>
    <div class="row mainappbody">
      <div class="col-9">
        <inventory @newItemClick="addCartItem" :items="items"></inventory>
      </div>

      <div class="col-3">
        <cart :cartItem="cart"></cart>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Inventory from './components/Inventory'
import Cart from './components/Cart'
import data from './data/data.js'

export default {
  name: 'App',
  components: {
    Navbar,
    Inventory,
    Cart
  },
  data() {
    return {
      items: [],
      cart: []
    }

  },
  mounted() {
    this.items = data;
  },
  methods: {
    addCartItem(item) {
      this.cart.push(item)
    }
  }
}
</script>

<style>
</style>
