<template>
    
      <div class="popup2">
          <div class="innerpop"><button class="popup-close" @click="ToggleTrigger()">X</button>
              <slot></slot>
         
              <table>
              <button class="start" @click=" ToggleTrigger('maltTrigger'),removeItem()"  ref="toggleTrigger">Finish</button>
              <th>Malt:</th>
             
              <td>{{$store.state.malt.name}}</td>
              <th>When:</th>
              <td>{{$store.state.malt.add}}</td>
              <th>Amount:</th>
              <td>{{$store.state.malt.amount.value}}g</td>
          </table>
          <img class="bar" src="../assets/processbeer.gif" />
      </div>
      
    </div>
  </template>
  
  <script>
  
  
  export default {
  
  
     props:['ToggleTrigger'],
     methods:{
      changeText(){
          this.$store.dispatch('changeText')
      },
      removeItem(){
       {{ this.$store.state.selectedBeer.ingredients.malt.shift()}}
    }
     }
  }
  
  </script>
  
  <style scoped>
  .popup{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  background-color: rgba(0,0,0,0);
  
  display: flex;
  text-align: center;
  justify-content: center;
  }
  .innerpop{
      background:white;
      padding: 32px;
  }
  .popup-close{
      float:top;
      float: right;
  
  }
  .bar{
      height: 400px;
      width: 500px;
  }
  </style>
  