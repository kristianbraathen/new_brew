<template>
  <div>
    <table id="beers" >
      <tr>
        <th>Name</th>
        <th class="descr">Description</th>
        <th>Alc</th>
        <th></th>
      </tr>
      <tr v-for="beer in beerlist" :key="beer.name" >
        <td >{{beer.name}}</td>
        <td>{{beer.description}}</td>
        <td>{{beer.abv}}%</td>
        <td><router-link to="/about"><img class="img" @click="newBrew(beer)" v-bind:src="beer.image_url" /></router-link></td>
      
      </tr>
      
    </table>        
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "beerlists",
    computed:mapState(['beerlist']),
    created(){
        this.$store.dispatch('getlist');
    },
    methods:{
      newBrew(beer) {
        this.$store.dispatch('getSelectedBeer',beer)
        console.log('selectedbeer',beer )

      }
    }
   
    
    

}
</script>

<style>
 .descr{
        width: 750px;
    }
img{
    height: 200px;
}
.btn{
    border-radius: 20%;
}

</style>