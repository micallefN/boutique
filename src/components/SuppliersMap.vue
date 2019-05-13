<template>
  <div>
    <h1>Carte des fournisseurs</h1>
    <div class="map">
      <LMap :zoom="zoom" :center="center">
        <LTileLayer :url="url"></LTileLayer>
        <LMarker v-for="supplier in suppliers" :lat-lng="[ supplier.latitude , supplier.longitude ]" :key="supplier.id"></LMarker>
      </LMap>
    </div>

  </div>

</template>

<script>
  import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

  export default {
    name: 'SuppliersMap',
    components: {
      LMap,
      LTileLayer,
      LMarker
    },
    data() {
      return {
        url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
        zoom: 2,
        center: [10, 10],
        bounds: null,
      };
    },
    props:{
      suppliers: Array
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
  height: 80vh;
}
</style>
