// Import the defineStore function from Pinia
import { defineStore } from 'pinia';

// Export the BMI store
// Create a store for BMI calculations
// This store will hold the height and weight of the user and calculate the BMI based on these values.
// The store will also provide a method to set the height and weight.
export const useBMIStore = defineStore('bmi', {
  state: () => ({
    height: null,
    weight: null,
  }),
  getters: {
    bmi(state) {
      if (state.height && state.weight) {
        return state.weight / (state.height * state.height);
      }
      return null;
    },
  },
  actions: {
    setStats(newHeight, newWeight) {
      this.height = newHeight;
      this.weight = newWeight;
    },
  },
});
