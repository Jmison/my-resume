<template>
  <v-app id="inspire">




    <div>
      <h3>
        <p class="font-italic">Howdy there, I'm Jamison. An inspiring web-developer!</p>
      </h3>
    </div>




<!-- begininning of column -->
     <v-col class="text-left" cols="12" sm="4">
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
    </v-col>
<!-- end of column -->



<!-- top toolbar -->
    <v-app-bar
      app
      clipped-left
    >
<v-row align="left" justify="left">
  <!-- pushes buttons below to the far right -->
  </v-row>


    <!-- * * * * Logo Space * * * * -->
    <!-- <v-row align="center" justify="center">
    <v-img
      src="https://i.imgur.com/0Z7dedY.png"
      lazy-src="https://i.imgur.com/0Z7dedY.png"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="500"
      max-height="300"
    ></v-img>
  </v-row> -->



    <!-- Top toolbar buttons -->
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