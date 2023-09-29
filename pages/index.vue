<template>
  <NuxtLayout>
    <q-layout style="min-height: 500px">
      <AudioClipGroup v-for="group in groups" :group="group" />
    </q-layout>
  </NuxtLayout>
</template>

<script>
import AudioClipGroup from '../components/AudioClipGroup.vue';
import voices from '~/assets/voices_old.json';

export default {
  data() {
    return {
      groups: voices.groups
    }
  },
  head() {
    return {
      title: this.$t('site.title') + '(^・ω・^§)ﾉ',
    }
  }
}
</script>