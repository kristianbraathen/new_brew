<template>
  <div class="popup">
    <div class="innerpop"><button class="popup-close" @click="ToggleTrigger()">X</button>
       
        <slot></slot>
       
        <table>
           
            <th>Hops:</th>
            <button class="start" @click=" ToggleTrigger('hopsTrigger'),removeItem()" ref="toggleTrigger">Finish</button>
            <td>{{$store.state.hops.name}}</td>
            <th>When:</th>
            <td>{{$store.state.hops.add}}</td>
            <th>Amount:</th>
            <td>{{$store.state.hops.amount.value}}g</td>
           
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
       this.$store.state.selectedBeer.ingredients.hops.shift()
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

