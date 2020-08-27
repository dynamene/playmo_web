<template>
  <v-simple-table>
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Artists</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(track, i) in tracklist" :key="i">
        <td>
          <v-img :src="track.trackCover" height="50px" width="50px" class="rounded ma-1"></v-img>
        </td>
        <td>{{ track.title }}</td>
        <td>{{ track.contributors | contributors }}</td>
      </tr>
    </tbody>
  </v-simple-table>
</template>

<script>
export default {
  name: "PlaylistTable",
  props: {
    tracklist: Array,
  },
};
</script>
