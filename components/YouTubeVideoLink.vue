<template>
  <q-card class="video-card" bordered>
    <a :href="'https://www.youtube.com/watch?v=' + videoId" target="_blank" rel="noreferrer">
      <q-img :src="'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg'">
        <div class="absolute-bottom text-subtitle2 text-center">
          {{ videoTitle }}
        </div>
      </q-img>
    </a>
  </q-card>
</template>

<script setup>
const props = defineProps({
  videoId: String,
  videoTitle: String,
})
</script>

<style lang="scss" scoped>
.video-card {
  max-width: 720px;
}
</style>