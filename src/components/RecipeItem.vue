<template>
    <a :href="url" class="recipeItemContainer">
        <img class="recipe-image" :src="image" alt="Recipe"/>
        <div class="right-side">
            <div>
                {{ label }}
            </div>
            <div class="botton-row">
                {{ attributes }}
            </div>
        </div>
    </a>
</template>


<script lang="ts">
    export default {
        name: 'RecipeItem',
        props: {
            image: String,
            label: String,
            attributes: String,
            url: String
        }
    }
</script>

<style scoped>
    .recipeItemContainer {
        border: 1px solid rgba(0,0,0,0.2);
        padding: 8px;
        border-radius: 8px;
        margin: 8px;
        display: flex;
        gap: 8px;
        cursor: pointer;
        text-decoration: none;
        color: rgba(0,0,0,0.8);
    }
        .recipeItemContainer:hover {
            background-color: rgba(0,0,0,0.05);
        }

    .recipe-image {
        height: 60px;
        border-radius: 8px;
    }

    .right-side {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    .botton-row {
        color: rgba(0,0,0,0.4);
        font-size: 12px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>