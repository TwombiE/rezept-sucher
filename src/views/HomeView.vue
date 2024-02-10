<!-- HomeView.vue -->
<template>
  <RecipeItem 
  :label="recipe.recipe.label"
  :image="recipe.recipe.image"
  :attributes="recipe.recipe.source"
  :url="recipe.recipe.url"
  v-for="(recipe, index) in recipes" :key="index" />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import RecipeItem from '@/components/RecipeItem.vue';
  import home from '@/router/index.ts';
  
  export default defineComponent({
    components: {
      RecipeItem,
      home
    },
    data() {
      return {
        recipes: []
      }
    },
    methods: {
      async getRecipes() {
        const appId = '03bfcbf5';
        const appKey = 'ee87cacc7cd29930af9219870875ec3b';
        const url = `https://api.edamam.com/search?q=${this.$store.state.query}&app_id=${appId}&app_key=${appKey}`;
        let resp = await fetch(url);
        this.recipes = (await resp.json()).hits;
      }
    },
    watch: {
      '$store.state.query'() {
        this.getRecipes();
      }
    },
    mounted() {
      this.getRecipes();
    }
  })
  </script>
  
  

