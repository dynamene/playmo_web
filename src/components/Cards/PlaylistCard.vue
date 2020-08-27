<template>
  <v-card>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>

    <v-card-title>
      <div class="headerClass">{{playlist.name}}</div>
    </v-card-title>
    <v-card-subtitle>
      Tracks: {{ playlist.tracks.length }}
      <br />
      Duration: {{ duration | seconds }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn class="green--text" text :to="`/playlist/${playlist.id}`">TrackList</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon v-if="playlist.description" @click="show = !show">
        <v-icon class="green--text" small>{{ show ? 'fa-chevron-up' : 'fa-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div class="pa-3" v-show="show">
        <v-divider></v-divider>
        <br />
        <p class="display-5">{{ playlist.description }}</p>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "PlaylistCard",
  computed: {
    duration() {
      const time = this.playlist.tracks.reduce((a, b) => ({
        duration: a.duration + b.duration,
      }));
      return time.duration;
    },
  },
  data() {
    return {
      show: false,
      loading: true,
      loaded: false,
    };
  },
  props: {
    playlist: Object,
  },
};
</script>

<style scoped>
.headerClass {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
