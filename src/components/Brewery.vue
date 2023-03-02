<template>
  <div class="brewery">
    <table class="brew">
      <tr>
        <th>Name</th>
        
        <th></th>
        <th>Ingredients</th>
        <th>Process</th>
       
      </tr>
      <tr>
        <td>{{beer.name}}</td> 
        
        
        <td><img class="img" v-bind:src="beer.image_url"/></td> 
        <div> <strong><label>Hops:</label></strong><br>
        <div  v-for= "item in beer.ingredients.hops" :key =item.name>{{item.name}}
           
                   </div><br><br>
                   <strong><label>Malts:</label></strong><br>
                   <div v-for= "item in beer.ingredients.malt" :key =item.name>{{item.name}}</div><br><br></div><br><br>

                   <strong><label>Fermentation Temp:</label></strong><br>
                   {{beer.method.fermentation.temp.value}}℃&nbsp;<button
                     disabled={{disableBtn}}
                    @click="changeText()">
                    {{btnText}}</button> <br><br> 

                   <div v-for= "item in beer.method.mash_temp" :key =item.temp><strong><label>Mash Temp:</label></strong><br>
                    {{item.temp.value}}℃&nbsp;<button @click="changeText()" >{{$store.state.text}}</button><br>
                    <label>Duration:</label><br>{{item.duration}} Min<br><br></div><br><br>  
                  <br><br>
                  <td>
                  <processes />
                
                  </td>
      </tr>&nbsp;
      
    </table>       
  </div>
</template>

<script>
    import { mapState } from 'vuex';
    
    import Processes from './Processes.vue';
    import Beerlist from './Beerlist.vue';
    
   
    
  

export default {

    name: "brewery",
    data(){
      return{
        btnText:'IDLE',
        disabledBtn: false

      }

    },
   
  
    computed: mapState({
      beer: state=> state.selectedBeer,  
 
    }),
    
     
    
     
    components: { Processes,
      Beerlist },

   methods:{
        changeText(){
         
        this.$store.dispatch('changeText')
    },
    
    
      
    
    
},
}
</script>

<style>
.brew{
  justify-content: center;
    display: table-cell;
   
}
.brewery{
  margin-left: 300px;
}
</style>