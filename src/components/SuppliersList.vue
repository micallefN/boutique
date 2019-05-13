<template>
  <div>
    <h1>Liste des fournisseurs</h1>
    <Supplier v-for="supplier in suppliers" :name="supplier.name" :status="supplier.status" :checked-at="supplier.checkedAt" :key="supplier.id"></Supplier>
  </div>

</template>

<script>
import Supplier from './Supplier.vue'

export default {
  name: 'SuppliersList',
  components:{
    Supplier,
  },
  data: function() {
    return {
      loading: false,
    }
  },
  props:{
    suppliers: Array
  },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
