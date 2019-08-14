<template>
  <div id="app">
    <!-- <router-link :to="{path:'/'}">Home</router-link>
    <router-link :to="{path:'/about/1'}">About 1</router-link>
    <router-link :to="{path:'/about/2'}">About 2</router-link>
    <router-link :to="{path:'/about/3'}">About 3</router-link>
    <router-link :to="{path:'/about/4'}">About 4</router-link>

    <router-view></router-view>-->

    <div id="app">
      <navbar @searchKey="search"></navbar>
      <div class="row mainappbody">
        <div class="col-9">
          <router-view></router-view>
          <!-- <inventory @newItemClick="addCartItem" :items="items"></inventory> -->
        </div>

        <div class="col-3">
          <cart @itemRemoved="removeItem" :cartItem="cart"></cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Inventory from './components/views/Inventory'
import Cart from './components/Cart'
import data from './data/data.js'

export default {
  name: 'App',
  components: {
    Navbar,
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
    },
    removeItem(index) {
      this.cart.splice(index, 1)
    },
    search(key) {
      //console.log(key);
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(key.toLowerCase()) !== -1;
      })
    }
  }
}
</script>

<style>
</style>
