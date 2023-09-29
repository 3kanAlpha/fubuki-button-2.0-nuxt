<template>
  <q-btn unelevated rounded color="primary" :label="label" @click="playAudioClip" />
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