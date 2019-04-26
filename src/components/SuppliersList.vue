<template>
  <div>
    <h1>Liste des fournisseurs</h1>
    <Supplier :name="name" :status="status" :checked-at="checkedAt"></Supplier>
  </div>

</template>

<script>
import Supplier from './Supplier.vue'

export default {
  name: 'SuppliersList',
  components:{
    Supplier,
  },
  data: () => ({
    name: 'Mon fournisseur',
    status: false, // est ce qu'il y a du stock
    checkedAt: new Date() // date de la dernière mise à jour du stock
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
