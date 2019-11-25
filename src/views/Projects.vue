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
      <!-- <v-icon left color="teal">mdi-xml</v-icon> -->
    
    <!-- TODO: MAKE 'PROJECTS PAGE' TEAL -->
    <div class="title"> 
      <h3>
          <v-icon left color="teal">mdi-xml</v-icon>
            Projects Page
      </h3>
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
<!-- My Resume Project -->
<v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <p>
            My Resume
          </p>
          <template v-slot:actions>
            <v-icon color="teal">mdi-vuejs</v-icon>
          </template>
        </v-expansion-panel-header>

      <v-divider
        class="mx-4"
        :inset="inset"
        horizontal
        color="teal"
      ></v-divider>

        <v-expansion-panel-content>
          This website! Vue.js based web app with Vuetify implementation, more to come!!
        </v-expansion-panel-content>
      </v-expansion-panel>
</v-expansion-panels>

      <!-- Geo-Ninjas Projects -->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <p>
            Geo Ninja
          </p>
          <template v-slot:actions>
            <v-icon color="teal">mdi-vuejs</v-icon>
          </template>
        </v-expansion-panel-header>

      <v-divider
        class="mx-4"
        :inset="inset"
        horizontal
        color="teal"
      ></v-divider>

        <v-expansion-panel-content>
          Implemented a web-app requires the authorization and creation of a user profile to determine their geolocation. Once a profile is created and logged in, a red pin is placed on the Google Globe Map (based on their real world location). A user is allowed to see other users’ pins and once clicked. A primitive Facebook style comment wall is displayed. Allowing users to communicate freely on one another’s comment wall.  Implemented mapping capability with Google Maps API along with Geolocation API.
        </v-expansion-panel-content>
      </v-expansion-panel>
</v-expansion-panels>

      <!-- Ninja-Chat Projects -->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <p>
            Ninja Chat
          </p>
          <template v-slot:actions>
            <v-icon color="teal">mdi-vuejs</v-icon>
          </template>
        </v-expansion-panel-header>

      <v-divider
        class="mx-4"
        :inset="inset"
        horizontal
        color="teal"
      ></v-divider>

        <v-expansion-panel-content>
          Implemented a live and responsive web chat application. User & permission management-chat rooms. Allowing users to log in with a desired username of their choice. The time (EST)  messages are sent are displayed beside current and past messages.
        </v-expansion-panel-content>
      </v-expansion-panel>
</v-expansion-panels>

      <!-- Ninja-Smoothies Projects -->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <p>
            Ninja Smoothies
          </p>
          <template v-slot:actions>
            <v-icon color="teal">mdi-vuejs</v-icon>
          </template>
        </v-expansion-panel-header>

      <v-divider
        class="mx-4"
        :inset="inset"
        horizontal
        color="teal"
      ></v-divider>

        <v-expansion-panel-content>
          Implemented an example of a smoothie shop’s  e-commerce web-app. Included capability to view smoothies, and see detailed information about a product when clicked/tapped on. As well as updating current smoothies and adding new ones to the menu. Data stored & retrieved via Firebase/Firestore in JSON format. 
        </v-expansion-panel-content>
      </v-expansion-panel>
</v-expansion-panels>

      <!-- Java Work Email Generator -->
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <p>
            Work Email Generator
          </p>
          <template v-slot:actions>
            <v-icon color="teal">mdi-language-java</v-icon>
          </template>
        </v-expansion-panel-header>

      <v-divider
        class="mx-4"
        :inset="inset"
        horizontal
        color="teal"
      ></v-divider>

        <v-expansion-panel-content>
          Implemented an application with Java, that generates a work email address for the user. The user will insert their name, place of employment, and position into the application then it will output their created email address. A random password is also generated, while giving the user the option to keep the given password or change it to one to their liking. Lastly an authentic alternative email address is required.
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