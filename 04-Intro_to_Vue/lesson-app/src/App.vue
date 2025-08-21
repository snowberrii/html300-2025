<script setup>
import { ref } from "vue";

const ingredients = ref(["meat", "cheese", "veggies"]);
</script>

<template>
  <main>
    <ul>
      <li v-for="ingredient in ingredients" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
   
  </main>
</template>

<style scoped></style>
