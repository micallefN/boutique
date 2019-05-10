<template>
  <div>
    <h1>Carte des fournisseurs</h1>
<!--    <gmap-map-->
<!--            :center="{lat:45.19, lng:5.72}"-->
<!--            :zoom="7"-->
<!--            style="width: 100%; height: 800px"-->
<!--    >-->
<!--    </gmap-map>-->
    <div class="map">
      <LMap :zoom="zoom" :center="center">
        <LTileLayer :url="url"></LTileLayer>
        <LMarker lat-lng="[47.413220, -1.219482]"></LMarker>
        <LMarker v-for="supplier in suppliers" :lat-lng="[ supplier.latitude , supplier.longitude ]"></LMarker>
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
        zoom: 6,
        center: [10, 10],
        bounds: null,
        suppliers: [
          {
            id: 1,
            latitude: 10,
            longitude: 10
          },
          {
            id: 2,
            latitude: 11,
            longitude: 9.6
          }
        ]
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
  height: 80vh;
}
</style>
