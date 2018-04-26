<template>
  <div class="columns is-marginless">
    <div class="column is-paddingless">
      <Search/>
    </div>
    <div class="column is-paddingless">
      <div class="pd-10px">
        <Player :video="selected"/>
      </div>
      <div class="pd-10px">
        <Playlists :playlists=playlists />
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search'
import Player from '../components/Player'
import Playlists from '../components/Playlists'

import { mapGetters } from 'vuex'

export default {
  name: 'YoutubePlaylist',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'selected',
      'playlists'
    ])
  },
  components: {
    Search,
    Player,
    Playlists
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
