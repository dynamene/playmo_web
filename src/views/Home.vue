<template>
  <div>
    <app-header />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Home/Header.vue";

export default {
  name: "Home",
  components: {
    appHeader: Header,
  },
};
</script>
