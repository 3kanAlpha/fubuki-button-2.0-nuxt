<template>
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="text-white gradient-header">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          フブキボタン(^・ω・^§)ﾉ
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <!-- drawer content -->
      <q-list link>
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="mdi-apps" />
          </q-item-section>
          <q-item-section>
            サイトトップ
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple href="https://www.youtube.com/@ShirakamiFubuki" target="_blank">
          <q-item-section avatar>
            <q-icon name="img:img/youtube.svg" class="youtube-icon" />
          </q-item-section>
          <q-item-section>
            YouTube
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple href="https://twitter.com/shirakamifubuki" target="_blank">
          <q-item-section avatar>
            <q-icon name="img:img/twitter.svg" class="twitter-icon" />
          </q-item-section>
          <q-item-section>
            Twitter (X)
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-ripple to="/about">
          <q-item-section avatar>
            <q-icon name="mdi-code-tags" />
          </q-item-section>
          <q-item-section>
            このサイトについて（工事中）
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <slot />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(true)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>