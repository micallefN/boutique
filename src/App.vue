<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Spiruline</h1>
    <div>
      <button @click="onSupplierListClick()">Consulter la liste des fournisseurs</button>
      <button @click="onMapClick()">Voir la carte</button>
    </div>
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <SuppliersList></SuppliersList>
    <SuppliersMap></SuppliersMap>
  </div>
</template>

<script>
import SuppliersList from './components/SuppliersList.vue'
import SuppliersMap from './components/SuppliersMap.vue'

export default {
  name: 'app',
  components: {
    SuppliersList,
    SuppliersMap
  },
  methods:{
    onSupplierListClick : function(){
        alert('click fournisseur');
    },
    onMapClick : function(){
        alert('click map');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app button{
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: #41B883;
  color: white;
  border: none;
}
#app button:hover{
  background-color: #328e65;
}
</style>
