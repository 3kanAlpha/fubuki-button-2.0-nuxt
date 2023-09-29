<template>
  <q-btn unelevated rounded :label="label" @click="playAudioClip" class="audio-button q-ma-xs" />
</template>

<script setup>
const props = defineProps({
  label: String,
  audioPath: String
})

function playAudioClip() {
  const basePath = '/voices/'
  const audio = new Audio(basePath + props.audioPath)
  audio.play()
}
</script>

<style scoped>
.audio-button {
  background-color: #6bb8f6;
  color: #fff;
  transition: .3s all;
}

.audio-button:hover {
  transform: scale(1.02);
  transition: .3s all;
}
</style>