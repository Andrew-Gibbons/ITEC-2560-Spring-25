<!-- Create Script -->
 <!-- import ref, watch from vue -->
  <!-- Defing Props-->
  <script setup>
  import { ref, watch } from 'vue'
  
  defineProps({
    question: String,
    answer1: String,
    answer2: String
  })
  
    // Emit the answer-selected event
  const emit = defineEmits([
    'answer-selected'
  ])
  
    // Data for the user's choice
  
  const choice = ref(null)  // null is needed so both radio buttons are not selected by default
  
  // function choiceMade() {
    // emit('answer-selected', choice.value)
  // }
  
  // Watch for changes to the choice and emit the event
  watch(choice, () => {
    emit('answer-selected', choice.value)
  })
  
  </script>
  
  <!-- Create Template -->
   <!-- Create a div with id component-wrapper -->
    <!-- Create a h2 with the text make your choice! -->
    <!-- Create a question -->
    <!-- Create a radio button for each answer -->
    <!-- Create a label for each answer -->
  <template>
    <div id="component-wrapper">
  
    <h2>make your choice!</h2>
  
    {{ question }}
  
    <input type="radio" id="answer-1" v-model="choice" v-bind:value="answer1"><label for="answer-1"> {{ answer1 }}</label>
    <input type="radio" id="answer-2" v-model="choice" v-bind:value="answer2"><label for="answer-2"> {{ answer2 }}</label>
    </div>
    <!-- TODO Show question text -->
    <!-- TODO Show radio buttons, one for each choice -->
  
  </template>
  
  <style scoped>
  
  #component-wrapper {
    background-color: #c0e4ff; /* Light blue color */
    border: 2px solid #90caf9; /* Blue border */
    padding: 15px; /* Padding for spacing inside */
    border-radius: 8px; /* Optional, adds rounded corners */
  }
    /* TODO any styles for this component go here */
  
  </style>
  
  
  