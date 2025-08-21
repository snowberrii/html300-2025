<template>
  <div>
    <nav-bar></nav-bar>
    <main id="main" class="main home">
      <div class="container">
        <div class="p-5 mb-4">
          <div
            class="container-fluid d-flex flex-column justify-content-center align-items-center py-5 text-center"
          >
            <h1 class="display-4 fw-bold">{{ fullName }}</h1>
            <h2 class="h5 mb-4">{{ titleDes }}</h2>
            <button
              type="button"
              id="tooltipBtn"
              class="btn"
              @click="goToProject"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Check out my work!"
            >
              {{ btnDes }}
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import navBar from "@/components/nav-bar.vue";
import $ from "jquery"; // Make sure jQuery is installed via npm

export default {
  name: "HomePage",
  components: {
    navBar,
  },
  data() {
    return {
      fullName: "Termwan Chiangpradit",
      titleDes: "Junior front-end dev",
      btnDes: "View Project",
    };
  },
  methods: {
    goToProject() {
      $("#tooltipBtn").tooltip("hide"); // hides tooltip after navigation
      this.$router.push("/project");
    },
  },
  mounted() {
    // Only show tooltip on hover or focus, not click
    $('[data-toggle="tooltip"]').tooltip({
      trigger: "hover focus",
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.home {
  padding-top: 10vh; // optional, can adjust
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  color: $primary-dark;
  font-weight: bold !important;
}

h2 {
  color: $primary-dark;
}
</style>
