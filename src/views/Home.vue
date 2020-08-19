<template>
  <div>
    <vue-headful title="Home | PlayMo" />
    <app-header />
    <v-container>
      <v-row>
        <v-col
          sm="6"
          md="3"
          offset-lg="1"
          v-for="playlist in playlists.slice(0, 9)"
          :key="playlist.id"
        >
          <v-sheet v-if="loading === true" class="px-3 pt-3 pb-3">
            <v-skeleton-loader :loading="loading" class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
          </v-sheet>
          <playlist-card v-show="loaded === true" :playlist="playlist" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";

import Header from "../components/Home/Header.vue";
import PlaylistCard from "../components/Cards/PlaylistCard.vue";

export default {
  name: "Home",
  created() {
    const readyHandler = () => {
      if (document.readyState == "complete") {
        this.loading = false;
        this.loaded = true;
        document.removeEventListener("readystatechange", readyHandler);
      }
    };

    document.addEventListener("readystatechange", readyHandler);
    readyHandler();
  },
  components: {
    appHeader: Header,
    PlaylistCard,
  },
  computed: {
    ...mapGetters(["playlists"]),
  },
};
</script>
