<template>
  <div>
    <nav-bar></nav-bar>
    <main id="main" class="main about">
      <div class="container ps-5 pe-5 pb-5">
        <h3 class="h-3 fw-bold">{{ title }}</h3>
        <p class="about-me pt-3 pb-5 ps-md-5 pe-md-5">
          {{ paragraph }}
        </p>

        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
          data-interval="3000"
          data-wrap="true"
        >
          <div class="carousel-inner">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              :class="['carousel-item', { active: index === 0 }]"
            >
              <img
                :src="slide.img"
                class="d-block mx-auto responsive-img"
                :alt="slide.alt"
              />
              <div class="carousel-caption">
                <p>{{ slide.caption }}</p>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleCaptions"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden"></span>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import navBar from "@/components/nav-bar.vue";

export default {
  name: "AboutPage",
  components: {
    navBar,
  },
  data() {
    return {
      title: "About Me",
      paragraph: `Hi, I’m Termwan Chiangpradit, but most people call me Snow. I’m
          currently learning how to code with a focus on HTML, CSS, and
          JavaScript as I work toward becoming a front-end developer. Outside of
          coding, I enjoy cafe hopping to find new coffee spots, traveling to
          new places, and capturing everyday moments through photography. I'm
          passionate about combining creativity with technology and excited to
          keep growing in this field.`,
      slides: [
        {
          img: "/img/its-me.JPG",
          alt: "Termwan",
          caption: "Lobster & Burger Restaurant in London",
        },
        {
          img: "/img/butterfly-pea-coconut-drink-with-matcha-foam.jpg",
          alt: "Drink",
          caption:
            "Coconut juice infused with butterfly pea top with matcha foam",
        },
        {
          img: "/img/chiang-rai-thailand.jpg",
          alt: "Chiang Rai",
          caption: "Somewhere in Chiang Rai, Thailand",
        },
        {
          img: "/img/bstory-cafe-bangkok-thailand.jpg",
          alt: "Cafe",
          caption: "B-story Cafe in Bangkok, Thailand",
        },
        {
          img: "/img/ice-cream-in-chaiwatthanaram-temple-thailand.jpg",
          alt: "Ice cream",
          caption:
            "Lychee & Grape ice cream @ Chaiwatthanaram Temple, Thailand",
        },
        {
          img: "/img/snow-in-mount-rainier.jpg",
          alt: "Mount Rainier",
          caption: "Mount Rainier in Ashford, Washington",
        },
        {
          img: "/img/snow-in-emirates-uniform.jpg",
          alt: "Emirates",
          caption: "Former Flight Attendant at Emirates Airline",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

.about {
  padding-top: 20vh;
}

h3 {
  color: $primary-dark !important;
  font-weight: bold !important;
}

.about-me {
  color: rgba($primary, 0.7);
}

.carousel-caption {
  display: inline-block; /* makes the background only as wide as the content */
  background: rgba(0, 0, 0, 0.4); /* dark, semi-transparent */
  backdrop-filter: blur(3px); /* blur effect */
  -webkit-backdrop-filter: blur(8px); /* Safari support */
  border-radius: 10px;
  padding: 5px !important;
  max-width: 200px;
  margin: 0 auto;
  font-size: 12px;
  bottom: 5px;
  p {
    margin: 0;
  }
}

.responsive-img {
  width: 70%; /* Default width for small screens */
}

@media (min-width: 992px) {
  .responsive-img {
    width: 40%;
  }
  .carousel-control-prev {
    left: 15%; /* Move it closer from the left edge */
  }

  .carousel-control-next {
    right: 15%; /* Move it closer from the right edge */
  }
}
</style>
