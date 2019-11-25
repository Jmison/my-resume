<template>
  <v-app id="inspire">
<!-- 
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

    </v-navigation-drawer> -->

    <div>
      <h3>
        <p class="font-italic">Howdy there, I'm Jamison. An inspiring web-developer!</p>
      </h3>
    </div>

     <v-col class="text-left" cols="12" sm="4">
<!-- begininning of column -->
      <div class="my-2">
        <v-btn  text large to="about">
           <span class="caption text-lowercase" >
             <v-icon left>mdi-send-outline</v-icon>
             find out more about me
             </span>
        </v-btn>
      
      </div>

      <div class="my-2">
        <v-btn text large to="projects">
           <span class="caption text-lowercase">
             <v-icon left>mdi-send-outline</v-icon>
             check out some of my projects
             </span>
        </v-btn>
      </div>

      <div class="my-2">
        <v-btn text large to="experience">
           <span class="caption text-lowercase">
             <v-icon left>mdi-send-outline</v-icon>
             learn about my experience
             </span>
        </v-btn>
      </div>

      <div class="my-2">
        <v-btn text large to="contact">
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
<v-row align="left" justify="left">
  <!-- pushes buttons below to the far right -->
  </v-row>
     <div class="my-2">
        <v-btn text large color="teal" to="about">About</v-btn>
      </div>
      
      <div class="my-2">
        <v-btn text large color="teal" to="projects">Projects</v-btn>
      </div>

     <div class="my-2">
        <v-btn text large color="teal" to="Experience">Experience</v-btn>
      </div>
    
     <div class="my-2">
        <v-btn text large color="teal" to="contact">Contact</v-btn>
      </div>

    <v-btn class="ma-2" tile large color="teal" icon href="https://www.github.com/jmison">
      <v-icon>mdi-github-circle</v-icon>
    </v-btn>

    <v-btn class="ma-2" tile large color="teal" icon href="https://www.linkedin.com/in/jamison-nixon/">
      <v-icon>mdi-linkedin-box</v-icon>
    </v-btn>
      
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