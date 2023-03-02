<template>
  <div class="pros" >
    <hops><br>
    </hops> <br><br>
    <progress-pop v-if="popupTrigger.hopsTrigger" :ToggleTrigger="() => ToggleTrigger('hopsTrigger')">
      <h2>In Progress</h2></progress-pop>
      <slot></slot>
      <div v-for="malt in selectedBeer.ingredients.malt" :key="malt.name"><div>&nbsp;&nbsp;
      {{malt.name}}<br>
      <button class="btn" @click="newMalt(malt), disabled=!disabled" >Select</button>
      <button class="popup" :disabled="disabled" @click="() => ToggleTrigger('maltTrigger')" ref="toggleTrigger">Start</button>
    </div></div>&nbsp;&nbsp;
    <maltpop v-if="popupTrigger.maltTrigger" :ToggleTrigger="() => ToggleTrigger('maltTrigger')">
      <h2>In Progress</h2></maltpop>

    <slot></slot>
    
    
  </div>
</template>

<script>
    import { mapState } from 'vuex';
    import{ref} from 'vue'
    import ProgressPop from './ProgressPop.vue';
    import Maltpop from './MaltPop.vue'
    import Hops from './Hops.vue';

export default {

  data(){
      return{
        btnText:'IDLE',
        disabled: true

      }

    },
  components: { ProgressPop, Maltpop, Hops },
  
    
    setup() {
        const popupTrigger = ref({
            hopsTrigger:false,
            maltTrigger: false,
        });

         const ToggleTrigger = (trigger) => {
            popupTrigger.value[trigger] = !popupTrigger.value[trigger];
           
        }
        return {
            ProgressPop,
            popupTrigger,
            ToggleTrigger,
            Maltpop,
            Hops
            
        };
   
    },
  
 props:['beer'],
 computed: mapState(["selectedBeer","hops","ingredients.hops"]),
 
 methods:{
  changeState(){
    
    this.$store.dispatch('changeState')
  },
 
 
    
 newMalt(malt){
        this.$store.dispatch('getMalt',malt)
      },
      
 
    
    
},
   

    
  
}
</script>

<style>
.pros{
 display: flex-box;

}
.bar{
  display: inline-flex;
  justify-content: center;
  width: 200px;
  height: 100px;
}

</style>