<template>
  <div class="supplier">
    <h1>Fournisseur {{ name }}</h1>
    <h3 :class="{red: !status, green: status}">A du stock ? <span v-if="status">OK</span><span v-else>KO</span></h3>
    <h5>Date de dernier relevé des stocks : {{ format(checkedAt, 'fr_FR') }}</h5>
  </div>
</template>

<script>
import { format } from 'timeago.js';

export default {
  name: 'Supplier',
  props: {
    name: String,
    status: Boolean,
    checkedAt: Date
  },
  methods:{
    //format: format,
    format,
  }
}
</script>

<style scoped>
  .supplier{
    padding: 20px 0px;
    border: 2px solid grey;
    margin-bottom: 15px;
  }
  .red{
    color: red;
  }
  .green{
    color: green;
  }
</style>
