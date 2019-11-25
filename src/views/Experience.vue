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
          <v-icon>mdi-home-import-outline</v-icon>
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
        <v-btn text large color="teal" to="contact">Contact</v-btn>
      </div>

    <v-btn class="ma-2" tile large color="teal" icon href="https://www.github.com/jmison">
      <v-icon>mdi-github-circle</v-icon>
    </v-btn>

    <v-btn class="ma-2" tile large color="teal" icon href="https://www.linkedin.com/in/jamison-nixon/">
      <v-icon>mdi-linkedin-box</v-icon>
    </v-btn>
      </v-app-bar>



  <v-card>
    <v-toolbar flat color="teal" dark>
      <v-toolbar-title>Education</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>mdi-vuejs</v-icon>
        Vue.js & Firebase
      </v-tab>
      <v-tab>
        <v-icon left>mdi-teach</v-icon>
       Reynolds Community College
      </v-tab>


      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Self Taught & Udemy Course
            </p>
                <v-divider
                  :inset="inset"
                  horizontal
                  color="teal"
              ></v-divider>     
            <p>
              Completed October 2019 - Certificate upon request
            </p>
                <v-divider
                  :inset="inset"
                  horizontal
                  color="teal"
              ></v-divider>     
            <p class="mb-0">
              Learned Front-End Framework Vue.js & Back-End as a Service Firebase to create and deploy dynamic web pages/sites, and Web Apps. This includes authentication, page routing, and dynamic data pushing/fetching via Firestore. Designed, styled, and implemented reactive UI components. Incorporated external data via API’s (Firebase, Google Maps API, Timezone API, Geolocation API).
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Certification in General Education 
            </p>
                <v-divider
                  :inset="inset"
                  horizontal
                  color="teal"
              ></v-divider>     
            <p>
              August 2013 - May 2019
            </p>
                <v-divider
                  :inset="inset"
                  horizontal
                  color="teal"
              ></v-divider>     
            <p class="mb-0">
              <p>
              Computer Science I, Computer Science II, Calculus-Analytic I, Calculus-Analytic II, Ethics.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>


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