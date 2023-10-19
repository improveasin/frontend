<template>
  <b-container v-if="loaded">
    <b-row>
      <b-col col lg="6" class="d-none d-lg-block">
        <Carousel :images="page.images"></Carousel>
      </b-col>
      <b-col col lg="6" sm="12">
        <h3 v-if="page.title">{{ page.title }}</h3>
        <Carousel class="d-lg-none" :images="page.images"></Carousel>

        <div v-if="logo" class="mb-4">
          <b-img :src="logo" height="100"></b-img>
        </div>

        <small v-if="page.brand">Von {{ page.brand }}</small>
        <div v-if="page.reducedPrice">
          Preis:<i style="text-decoration: line-through">{{ page.price }}</i
          >&nbsp;<big
            ><b>{{ page.reducedPrice }}</b></big
          >
        </div>
        <div v-else>
          Preis:<big
            ><b>{{ page.price }}</b></big
          >
        </div>
        <ul>
          <li v-if="page.color">Farbe: {{ page.color }}</li>
          <li v-if="page.size">Größe: {{ page.size }}</li>
        </ul>
        <img
          src="/assets/img/amazon_button.png"
          height="50"
          style="cursor: pointer"
          v-on:click="openProductUrl(page)"
        />
        <br /><br /><br /><br />
        <div v-if="page.features">
          <h5>Features</h5>
          <ul>
            <li v-for="feature in page.features" v-bind:key="feature">
              <span v-html="feature"></span>
            </li>
          </ul>
        </div>
      </b-col> </b-row
    ><br /><br />
    Made by <a href="https://www.improveasin.com">improveasin</a>
  </b-container>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Backendless from "backendless";
import Settings from "../../services/settings";

export default {
  metaInfo: {
    title: "Improveasin"
  },
  components: {
    Carousel
  },
  data() {
    return {
      loaded: false,
      page: {},
      logo: undefined,
      googleTagManagerPixel: "",
      facebookPixel: ""
    };
  },

  async created() {
    if (!(await Backendless.UserService.isValidLogin())) {
      const user = await Backendless.UserService.loginAsGuest();
      debugger;
    }

    const settings = await Settings.getSettings();
    if (settings) {
      this.facebookPixel = settings.facebookPixel;
      this.googleTagManager = settings.googleTagManager;
      this.logo = settings.logo;

      //const scriptElement = document.createElement<HTMLScriptElement>('script');
      //document.body.appendChild(scriptElement);
    }

    const objectId = this.$route.params.id;

    const counter = await Backendless.Counters.incrementAndGet(
      `pages_${objectId}_view`
    );
    console.log(`counter for ${objectId} with number ${counter}`);

    Backendless.Data.of("pages")
      .findById(objectId)
      .then(page => {
        this.loaded = true;

        this.page = page;
        console.log("page", page);
      })
      .catch(error => {
        console.log("error", error);
      });
  },

  methods: {
    async openProductUrl(page) {
      const counter = await Backendless.Counters.incrementAndGet(
        `pages_${page.objectId}_click`
      );
      console.log(`click for ${page.objectId} with number ${counter}`);

      window.open(page.productUrl);
    }
  }
};
</script>

<style>
.container {
  padding-top: 100px;
}

button.btn a {
  color: #fff;
}
</style>
