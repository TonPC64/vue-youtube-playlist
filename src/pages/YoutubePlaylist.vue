<template>
  <div class="columns">
    <div class="column">
      <Search/>
    </div>
    <div class="column">
      Player
    </div>
  </div>
</template>

<script>
import Search from '../components/Search'
export default {
  name: 'YoutubePlaylist',
  data () {
    return {}
  },
  components: {
    Search
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
