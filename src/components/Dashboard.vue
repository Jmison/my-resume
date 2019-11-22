<template>
  <v-app id="inspire">

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-teach</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>More About Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-desktop-mac-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Check Out My Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-gesture-double-tap</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Get In Touch</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>

    <div>
        <p class="font-italic">Howdy there, I'm Jamison. An inspiring web-developer!</p>
    </div>

     <v-col class="text-left" cols="12" sm="4">
<!-- begininning of column -->
      <div class="my-2">
        <v-btn text large>
           <span class="caption text-lowercase">
             <v-icon left>mdi-send-outline</v-icon>
             find out more about me
             </span>
        </v-btn>
      </div>

      <div class="my-2">
        <v-btn text large>
           <span class="caption text-lowercase">
             <v-icon left>mdi-send-outline</v-icon>
             check out some of my projects
             </span>
        </v-btn>
      </div>

      <div class="my-2">
        <v-btn text large>
           <span class="caption text-lowercase">
             <v-icon left>mdi-send-outline</v-icon>
             learn about my experience
             </span>
        </v-btn>
      </div>

      <div class="my-2">
        <v-btn text large>
           <span class="caption text-lowercase">
             <v-icon left>mdi-send-outline</v-icon>
             get in touch with me
             </span>
        </v-btn>
      </div>

      <!-- end of column -->
    </v-col>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon color="#9395D3" @click.stop="drawer = !drawer" />
      <v-toolbar-title>(Logo Here)</v-toolbar-title>
    </v-app-bar>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>