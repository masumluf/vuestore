<template>
  <div class="row">
    <div
      v-for="(item,index) in items"
      :key="index"
      class="card inventory-space"
      style="width: 18rem;"
    >
      <img :src="item.photo" class="card-img-top inventory-space-img" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{item.title}}</h5>
        <p class="card-text">{{item.price}}</p>
        <a @click="addItemtoCart(item)" class="btn btn-primary">+Add</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    addItemtoCart(item) {
      this.$emit('newItemClick', item);
    }
  }
}
</script>

<style>
</style>
