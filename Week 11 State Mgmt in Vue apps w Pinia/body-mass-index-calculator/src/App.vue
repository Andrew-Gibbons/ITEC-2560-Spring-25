<template>

  <!-- Create div id app-->
  <div id="app">
    <h1>Body Mass Index Calculator</h1>
    <BodyMassIndexForm />

    <!-- Display the BMI result -->
    <div v-if="bmi !== null">
      <h2>Your BMI: {{ bmi.toFixed(2) }}</h2>
    </div>
  </div>
</template>

<script>

// Import the useBMIStore from the stores/bmiStore
// Import the BodyMassIndexForm component
import { useBMIStore } from './stores/bmiStore';
import BodyMassIndexForm from './components/BodyMassIndexForm.vue';

// Create a new component with the computed property bmi
export default {
  name: 'App',
  components: {
    BodyMassIndexForm,
  },
  computed: {
    bmi() {
      const store = useBMIStore();
      return store.bmi; // Access the computed property from the store
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #50a982;
  margin-top: 60px;
}
</style>
