<template>
  <ul class="list-group ulfixed">
    <li class="list-group-item bg-success">
      <span class="item-name text-white">Item Name</span>
      <span class="item-price float-right text-white">Price</span>
    </li>

    <hr />

    <li v-for="(item, index) in items" :key="index" class="list-group-item">
      <span class="item-name">{{item.title}}</span>
      <span class="item-price float-right">{{item.price}}</span>
      <a href @click.prevent="itemRemove(index)">Remove</a>
    </li>

    <hr />

    <li class="list-group-item bg-primary text-white">
      <span class="item-name">Total</span>
      <span class="item-price float-right">${{totalPrice}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  mounted() { },
  computed: {
    items() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      let total = 0
      this.items.forEach(e => {
        // let spl = e.price.split('$');
        // let finalspl = parseFloat(spl[1]);

        total += parseFloat(e.price)
      })


      return total.toFixed(2)
    }
  },
  methods: {
    itemRemove(index) {
      this.$store.commit('itemRemoved', index);
    }
  },
}
</script>

<style>
</style>
