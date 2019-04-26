<template>
  <div>
    <h1>Carte des fournisseurs</h1>
    <gmap-map
            :center="{lat:45.19, lng:5.72}"
            :zoom="7"
            style="width: 100%; height: 800px"
    >
    </gmap-map>
  </div>

</template>

<script>
  export default {
    name: 'SuppliersMap',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
