<template>
  <div>
    <nav-bar></nav-bar>
    <main id="main" class="main contact">
      <div class="container ps-5 pe-5 pb-5">
        <h3 class="h-3">{{ title }}</h3>
        <div class="row">
          <!-- Contact Form -->
          <div class="col-md-5 mb-4 ps-5 me-5">
            <form class="pink bold" @submit.prevent="handleSubmit">
              <!-- Loop through fields -->
              <div v-for="(field, index) in fields" :key="index" class="mb-3">
                <label :for="field.id" class="form-label">{{
                  field.label
                }}</label>

                <!-- Render input -->
                <input
                  v-if="field.type !== 'textarea'"
                  :type="field.type"
                  class="form-control"
                  :id="field.id"
                  :placeholder="field.placeholder"
                  v-model="form[field.model]"
                  :required="field.required"
                />

                <!-- Render textarea -->
                <textarea
                  v-else
                  class="form-control"
                  :id="field.id"
                  :rows="field.rows"
                  :placeholder="field.placeholder"
                  v-model="form[field.model]"
                  :required="field.required"
                ></textarea>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                class="btn"
                data-toggle="tooltip"
                data-placement="right"
                title="contact me! Don't be shy :]"
              >
                {{ btnDes }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->

          <div class="col-md-5 ps-5 pink">
            <h4 class="bold">{{ infoTitle }}</h4>
            <p v-for="(item, index) in contactInfo" :key="index">
              <font-awesome-icon :icon="item.icon" class="me-2 icon" />
              <span class="bold">:</span> {{ item.value }}
            </p>
            <p>{{ contactDes }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import navBar from "@/components/nav-bar.vue";
import $ from "jquery";

export default {
  name: "ContactPage",
  components: {
    navBar,
  },
  data() {
    return {
      title: "Contact",
      btnDes: "Send Message",
      infoTitle: "Get in touch",
      contactDes:
        "Feel free to reach out through the form or email me directly!",
      contactInfo: [
        { label: "Email", value: "name@example.com", icon: "envelope" },
        { label: "Phone", value: "+1 234 567 8901", icon: "phone" },
        {
          label: "Address",
          value: "1234 Your Street, Your City, Country",
          icon: "map-marker-alt",
        },
        {
          label: "GitHub",
          value: "github.com/snowberrii",
          icon: ["fab", "github"],
        },
      ],
      // Field definitions (drives the form UI)
      fields: [
        {
          id: "name",
          label: "Name",
          type: "text",
          placeholder: "Your Name",
          model: "name",
          required: true,
        },
        {
          id: "email",
          label: "Email address",
          type: "email",
          placeholder: "name@example.com",
          model: "email",
          required: true,
        },
        {
          id: "message",
          label: "Message",
          type: "textarea",
          placeholder: "Write your message here...",
          model: "message",
          required: true,
          rows: 5,
        },
      ],

      // Actual form data (reactive)
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

  methods: {
    handleSubmit() {
      // Hide tooltip on the submit button
      const submitBtn = this.$el.querySelector('button[type="submit"]');
      $(submitBtn).tooltip("hide");
      // handle form submission
      console.log("Form submitted:", this.form);

      // Example: reset after submit
      Object.keys(this.form).forEach((key) => {
        this.form[key] = "";
      });

      alert("✅ Your message has been sent!");
    },
  },
  mounted() {
    // Only show tooltip on hover or focus, not click
    $('[data-toggle="tooltip"]').tooltip({
      trigger: "hover",
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.contact {
  padding-top: 20vh;
}

.pink {
  color: pink;
}

.bold {
  font-weight: bold;
}

.btn {
  background-color: pink !important;
  font-weight: bold !important;
}

/* Make input/textarea bold when it has value */
input.form-control:valid,
textarea.form-control:valid {
  font-weight: bold;
}

/* Focus styles: pink border and soft shadow */
input.form-control:focus,
textarea.form-control:focus {
  border-color: $primary !important;
  box-shadow: 0 0 0 0.2rem rgba(255, 192, 203, 0.25); // soft pink shadow
  outline: none; // remove default blue outline
}

.icon {
  color: pink;
  width: 50px;
  font-size: 1.5em;
}
</style>
