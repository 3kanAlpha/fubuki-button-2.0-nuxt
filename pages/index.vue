<template>
  <NuxtLayout>
    <q-layout style="min-height: 500px">
      <AudioClipGroup v-for="group in groups" :group="group" />
      <div class="footer-area q-pa-md">
        <div>
          <span>&copy; {{ new Date().getFullYear() }} </span>
          <span>
            <a href="https://github.com/3kanAlpha" target="_blank" rel="noreferrer">
              まぐ
            </a>
          </span>
          <q-btn flat round icon="img:img/github.svg" href="https://github.com/3kanAlpha/fubuki-button-2.0-nuxt" target="_blank" />
        </div>
        <div>
          <p>
            このサイトは非公式に運営されているものであり、ホロライブ公式とは関係ありません。
          </p>
        </div>
      </div>
    </q-layout>
  </NuxtLayout>
</template>

<script>
import AudioClipGroup from '../components/AudioClipGroup.vue';
import voices from '~/assets/voices.json';

export default {
  data() {
    return {
      groups: voices.groups
    }
  }
}
</script>