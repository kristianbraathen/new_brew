<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/beer.png">
   <Beerlist />
  </div>
</template>

<script>
import Beerlist from '@/components/Beerlist.vue';
// @ is an alias to /src


export default {
    name: "HomeView",
    components: { Beerlist }
}
</script>
