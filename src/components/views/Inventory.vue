<template>
  <div v-if="!loading" class="row">
    <div
      v-for="(item,index) in items"
      :key="index"
      class="card inventory-space"
      style="width: 18rem;"
    >
      <router-link tag="div" :to="{path:'/item/' +item.id}">
        <img :src="item.photo" class="card-img-top inventory-space-img" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
        </div>
      </router-link>
      <p class="card-text">{{item.price}}</p>
      <a @click="addItemtoCart(item)" class="btn btn-primary">+Add</a>
    </div>
  </div>
  <h1 v-else>Loading....</h1>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      loading: true,
      items: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    addItemtoCart(item) {
      this.$store.commit('checkItem', item)

    },
    fetchData() {
      var self = this;
      axios.get('http://localhost:3000/items').then(res => {
        self.items = res.data;
        self.loading = false
      })
    }
  }

}
</script>

<style>
</style>
