<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Spiruline</h1>
    <div id="menu">
      <router-link :to="{ name: 'SuppliersList' }">Consulter la liste des fournisseurs</router-link>
      <router-link :to="{ name: 'SuppliersMap' }">Voir la carte</router-link>
    </div>
    <router-view></router-view>
<!--<Supplier></Supplier>-->
  </div>
</template>

<script>
// import Supplier from './components/Supplier.vue'

export default {
  name: 'app',
  components: {
    // Supplier,
  },
  methods:{
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
#menu a{
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  background-color: #41B883;
  color: white;
  border: none;
  text-decoration: none;
}
#menu a:hover{
  background-color: #328e65;
}
#menu {
  margin-bottom: 40px;
}
</style>
