<template>
  <v-app id="inspire">
    <div>
      <!-- <h3>
        Welcome to my Experience Page. 
      </h3> -->
      <p></p>
    </div>



    <v-app-bar
      app
      clipped-left
    >
    

    <div class="title"> 
      <h3>
          <v-icon left color="teal">mdi-school-outline</v-icon>
            Experience 
      </h3>
    </div>


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
        <v-btn text large color="teal" to="home">
           Home  
        </v-btn>
      </div>
      
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
        projects: [
        { title: 'Design a new website', degree: 'The Net Ninja', years: '1st Jan 2019', description: 'ongoing'},
      ]
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>