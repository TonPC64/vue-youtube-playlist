<template>
  <div class="h-100pct dp-flex f-drt-column jtf-ct-center">
    <youtube
      v-if="videoId !== ''"
      class="f-left w-100pct"
      :video-id="videoId"
      @ended="ended()"
      :player-vars="{ autoplay: 1 }"
      player-width="100%">
    </youtube>
    <h3 
      v-else 
      class="title t-al-center">
      No video selected
    </h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    video: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    ...mapGetters([
      'playlists'
    ]),
    videoId () {
      return this.video && this.video.id ? this.video.id.videoId : ''
    },
    title () {
      return this.video && this.video.id ? this.video.snippet.title : ''
    }
  },
  methods: {
    ...mapActions([
      'removeFromPlaylist',
      'selectVideo'
    ]),
    async ended () {
      await this.removeFromPlaylist(0)
      await this.selectVideo({})
      if (this.playlists.length) {
        await this.selectVideo(this.playlists[0])
      }
    }
  }
}
</script>
