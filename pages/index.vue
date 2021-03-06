<template>
  <div class="app">
    <h2 class="text-center text-xl p-4">HLS Videos in Nuxt from Mux</h2>
    <div class="flex">
      <video1 class="p-4"/>
      <video2 class="p-4"/>
      <video3 class="p-4"/>
    </div>
  </div>
</template>

<script>
import video1 from "@/components/video1.vue";
import video2 from "@/components/video2.vue";
import video3 from "@/components/video3.vue";

export default {
  components: {
    video1,
    video2,
    video3
  }
}
</script>
<style>
.player {
  width: 400px;
  margin: 0 auto;
  min-height: 30px;
}
</style>
