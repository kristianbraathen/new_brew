<template>
  <div class="about">
    <h1>Brewery</h1>
    <brewery />
  </div>
</template>
<script>
  import Brewery from "@/components/Brewery.vue";

  export default {
    name: "AboutView",
    components: { Brewery }
}
</script>
