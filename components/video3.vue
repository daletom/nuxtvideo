<template>
  <div>
    <vplayer
      class="player"
      :player-options="vOption"
    />
  </div>
</template>

<script>
export default {
  name: "video3",
  data() {
    return {
      vOption: {
        type: 'application/x-mpegURL',
        src: 'https://stream.mux.com/7J4AjhgGLB510101NiuvK8uqIU7ZTDxiyt.m3u8',
        preload: true,
        autoplay: false,
        isLoop: false,
        poster:
          'https://images.mux.com/7J4AjhgGLB510101NiuvK8uqIU7ZTDxiyt/thumbnail.png',
        playsinline: true,
        title: 'will add',
        controls: 'progress,current,volume'
      }
    }
  },
}
</script>
<style>
.player {
  width: 400px;
  margin: 0 auto;
  min-height: 30px;
}
</style>
