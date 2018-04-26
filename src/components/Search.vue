<template>
  <div>
    <b-input class="pd-10px" placeholder="Search" v-model="keyword" @keyup.enter.native="search(keyword)"></b-input>
    <div class="h-56calc ovf-y-scroll">
      <div class="dp-flex f-drt-row al-it-center pd-10px" :key="index" v-for="(item, index) in searchResults.items">
        <img class="w-fit-content" :src="item.snippet.thumbnails.default.url" alt="">
        <span>{{item.snippet.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      keyword: ''
    }
  },
  computed: {
    ...mapGetters([
      'searchResults'
    ])
  },
  methods: {
    ...mapActions([
      'search'
    ])
  }
}
</script>
