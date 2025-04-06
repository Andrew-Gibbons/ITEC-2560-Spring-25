<!-- Create Template -->
 <!-- Create div with id app -->
  <!-- Create h1 with Body Mass Index Calculator -->
  <!-- Create BodyMassIndexForm component -->
  <!-- Create div with v-if bmi !== null -->
   <!-- Create h2 with Your BMI: {{ bmi.toFixed(2) }} -->
<template>
  <div id="app">
    <h1>Body Mass Index Calculator</h1>
    <BodyMassIndexForm @stats-entered="calculateBMI" />

    <div v-if="bmi !== null">
      <h2>Your BMI: {{ bmi.toFixed(2) }}</h2>
    </div>
  </div>
</template>

<!-- Create Script -->
 <!-- Create Import BodyMassIndexForm component -->
  <!-- Create Export default -->
   <!-- Create Name app -->
   <!-- Create Components BodyMassIndexForm -->
   <!-- Create Data function -->
   <!-- Create Methods function -->
    <!-- Create CalculateBMI function -->
<script>
import BodyMassIndexForm from './components/BodyMassIndexForm.vue';

export default {
  name: "App",
  components: {
    BodyMassIndexForm,
  },
  data() {
    return {
      bmi: null,
    };
  },
  methods: {
    calculateBMI(stats) {
      const { height, weight } = stats;
      if (height && weight) {
        this.bmi = weight / (height * height);
      }
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
