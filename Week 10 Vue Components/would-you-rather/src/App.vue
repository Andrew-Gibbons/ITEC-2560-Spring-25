<!-- Create Script -->
<script setup>

// Import the Vue ref function
  // Import the Vue ref function
  // Import the WouldYouRather component  
import { ref } from 'vue'

import WouldYouRather from './components/WouldYouRather.vue'

  // Data for the two questions and answers 
  const wryQuestion = ref('Live in a truck or a camper?')
  const wyrAnswer1 = ref('Truck')
  const wyrAnswer2 = ref('Camper')

  // Data for the user's choice
  const userChoice = ref('')

  // Function to update the user's choice
  function updateUserSelection(Choice) {
    userChoice.value = `Thanks! You Chose ${Choice}`
  }

</script>

<!-- Create Template -->
<!-- Create a Div with id app -->
<!-- Create a h1 with the text Would You Rather? -->
<!-- Create a would-you-rather component with the question and answers -->
<!-- Create a div to show the user's choice -->
<template>
  <div id="app">
  <h1>Would You Rather?</h1>

  <would-you-rather
    v-bind:question="wryQuestion"
    v-bind:answer1="wyrAnswer1"
    v-bind:answer2="wyrAnswer2"
    v-on:answer-selected="updateUserSelection">
  </would-you-rather>

  {{ userChoice }}

  <!-- TODO Show the WouldYouRather component here -->

  <!-- TODO Show user's choice for the would-you-rather question -->
  </div>
</template>

<style scoped>

#app {
  background-color: #ffc0c0; /* Light red color */
  padding: 20px; /* Optional, adds padding to the app */
}

  /* TODO any styles for this component go here */

</style>

