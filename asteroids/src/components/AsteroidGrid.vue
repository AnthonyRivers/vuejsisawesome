<template>
        <div class="card mt-5">
        <h2 class="card-header">Near-Earth Objects</h2>
        <transition name="shooting-star">
            <div class="m-3" v-clock v-if="numAsteroids > 0 && showSummary">

                <p>showing {{numAsteroids}} items</p>
                <p>{{closesObject}} has the shortest miss distance.</p>
            </div>
        </transition>
        <div class="m-3">
            <a href="#" @click="showSummary = !showSummary">Show/hide summary</a>
        </div>
        <table class="table table-striped" :class="[{'table-dark':false},'table-bordered']">
            <thead class="thead-light">
                <th>#</th>
                <th>Name</th>
                <th>Close Approach Date</th>
                <th>Miss Distance</th>
                <th>Remove</th>
            </thead>
                <tbody is="transition-group" tag="tbody" name="neo-list" v-cloak>
                <tr v-for="(a,index) in asteroids" :key="a.neo_reference_id"
                        :class="{highlight: isMissingData(a), 'shadow-sm':true}">
                    <td>{{index + 1}}
                    <td>{{a.name}}</td>
                    <td>{{getCloseApproachDate(a)}}</td>
                    
                    <td>
                        <ul v-if="a.close_approach_data.length > 0">
                            <li v-for="(value, key) in a.close_approach_data[0].miss_distance">
                                {{key}}: {{value}}
                            </li>
                        </ul>
                    </td>
                    <td><button @click="remove(index)" class="btn btn-warning">Remove</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
    export default {
        props:['asteroids', 'header'],
                data() {
                    return {
                        showSummary: true
                    }
        },
        computed: {
            numAsteroids: function(){
                return this.asteroids.length;
            },

            closesObject: function(){
                var neosHavingData = this.asteroids.filter(function (neo){
                    return neo.close_approach_data.length > 0;
                });

                var simpleNeos = neosHavingData.map(function (neo){
                    return {name: neo.name, miles: neo.close_approach_data[0].miss_distance.miles};
                });

                var sortedNeos = simpleNeos.sort(function(a,b){
                    return a.miles - b.miles;
                });
    
                return sortedNeos[0].name;
            }
        },
        methods: {

            getCloseApproachDate: function(a){
               if(a.close_approach_data.length > 0 ){
                    return a.close_approach_data[0].close_approach_date;
                } 
                return 'N/A';
            },
            remove: function(index){
                this.asteroids.splice(index,1);
            },

            getRowStyle: function(a){
                if(a.close_approach_data.length == 0){
                    return {
                            border: 'solid 3px red',
                            color: 'red'
                    };
                }
            
            },
            isMissingData: function(a){
                return a.close_approach_data.length == 0;
            }


        }
    };
</script>
<style scoped>
    .highlight {
        border: solid 3px red;
        color: red;
    }

    .shooting-star-leave-to, .shooting-star-enter {
        transform: translateX(150px) rotate(30deg);
        opacity: 0;
    }

    .shooting-star-enter-active, .shooting-star-leave-active {
        transition: all .5s ease;
    }

    .neo-list-leave-to, .neo-list-enter {
        opacity: 0;
        transform: translateY(30px);
    }

    .neo-list-enter-active, .neo-list-leave-active {
        transition: all 1s linear;
    }

</style>


