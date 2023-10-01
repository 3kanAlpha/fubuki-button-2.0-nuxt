<template>
  <q-card class="card-area q-ma-md liveinfo-card">
    <q-card-section>
      <div class="text-h6">
        <q-icon name="mdi-clock-outline" size="1.2em" color="primary" />
        ライブ配信情報
      </div>
    </q-card-section>

    <q-card-section>
      <Transition appear name="liveinfo">
        <div v-if="!pending">
          <div v-if="error" class="text-red">
            <q-icon name="mdi-alert-outline" size="1.1em" color="red" />
            配信情報の取得に失敗しました。
          </div>
          <div v-else>
            <div v-if="apiResponse.live.length > 0">
              <span class="text-body1">
                <q-icon name="mdi-play-circle-outline" size="1.1em" color="red" />
                現在配信中のライブストリーム
              </span>
              <div class="q-pa-md q-gutter-md">
                <YouTubeVideoLink v-for="activeLive in apiResponse.live" :video-id="activeLive.id.videoId" :video-title="activeLive.snippet.title" />
              </div>
            </div>
            <div v-else-if="apiResponse.upcoming.length > 0">
              <span class="text-body1">
                <q-icon name="mdi-clock-edit-outline" size="1.1em" color="green" />
                現在予定されているライブストリーム
              </span>
              <div class="q-pa-md q-gutter-md">
                <YouTubeVideoLink v-for="upcomingLive in apiResponse.upcoming" :video-id="upcomingLive.id.videoId" :video-title="upcomingLive.snippet.title" />
              </div>
            </div>
            <div v-else>
              予定されているライブ配信はありません。
            </div>
            <p class="text-caption">
              ※ {{ apiResponse.timestamp }} 時点の情報です。
            </p>
          </div>
        </div>
      </Transition>
    </q-card-section>

    <q-inner-loading
      :showing="pending"
      label="Please wait..."
      label-class="text-cyan"
      label-style="font-size: 1.1em"
    />
  </q-card>
</template>

<script setup>
const queryUrl = 'https://fubuki-api.fly.dev/fubuki/live'

const { data: apiResponse, pending, error, refresh } = await useFetch(queryUrl, {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  },
  cache: 'no-cache'
})
</script>

<style lang="scss" scoped>
.q-card {
  min-height: 100px;
}

.liveinfo-enter-active {
  transition: all 0.5s ease-in;
}

.liveinfo-enter-from {
  opacity: 0;
}
</style>