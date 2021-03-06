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
  name: "video2",
  data() {
    return {
      vOption: {
        type: 'application/x-mpegURL',
        src: 'https://stream.mux.com/aPYWcMi2fdhJdVPcndOQb7sFI3WOK1A00.m3u8',
        preload: true,
        autoplay: false,
        isLoop: false,
        poster:
          'https://images.mux.com/aPYWcMi2fdhJdVPcndOQb7sFI3WOK1A00/thumbnail.png',
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
