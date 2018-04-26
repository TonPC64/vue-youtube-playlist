<template>
  <div class="columns">
    <div class="column">
      <Search/>
    </div>
    <div class="column">
      <div>
        <Player/>
      </div>
      <div>
        <Playlists/>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search'
import Player from '../components/Player'
import Playlists from '../components/Playlists'

export default {
  name: 'YoutubePlaylist',
  data () {
    return {}
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
