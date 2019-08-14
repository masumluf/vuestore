<template>
  <div v-if="item" class="row">
    <div class="col-sm-6">
      <img :src="item.photo" alt="Photo" />
    </div>
    <div class="col-sm-6">
      <h4>{{ item.title}}</h4>
      <p>{{item.description}}</p>
      <p>${{item.price}}</p>
      <a @click="addItemtoCart(item)" class="btn btn-primary">+Add</a>
    </div>
  </div>
  <h1 v-else>Loading data</h1>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      item: null
    }
  },
  mounted() {
    this.fetchItem()

  },
  methods: {
    fetchItem() {
      var self = this
      axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response => {
        self.item = response.data

      })
    },
    addItemtoCart(item) {
      this.$store.commit('addToCart', item)
    }
  }
}
</script>

<style>
</style>
