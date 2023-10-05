<template>
  <q-card class="video-card cursor-pointer" bordered>
    <a :href="'https://www.youtube.com/watch?v=' + videoId" target="_blank" rel="noreferrer">
      <q-img :src="'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg'" class="rounded-borders">
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