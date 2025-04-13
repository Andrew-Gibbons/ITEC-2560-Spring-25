<template>
  <div class="body-mass-index-form">
    <h2>Enter Your Stats</h2>
    <label for="height">Height (meters):</label>
    <input id="height" v-model="height" type="number" step="0.01" />

    <label for="weight">Weight (kilograms):</label>
    <input id="weight" v-model="weight" type="number" step="0.1" />
  </div>
</template>

<script>
import { useBMIStore } from '../stores/bmiStore';

export default {
  name: 'BodyMassIndexForm.vue',
  computed: {
    height: {
      get() {
        const store = useBMIStore();
        return store.height;
      },
      set(value) {
        const store = useBMIStore();
        store.setStats(value, store.weight);
      },
    },
    weight: {
      get() {
        const store = useBMIStore();
        return store.weight;
      },
      set(value) {
        const store = useBMIStore();
        store.setStats(store.height, value);
      },
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
