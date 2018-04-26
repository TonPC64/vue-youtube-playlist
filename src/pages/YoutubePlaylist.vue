<template>
  <div>
    <div class="dp-flex f-drt-row al-it-center" :key="index" v-for="(item, index) in searchResults.items">
      <img class="w-fit-content" :src="item.snippet.thumbnails.default.url" alt="">
      <span>{{item.snippet.title}}</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'YoutubePlaylist',
  data () {
    return {}
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
  },
  created () {
    this.search('avenger')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
