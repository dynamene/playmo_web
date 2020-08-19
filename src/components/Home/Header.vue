<template>
  <v-sheet :height="sheetHeight">
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <h1 class="text-center display-1 hidden-sm-and-up">Welcome To PlayMo</h1>
        <h1 class="text-center display-4 hidden-xs-only">Welcome To PlayMo</h1>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "Header",
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100px";
        case "sm":
        case "md":
        case "lg":
          return "200px";
        case "xl":
          return "250px";
      }
      return "250px";
    },
  },
};
</script>
