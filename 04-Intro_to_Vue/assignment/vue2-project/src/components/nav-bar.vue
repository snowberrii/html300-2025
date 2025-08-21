<template>
  <nav class="navbar fixed-top navbar-expand-md navbar-custom">
    <div class="container-fluid">
      <router-link class="navbar-brand fw-bold" to="/">
        {{ logo }}
      </router-link>
      <!-- hamburger menu -->
      <button
        class="navbar-toggler custom-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="custom-toggler-icon"></span>
      </button>

      <!-- nav list -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li v-for="navItem in navItems" :key="navItem.name" class="nav-item">
            <router-link
              class="nav-link custom-nav-link"
              :to="navItem.path"
              active-class="active"
              exact
              @click.native="collapseAndNavigate"
              >{{ navItem.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      logo: "LOGO",
      navItems: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Project", path: "/project" },
        { name: "Contact", path: "/contact" },
      ],
    };
  },
  methods: {
    collapseAndNavigate() {
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarCollapse.classList.contains("show")) {
        // Collapse after the click event, so navigation works
        setTimeout(() => {
          const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
            toggle: false,
          });
          bsCollapse.hide();
        }, 0);
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables";

.navbar-custom {
  background-color: black;
  border-bottom: 1px solid $primary-dark;
  .navbar-brand {
    color: $primary-dark;
    font-size: 2em;
    font-weight: bold;
  }
  .custom-toggler-icon {
    display: inline-block;
    width: 25px;
    height: 2px;
    background-color: $primary-dark;
    position: relative;
    transition: all 0.3s;

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 0;
      width: 25px;
      height: 2px;
      background-color: $primary-dark;
      transition: background-color 0.3s;
    }

    &:before {
      top: -8px;
    }

    &:after {
      top: 8px;
    }
  }

  // When navbar is expanded (not collapsed), animate into >
  .navbar-toggler:not(.collapsed) .custom-toggler-icon {
    background-color: transparent; // middle line disappears

    &:before {
      transform: rotate(20deg) translate(2px, 3px);
      background-color: $primary-dark;
    }

    &:after {
      transform: rotate(-20deg) translate(2px, -3px);
      background-color: $primary-dark;
    }
  }
}

/* Nav links */
.custom-nav-link {
  color: $primary;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;

  /* Spacing between links for all screens */
  margin-left: 1rem;

  &:hover {
    color: $primary-dark;
    &:after {
      width: 100%;
    }
  }

  &.active {
    color: $primary-dark;
    font-weight: bold;
    &:after {
      width: 100%;
    }
  }

  /* Only add underline effect on larger screens */
  @media (min-width: 992px) {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px; // distance from text
      width: 0;
      height: 2px;
      background-color: $primary-dark; // underline color
      transition: width 0.3s;
    }

    margin-left: 2rem; /* more spacing on bigger screens */
  }
}
</style>
