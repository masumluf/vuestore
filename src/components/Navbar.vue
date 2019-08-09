<template>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand text-white">Store</a>
    <form @submit.prevent="formSearch" class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="keyword"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    }

  },
  methods: {
    formSearch(key) {
      this.$emit("searchKey", this.keyword)
    }
  }
}

</script>

<style>
</style>
