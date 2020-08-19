<template>
  <v-app>
    <TopNav />
    <br />
    <br />
    <router-view></router-view>
  </v-app>
</template>

<script>
import { dbPlaylistsRef } from "./firebase";
import TopNav from "./components/TopNav";

export default {
  name: "App",
  components: {
    TopNav,
  },
  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch("setPlaylistsRef", dbPlaylistsRef);
  },
};
</script>


<style>
body {
  overflow: hidden;
}
</style>
