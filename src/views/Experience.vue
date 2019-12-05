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


  <v-card
    class="mx-auto"
  >
    <v-card-text v-for="(experience, index) in experienceItems" :key="index">

      <div>Years Attended: {{experience.years}} </div>
 
      <p class="display-1 text--primary">
        {{experience.school}}
      </p>

      <p>Extracurricular Activities: {{experience.info}} </p>
      <div class="text--primary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iusto praesentium, magni eos totam excepturi voluptate, officiis commodi minima doloremque saepe fuga deserunt suscipit, impedit iste voluptas reprehenderit placeat cum?
        <br>
      </div>
    </v-card-text>
  </v-card>
  

  <!-- testing -->
    <!-- <h2>
      <ul>
            <div v-for="(experience, index) in experienceItems" :key="index">
              <h2>

                <div>Attended: {{experience.school}} </div>

                <div>Earned A Degree In: {{experience.degree}} </div>

                <div>Studied During The Years of {{experience.years}} </div>

                <div>Also Participated In: {{experience.info}} </div>

              </h2>
          </div>       
      </ul>
    </h2> -->
  <!-- end of testing -->



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
    
    data(){
      return{
        experienceItems: [
          { 
              school: 'School X',
              degree: 'Degree X',
              years: '2016 - 2019',
              info: 'Chess Club' 
          },
           { 
              school: 'School Y',
              degree: 'Degree Y',
              years: '2020 - 2024',
              info: 'Baseball' 
          },
           { 
              school: 'School Z',
              degree: 'Degree Z',
              years: '2024 - 2028',
              info: 'Soccer' 
          },
           { 
              school: 'School A',
              degree: 'Degree A',
              years: '2028 - 2032',
              info: 'Football' 
          }
        ]
       }
      },

    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>