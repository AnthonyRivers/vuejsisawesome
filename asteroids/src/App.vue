<template>
  <div id="app">
    <AsteroidGrid @remove="remove" :asteroids="asteroids" header="Near-Earth Objects"/>    
  </div>
</template>

<script>
import AsteroidGrid from './components/AsteroidGrid.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    AsteroidGrid
  },
    // Don't forget to turn data into a function. The ES6 function definition can be use instead
      data() {
        return {
          asteroids: []
        }
    },
    // created hook after reactive properties and methods are set up.
    created: function() {
        //this.fetchApod();
        this.fetchAsteroids();
    },
    methods: {

        fetchAsteroids: function() {
            //var url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY";

            var url = "http://737798.youcanlearnit.net/neos.json"

            axios.get(url).then(res => {
                  // The reference vm for to the root instance will not work here so use reference to 
                  // this object instead.
                    this.asteroids = res.data.near_earth_objects.slice(0,10);
                });

        },

        remove: function(index){
            this.asteroids.splice(index,1);
        }

    }

}
</script>

<style>
[v-cloak]{
    display: none;
}
</style>
