<template>
    
  <div v-for="hops in selectedBeer.ingredients.hops" :key="hops.name"><div>&nbsp;
      {{hops.name}}<br><div>{{hops.add}}
      
      <button class="btn"  @click="newHop(hops), disabled=!disabled" >Select</button>
      <button class="popup" :disabled="disabled"  @click=" ToggleTrigger('hopsTrigger')" ref="toggleTrigger">Start</button><br><br>
    </div></div>&nbsp;&nbsp;
    
    <slot></slot>
</div>
</template>

<script>
    import { mapState } from 'vuex';
    
    import ProgressPop from './ProgressPop.vue';
  
    
  
export default {
    props: ['ToggleTrigger'],
   
    data(){
        return{
            disabled: true,
           

        };
    },
    
   
   components: ProgressPop,
   computed: mapState(["selectedBeer",'buttonstate']),

methods:{
      newHop(hops) {
        this.$store.dispatch('getHops',hops)
        console.log('getHops',hops)

      },
     
     
}
}
</script>

<style>

</style>