<template>
  <div>
    <vue-headful title="Playlist | PlayMo" />
    <br />
    <v-container>
      <v-col v-if="error" sm="12" offset-lg="3" lg="7">
        <h2>{{ errorMessage }}</h2>
      </v-col>

      <v-col v-else sm="12" offset-lg="3" lg="7">
        <horizontal-playlist-card :playlist="playlist" />
        <playlist-table :tracklist="playlist.tracks" />
      </v-col>
    </v-container>
  </div>
</template>

<script>
import { dbPlaylistsRef } from "../firebase";

import HorizontalPlaylistCard from "../components/Cards/HorizontalPlaylistCard.vue";
import PlaylistTable from "../components/Tables/PlaylistTable.vue";

export default {
  name: "Playlist",
  components: {
    HorizontalPlaylistCard,
    PlaylistTable,
  },
  data() {
    return {
      playlist: {},
      error: false,
      errorMessage: "",
    };
  },
  created() {
    dbPlaylistsRef
      .doc(this.$route.params.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.playlist = doc.data();
          return;
        }
        this.error = true;
        this.errorMessage = "Playlist not found";
        return;
      })
      .catch(() => {
        this.error = true;
        this.errorMessage = "Playlist not found";
        return;
      });
  },
};
</script>
