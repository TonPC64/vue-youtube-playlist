<template>
  <div>
    <div :key="index" v-for="(item, index) in playlists">
      <img class="w-fit-content mg-10px" @click="selectVideo(item)" :src="item.snippet.thumbnails.default.url" alt="">
        <div class="dp-flex f-drt-column">
          <span>{{item.snippet.title}}</span>
          <button @click="removeFromPlaylist(index)" class="button w-fit-content is-danger" >Remove From Playlist</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    playlists: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions([
      'removeFromPlaylist'
    ])
  }
}
</script>
