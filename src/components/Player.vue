<template>
  <div >
    <div class="dp-flex f-drt-column al-it-center">
      <youtube :video-id="videoId"></youtube>
    </div>
    {{title}}
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => { return {} }
    }
  },
  computed: {
    videoId () {
      return this.video && this.video.id ? this.video.id.videoId : ''
    },
    title () {
      return this.video && this.video.id ? this.video.snippet.title : ''
    }
  }
}
</script>
