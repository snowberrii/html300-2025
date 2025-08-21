<template>
  <div class="app">
    <form @submit.prevent="handleSubmit">
      <div class="form-group d-flex justify-content-center align-items-center">
        <!-- Unlock Button -->
        <button
          type="button"
          class="btn btn-outline-primary me-2"
          @click="unlockForm"
        >
          {{ unlockBtnDes }}
        </button>

        <!-- Submit Button Wrapper -->
        <span
          ref="submitWrapper"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          :title="tooltipText"
        >
          <button
            type="submit"
            class="btn btn-secondary"
            :disabled="!isUnlocked"
          >
            {{ submitBtnDes }}
          </button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export default {
  name: "MyButton",
  setup() {
    const isUnlocked = ref(false);
    const unlockBtnDes = ref("Unlock Form");
    const submitBtnDes = ref("Submit");
    const tooltipText = ref("Click the Unlock button first");

    const submitWrapper = ref(null);
    let tooltipInstance = null;

    const unlockForm = () => {
      isUnlocked.value = true;
      tooltipInstance.disable(); // disable tooltip after unlock
    };

    const handleSubmit = () => {
      alert("Form submitted!");
      isUnlocked.value = false; // reset
      tooltipInstance.enable(); // enable tooltip again
    };

    onMounted(() => {
      // Initialize tooltip on the wrapper
      tooltipInstance = new bootstrap.Tooltip(submitWrapper.value, {
        trigger: "hover focus",
      });
    });

    return {
      isUnlocked,
      unlockBtnDes,
      submitBtnDes,
      tooltipText,
      submitWrapper,
      unlockForm,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.app {
  padding: 2em;
}
</style>
