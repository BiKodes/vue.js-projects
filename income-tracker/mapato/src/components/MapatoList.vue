<template>
  <div class="income-list">
      <mapatoItem v-for="data in state.sortedIncome" :key="data.id" :income="data" />
  </div>
</template>

<script>

import MapatoItem from './MapatoItem';

export default {
    props: {
        state: Object
    },

    setup(){
      return {
        MapatoItem
      }
    }
}
</script>

<style scoped>
.income-list {
    margin-top: 30px;
    padding: 15px;
  }
</style>