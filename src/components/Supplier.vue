<template>
  <div class="supplier">
    <h1>Fournisseur {{ name }}</h1>
    <h3 :class="{red: !status, green: status}">A du stock ? <span v-if="status">OK</span><span v-else>KO</span></h3>
    <h5>Date de dernier relevé des stocks : {{ checkedAt.toLocaleString() }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Supplier',
  data: () => ({
    name: 'Mon fournisseur',
    status: false, // est ce qu'il y a du stock
    checkedAt: new Date() // date de la dernière mise à jour du stock
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .supplier{
    padding: 20px 0px;
    border: 2px solid grey;;
  }
  .red{
    color: red;
  }
  .green{
    color: green;
  }
</style>
