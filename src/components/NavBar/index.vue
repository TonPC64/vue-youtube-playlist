<template>
  <nav class="navbar background-grey">
    <div class="container">
      <div class="navbar-brand logo dp-flex f-drt-column jtf-ct-center">
        VueTube
      </div>
      <div class="navbar-start">
        <div class="navbar-item">
          <b-input class="pd-10px column" placeholder="Search" v-model="keyword" @keyup.enter.native="search(keyword)"></b-input>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      keyword: ''
    }
  },
  methods: {
    ...mapActions([
      'search'
    ])
  },
  created () {
    this.search('')
  }
}
</script>

<style scoped>
.logo {
  font-size: 25px;
  font-weight: bold;
  color: white;
}
.background-grey {
  background-color: #131313
}
</style>
