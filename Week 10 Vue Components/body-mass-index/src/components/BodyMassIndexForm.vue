<!-- BodyMassIndexForm.vue -->
<!-- Create Template -->
 <!-- Create Class body-mass-index-form -->
  <!-- Create Label for height -->
  <!-- Create Input for height -->
  <!-- Create Label for weight -->
  <!-- Create Input for weight -->
  <!-- Create Button to calculate BMI -->
<template>
  <div class="body-mass-index-form">
    <h2>Enter Your Stats</h2>
    <label for="height">Height (meters):</label>
    <input id="height" v-model="height" type="number" step="0.01" />

    <label for="weight">Weight (kilograms):</label>
    <input id="weight" v-model="weight" type="number" step="0.1" />

    <button @click="emitStats">Calculate</button>
  </div>
</template>

<!-- Create Script -->
<!-- Create Export default -->
<!-- Create Data function -->
<!-- Create Methods function -->
<!-- Create Emit function -->
<!-- Create Stats function -->
<!-- Create Height function -->
<!-- Create Weight function -->
<script>
export default {
  name: "BodyMassIndexForm.vue",
  data() {
    return {
      height: null,
      weight: null,
    };
  },
  methods: {
    emitStats() {
      this.$emit("stats-entered", {
        height: this.height,
        weight: this.weight,
      });
    },
  },
};
</script>

<style scoped>
.body-mass-index-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}
</style>