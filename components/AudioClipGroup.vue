<template>
  <q-card class="card-area q-ma-md">
    <q-card-section>
      <div class="text-h6">{{ props.group.group_description['ja'] }}</div>
    </q-card-section>

    <q-card-section>
      <AudioClipButton v-for="voice in props.group.voice_list" :label="voice.description.ja" :audio-path="voice.path" />
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps(['group'])
</script>