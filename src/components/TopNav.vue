<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>PlayMo</v-toolbar-title>
      <v-spacer></v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn text @click.stop="drawer = !drawer">
          <v-icon small>fas fa-bars</v-icon>
        </v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn v-for="item in navItems" :key="item.name" :to="item.link" text>
          <v-icon left small>fa-{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item v-for="item in navItems" :key="item.title" :to="item.link" link>
          <v-list-item-icon>
            <v-icon small left>fa-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      drawer: false,
      navItems: [
        { title: "Home", link: "/", icon: "home" },
        { title: "Log In", link: "/login", icon: "sign-in-alt" },
      ],
    };
  },
};
</script>
