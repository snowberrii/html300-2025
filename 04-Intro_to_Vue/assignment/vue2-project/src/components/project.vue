<template>
  <div>
    <nav-bar></nav-bar>
    <main id="main" class="main project">
      <div class="container ps-5 pe-5 pb-5">
        <h3 class="h3 mb-4">{{ title }}</h3>

        <div class="horizontal-accordion">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="horizontal-item"
            :class="{ open: project.open }"
            @click="toggleProject(index)"
          >
            <div class="project-header">
              {{ project.name }}
            </div>
            <div class="project-body" v-if="project.open">
              {{ project.details }}
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column justify-content-center align-items-center text">
        <h4>{{ text }}</h4>
        <input v-model="text" @input="changeText" placeholder="type here ..." />
      </div>
    </main>
  </div>
</template>

<script>
import navBar from "@/components/nav-bar.vue";

export default {
  name: "ProjectPage",
  components: { navBar },
  data() {
    return {
      title: "Project",
      projects: [
        { name: "Project #1", details: "Details of project 1", open: false },
        { name: "Project #2", details: "Details of project 2", open: false },
        { name: "Project #3", details: "Details of project 3", open: false },
        { name: "Project #4", details: "Details of project 4", open: false },
      ],
      text: "",
    };
  },
  methods: {
    toggleProject(index) {
      this.projects = this.projects.map((p, i) => ({
        ...p,
        open: i === index ? !p.open : false,
      }));
    },

    changeText(event) {
      this.text = event.targer.value;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.text {
  color: pink;
}

.project {
  padding-top: 20vh;
}

.horizontal-accordion {
  width: 100%;
  display: flex;
  overflow: hidden;
  border-radius: 8px;

  .horizontal-item {
    flex: 1;
    background-color: $primary;
    color: black;
    margin-right: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &.open {
      flex: 3;
      color: white;
      background-color: $primary-dark;
    }

    .project-header {
      padding: 1rem;
      font-weight: bold;
      text-align: center;
    }

    .project-body {
      padding: 0.75rem;
      font-size: 0.9rem;
      text-align: center;
      color: white;
    }
  }

  /* Remove margin for last item */
  .horizontal-item:last-child {
    margin-right: 0;
  }
}

/* 📱 Responsive for mobile: stack vertically */
@media (max-width: 768px) {
  .horizontal-accordion {
    flex-direction: column;

    .horizontal-item {
      margin-right: 0;
      margin-bottom: 5px;
      flex: unset;

      &.open {
        flex: unset;
      }
    }

    .horizontal-item:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
