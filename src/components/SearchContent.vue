<template>
  <div class="h-56calc ovf-y-scroll">
    <div v-if="item.id.kind === 'youtube#video'" class="dp-flex f-drt-row al-it-center pd-10px cs-pointer" :key="index" v-for="(item, index) in searchResults.items">
      <img class="w-fit-content mg-10px" :src="item.snippet.thumbnails.default.url" alt="">
      <div class="dp-flex f-drt-column">
        <span>{{item.snippet.title}}</span>
        <button @click="addToPlaylist(item)" class="button w-fit-content is-primary" >Add to Playlist</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'searchResults'
    ])
  },
  methods: {
    ...mapActions([
      'addToPlaylist'
    ])
  }
}
</script>

<style scoped>
</style>
