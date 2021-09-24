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
  name: "video1",
  data() {
    return {
      vOption: {
        type: 'application/x-mpegURL',
        src: 'https://stream.mux.com/GvgMD02G02mv0200fDiP71cLF9RrbRlEq8V9.m3u8',
        preload: true,
        autoplay: false,
        isLoop: false,
        poster:
          'https://tom.imgix.net/zeek_tmnt.jpg?w=400&auto=format,compress',
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
