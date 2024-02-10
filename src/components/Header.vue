<!-- Header.vue -->
<template> 
  <div class="up-cont">
  <h1 class="title">Rezeptsuche:</h1>
</div>
  <header>  
      
    <input class="h-input" id="search" :value="$store.state.query" @input="$store.commit('updateQuery', $event.target.value)" placeholder="Suche...">
    </header>
</template>

<script> 
export default {
    name: 'Header',
} 
</script>

<style scoped>
 .up-cont {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #F4BC39;
  margin: -22px;
 }

 .title {
    padding-left: 35%;
  }
  
  header {
    background-color: #F4BC39;
    height: 30px;
    padding: 16px;
    display: flex;
    align-items: flex-end;
    border-bottom-right-radius: 8px;
  }
</style>
