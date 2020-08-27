<template>
  <v-card outlined min-width="100%" class="mb-5 pa-4">
    <div class="d-flex" v-if="!headerType">
      <div>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="130px"
          width="130px"
          class="rounded"
        />
      </div>
      <div class="d-flex flex-column justify-center">
        <v-card-title class="pt-0">{{ playlist.name }}</v-card-title>
        <v-card-subtitle>
          <strong>Tracks: {{ numTracks }}</strong>
          <br />
          <strong>{{ playlist.description }}</strong>
        </v-card-subtitle>
      </div>
    </div>
    <div v-if="headerType">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" class="rounded"></v-img>
      <v-card-title>
        <div class="headerClass">{{ playlist.name }}</div>
      </v-card-title>
      <v-card-subtitle>
        <strong>Tracks: {{ numTracks }}</strong>
        <br />
        <p>{{ playlist.description }}</p>
      </v-card-subtitle>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "HorizontalPlaylistCard",
  computed: {
    numTracks() {
      return this.playlist.tracks.length;
    },
    headerType() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
        case "sm":
          return true;
        case "md":
        case "lg":
        case "xl":
          return false;
      }

      return false;
    },
  },
  props: {
    playlist: Object,
  },
};
</script>
