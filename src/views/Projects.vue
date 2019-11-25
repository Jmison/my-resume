<template>
  <v-app id="inspire">
  <p>
    <!-- Gap between toolbar and expansion panels -->
  </p>
    <v-app-bar
      app
      clipped-left
    >
    
    <p>
      <v-icon left color="teal">mdi-xml</v-icon>
    
    <!-- TODO: MAKE 'PROJECTS PAGE' TEAL -->
    <div class="title"> 
    <p class="cyan--text">
        Projects Page
        </p>
    </div>
    



<v-row align="left" justify="left">
  <!-- pushes buttons below to the far right -->
  </v-row>




    <!-- Top toolbar buttons -->
     <div class="my-2">
        <v-btn text large color="teal" to="home">
          <v-icon>mdi-home-import-outline</v-icon>
           Home  
        </v-btn>
      </div>

      <div class="my-2">
        <v-btn text large color="teal" to="about">About</v-btn>
      </div>

      <div class="my-2">
        <v-btn text large color="teal" to="experience">Experience</v-btn>
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




<!-- Expansion list-panels -->

      <!-- My-Resume Project -->
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>My-Resume</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  <div></div>

      <!-- Geo-Ninjas Projects -->
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>Geo-Ninjas</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

      <!-- Ninja-Chat Projects -->
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>Ninja-Chat</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

      <!-- Ninja-Smoothies Projects -->
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>Ninja-Chat</v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  




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