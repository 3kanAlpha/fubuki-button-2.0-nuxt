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
  const audio = new Audio(basePath + props.clipPath)
  audio.play()
}
</script>