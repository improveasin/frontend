<template>
  <home-layout>
    <div :class="{ 'landing-page': true, 'show-mobile-menu': showMobileMenu }">

      <div class="page-wrapper">
        <div class="main-wrapper">
          <headroom style="height:initial;">
            <div class="navbar">
              <div class="container-nav">
                <div class="div-block-2">
                  <img src="/assets/img/improveasin-logo.svg" loading="lazy" width="300" alt=""
                    class="image" style="width:180px; height: 100px;">
                  <div class="navbar-wrapper">
                    <div class="padding-horizontal is-medium"></div>
                    <AmazonLogin />
                  </div>
                </div>
              </div>
            </div>
          </headroom>
        </div>

        <div class="content-container" id="home" style="">

          <div class="hero-section">
            <div class="container-standard">
              <div class="hero-wrapper">
                <div class="hero-content_component">
                  <h1 class="heading-3">Steigere deinen Amazon Umsatz durch den gezielten Einsatz von Landingpages für
                    deinen externen Traffic!</h1>
                  <div class="padding-vertical"></div>
                  <p class="paragraph-medium">ImproveASIN hilft dir externen Traffic optimal zu nutzen und das Ranking
                    deiner Listings zu steigern. Erstelle in wenigen Schritten Conversion optimierte Landingpages mit
                    ImproveASIN!</p>
                </div>
                <AmazonLogin />
              </div>
            </div>
          </div>
          <div class="traffic-section">
            <div class="container-standard">
              <div class="div-block-4">
                <div class="traffic-content">
                  <p class="text-style-text">Mehr Traffic</p>
                  <div class="padding-vertical is-xsmall"></div>
                  <h2 data-w-id="c8bfcc1c-9c3b-ef99-a6b9-09cf99451878" class="h2-white">Warum Du eine Landingpage
                    zwischen Deine externen Traffic quellen wie Posts/Ads und Dein Amazon Listing schalten solltest?
                  </h2>
                  <div class="padding-vertical"></div>
                  <p data-w-id="c66db091-fa94-d9e9-7605-d2492b04a3af" class="text-style-white">Ads sorgen für viel
                    Traffic auf einem Listing. Das kann das Ranking des Amazon Listings positiv beeinflussen. Muss es
                    aber nicht! Warum nicht? Ganz einfach, die meisten Kunden kaufen nicht beim ersten Klick. Sie wollen
                    sich
                    erst informieren, um sicherzustellen, dass dieses Produkt zu ihren Anforderungen passt.<br></p>
                </div>
                <div><img src="/assets/img/Group-62.png" loading="lazy" data-w-id="22bc2658-c60c-b823-c70e-e501366957a2"
                    srcset="/assets/img/Group-62-p-500.png 500w, /assets/img/Group-62-p-800.png 800w, /assets/img/Group-62-p-1080.png 1080w, /assets/img/Group-62-p-1600.png 1600w, /assets/img/Group-62.png 1976w"
                    sizes="100vw" alt="" class="image-2"></div>
              </div>
            </div>
          </div>

          <div class="n-comparison-section">
            <div class="n-container">
              <div class="n-box-wrapper">
                <div class="n-stepbox-overview">
                  <div class="div-block-2">
                    <div class="n-iconbox"></div>
                    <p class="n-header">Ohne Improveasin Landingpage</p>
                  </div>
                  <p class="n-paragrpah"><strong class="bold-text">Beispiel:<br></strong>1000 Leute kommen pro Tag durch
                    Werbung (Ads) auf dein Amazon Listing und 10 Leute kaufen dein Produkt. Dann hast du eine Conversion
                    von gerade mal 1%.</p>
                  <div class="n-stepbox-wrapper">
                    <div class="n-stepbox">
                      <div class="n-icon-red"></div>
                      <p class="n-stepbox-paragraph">1000 Leute Klicken deine Posts &amp; Ads</p>
                      <div class="n-numberbox">1</div>
                    </div>
                    <div class="n-stepbox">
                      <div class="n-icon-red _2"></div>
                      <p class="n-stepbox-paragraph">1000 Leuten auf dem Listing &amp; 10 auf Amazon</p>
                      <div class="n-numberbox">2</div>
                    </div>
                    <div class="n-stepbox">
                      <div class="n-icon-red _3"></div>
                      <p class="n-stepbox-paragraph">1% Conversion Rate</p>
                      <div class="n-numberbox">3</div>
                    </div>
                  </div>
                </div>
                <div class="n-stepbox-overview">
                  <div class="div-block-2">
                    <div class="n-iconbox _2"></div>
                    <p class="n-header">Mit Improveasin Landingpage</p>
                  </div>
                  <p class="n-paragrpah"><strong>Beispiel:<br></strong>Wenn von denselben 1000 Leuten nur 100 Leute auf
                    dein Amazon Listing kommen, weil 900 Interessenten vorher ausgefiltert wurden, die sich gegen einen
                    Kauf entschieden haben und es kaufen dieselben 10 Leute dein Produkt, dann hast du eine Conversion
                    von 10%. Das klingt schon besser, oder?</p>
                  <div class="n-stepbox-wrapper">
                    <div class="n-stepbox">
                      <div class="n-icon-green"></div>
                      <p class="n-stepbox-paragraph">1000 Leute Klicken deine Posts &amp; Ads</p>
                      <div class="n-numberbox _2">1</div>
                    </div>
                    <div class="n-stepbox">
                      <div class="n-icon-green _2"></div>
                      <p class="n-stepbox-paragraph">Filtert Negativ-Entscheider aus, bevor sie auf dein Amazon
                        Listing kommen</p>
                      <div class="n-numberbox _2">2</div>
                    </div>
                    <div class="n-stepbox">
                      <div class="n-icon-green _3"></div>
                      <p class="n-stepbox-paragraph">100 Leute auf dem Listing &amp; 10 kaufen</p>
                      <div class="n-numberbox _2">3</div>
                    </div>
                    <div class="n-stepbox">
                      <div class="n-icon-green _4"></div>
                      <p class="n-stepbox-paragraph">10% Conversion Rate</p>
                      <div class="n-numberbox _2">4</div>
                    </div>
                  </div>
                </div>
                <p id="w-node-_0b68db74-9a72-c05a-cf4e-fe810a4ca391-c5b36edc" class="n-vs-paragraph">VS.</p>
              </div>
            </div>
          </div>


          <div class="advantage-section">
            <div class="container-small">
              <div class="traffic-content centered">
                <p class="text-style-text">Vorteile</p>
                <div class="padding-vertical is-xsmall"></div>
                <h2 data-w-id="13ba1ed8-cc15-51f5-4abb-c1b0abd467b0" class="h2-white centered">Positive
                  Begleiterscheinung</h2>
                <div class="padding-vertical"></div>
                <p data-w-id="13ba1ed8-cc15-51f5-4abb-c1b0abd467b3" class="text-style-white centered">Und nicht nur das,
                  die 10 Leute verbringen jetzt auch weniger Zeit auf deinem Amazon Listing bevor sie es in den
                  Warenkorb legen. Warum? Weil Sie sich alle nötigen Informationen bereits auf einer Landingpage
                  angesehen haben. Die
                  Kaufentscheidung ist also schon gefallen bevor sie auf dein Amazon Listing kommen.<br><br>Für Amazon,
                  die alle Bewegungen auf deinem Listing messen, sind die Conversion und die Verweildauer auf deinem
                  Listing starke Signale
                  dafür, dass dein Produkt bei den Kunden gut ankommt. Das veranlasst Amazon dein Produkt in der
                  organischen Suche höher zu ranken.</p>
              </div>
            </div>
            <div class="container-large">
              <div class="div-block-9">
                <div data-w-id="dcf979d0-7e2d-e2c2-57a4-7048d77d9b89" class="div-block-10">
                  <div class="div-block-11"><img src="/assets/img/Vector.svg" loading="lazy" alt="" class="image-3">
                  </div>
                  <p class="paragraph-standard advantage">Landing Page</p>
                </div>
                <div class="div-block-10">
                  <div class="div-block-11"><img src="/assets/img/iconmonstr-layer-16-6.svg" loading="lazy" alt=""
                      class="image-3"></div>
                  <p class="paragraph-standard advantage">Höheres Ranking</p>
                </div>
                <div class="div-block-10">
                  <div class="div-block-11"><img src="/assets/img/iconmonstr-eye-3-1.svg" loading="lazy" alt=""
                      class="image-3"></div>
                  <div class="div-block-12"></div>
                  <p class="paragraph-standard advantage">Höhere Sichtbarkeit</p>
                </div>
                <div class="div-block-10">
                  <div class="div-block-11"><img src="/assets/img/iconmonstr-user-29-1.svg" loading="lazy" alt=""
                      class="image-3"></div>
                  <p class="paragraph-standard advantage">Mehr Kunden</p>
                </div>
                <div id="w-node-_9e0cff14-859f-3085-429a-63e91797b4b8-12513ffa" class="div-block-10">
                  <div class="div-block-11"><img src="/assets/img/iconmonstr-tag-20-1.svg" loading="lazy" alt=""
                      class="image-3"></div>
                  <p class="paragraph-standard advantage">Mehr Sales</p>
                </div>
              </div>
            </div>
          </div>

          <div class="anlegen-section">

            <div class="container-s">
              <div id="form" class="div-block-7">
                <h2 class="heading-style-white centered">ImproveASIN ist dein Boost für externen Traffic<br></h2>
                <div class="padding-vertical is-xsmall"></div>
                <p class="paragraph-style-white centered">Nutze jetzt das 100% kostenfreie Tool und binde es gleich in
                  deinen <br>externen Traffic Funnel ein!</p>
                <div style="text-align: center;">

                  <AmazonLogin />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="container-standard">
            <div class="footer-wrapper">
              <a href="/impressum" class="footer-link">Impressum</a>
              <div class="padding-horizontal"></div>
              <a href="/datenschutz" class="footer-link">Datenschutz</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </home-layout>
</template>

<script>
import { headroom } from "vue-headroom";
import VueScrollTo from "vue-scrollto";
import HomeLayout from "../../layouts/HomeLayout";
import GlideComponent from "../../components/Carousel/GlideComponent";
import { adminRoot, buyUrl } from "../../constants/config";
import AmazonLogin from "../../components/Amazon/Login.vue";

const slideSettings = {
  type: "carousel",
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    "600": { perView: 1 },
    "992": { perView: 2 },
    "1200": { perView: 3 }
  }
};

const slideItems = [
  {
    icon: "iconsminds-mouse-3",
    title: "Right Click Menu",
    detail:
      "Increases overall usability of the project by providing additional actions menu."
  },
  {
    icon: "iconsminds-electric-guitar",
    title: "Video Player",
    detail:
      "Carefully themed multimedia players powered by Video.js library with Youtube support."
  },
  {
    icon: "iconsminds-keyboard",
    title: "Keyboard Shortcuts",
    detail:
      "Easily configurable keyboard shortcuts plugin that highly improves user experience."
  },
  {
    icon: "iconsminds-three-arrow-fork ",
    title: "Two Panels Menu",
    detail:
      "Three states two panels icon menu that looks good, auto resizes and does the job well."
  },
  {
    icon: "iconsminds-deer",
    title: "Icons Mind",
    detail:
      "1040 icons in 53 different categories, designed pixel perfect and ready for your project."
  },
  {
    icon: "iconsminds-palette",
    title: "20 Color Schemes",
    detail:
      "Colors, icons and design harmony that creates excellent themes to cover entire project."
  },
  {
    icon: "iconsminds-air-balloon-1",
    title: "3 Applications",
    detail:
      "Applications that mostly made of components are the way to get started to create something similar."
  },
  {
    icon: "iconsminds-resize",
    title: "Extra Responsive",
    detail:
      "Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens."
  }
];

const features = [
  {
    title: "Pleasant Design",
    img: "/assets/img/landing-page/features/pleasant-design.png",
    detail:
      "As a web developer we enjoy to work on something looks nice. It is not an absolute necessity but it really motivates us that final product will look good for user point of view. <br /><br />So we put a lot of work into colors, icons, composition and design harmony. Themed components and layouts with same design language. <br /><br />We kept user experience principles always at the heart of the design process."
  },
  {
    title: "Extra Responsive",
    img: "/assets/img/landing-page/features/extra-responsive.png",
    detail:
      "Xxs breakpoint is for smaller screens that has a resolution lower than 420px. Xs works between 576px and 420px. Xxl breakpoint is for larger screens that has a resolution higher than 1440px. Xl works between 1200px and 1440px.<br><br>With this approach we were able to create better experiences for smaller and larger screens."
  },
  {
    title: "Superfine Charts",
    img: "/assets/img/landing-page/features/superfine-charts.png",
    detail:
      "Using charts is a good way to visualize data but they often look ugly and break the rhythm of design. <br /><br />We concentrated on a single chart library and tried to create charts that look good with color, opacity, border and shadow. <br /><br />Used certain plugins and created some to make charts even more useful and beautiful."
  },
  {
    title: "Layouts for the Job",
    img: "/assets/img/landing-page/features/layouts-for-the-job.png",
    detail:
      "Layouts are the real thing, they need to be accurate and right for the job. They should be functional for both user and developer. <br /><br />We created lots of different layouts for different jobs.<br /><br />Listing pages with view mode changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication and error layouts which has a different design than the other pages were our main focus. We also created details page with tabs that can hold many components."
  },
  {
    title: "Smart Menu",
    img: "/assets/img/landing-page/features/smart-menu.png",
    detail:
      "Instead of good old single panel menus with accordion structure that looks over complicated, we created 2 panels and categorized pages accordingly.<br><br>The default menu auto hides sub panel when resolution is under some breakpoint to open some space. You may also hide menu completely or use only main panel open only."
  }
];

const layouts = [
  {
    title: "Menu Default",
    img: "/assets/img/landing-page/layouts/menu-default.jpg"
  },
  {
    title: "Menu Subhidden",
    img: "/assets/img/landing-page/layouts/menu-subhidden.jpg"
  },
  {
    title: "Menu Hidden",
    img: "/assets/img/landing-page/layouts/menu-hidden.jpg"
  },
  {
    title: "Image List",
    img: "/assets/img/landing-page/layouts/image-list.jpg"
  },
  {
    title: "Thumb List",
    img: "/assets/img/landing-page/layouts/thumb-list.jpg"
  },
  { title: "Data List", img: "/assets/img/landing-page/layouts/data-list.jpg" },
  { title: "Details", img: "/assets/img/landing-page/layouts/details.jpg" },
  {
    title: "Authentication",
    img: "/assets/img/landing-page/layouts/authentication.jpg"
  },
  {
    title: "Search Results",
    img: "/assets/img/landing-page/layouts/search-results.jpg"
  },
  {
    title: "Single Page Application",
    img: "/assets/img/landing-page/layouts/spa.jpg"
  },
  {
    title: "Data List App Menu Hidden",
    img: "/assets/img/landing-page/layouts/data-list-app-menu-hidden.jpg"
  },
  { title: "Tabs", img: "/assets/img/landing-page/layouts/tabs.jpg" }
];

const applications = [
  {
    title: "Survey",
    path: `${adminRoot}/#survey`,
    img: "/assets/img/landing-page/applications/survey.jpg"
  },
  {
    title: "Chat",
    path: `${adminRoot}/#chat`,
    img: "/assets/img/landing-page/applications/chat.jpg"
  },
  {
    title: "Todo",
    path: `${adminRoot}/#todo`,
    img: "/assets/img/landing-page/applications/todo.jpg"
  }
];

const themes = [
  { title: "Navy Blue", class: "bluenavy" },
  { title: "Olympic Blue", class: "blueolympic" },
  { title: "Yale Blue", class: "blueyale" },
  { title: "Moss Green", class: "greenmoss" },
  { title: "Lime Green", class: "greenlime" },
  { title: "Carrot Orange", class: "carrotorange" },
  { title: "Ruby Red", class: "rubyred" },
  { title: "Monster Purple", class: "monsterpurple" },
  { title: "Steel Grey", class: "steelgrey" },
  { title: "Granola Yellow", class: "granolayellow" }
];
const scrollOptions = {
  container: "body",
  easing: "ease-in",
  offset: -120,
  force: true,
  x: false,
  y: true
};

export default {
  components: {
    "home-layout": HomeLayout,
    "glide-component": GlideComponent,
    headroom: headroom,
    AmazonLogin: AmazonLogin
  },
  data() {
    return {
      showMobileMenu: false,
      adminRoot,
      buyUrl,
      slideSettings,
      slideItems,
      features,
      layouts,
      applications,
      themes
    };
  },
  methods: {
    onWindowResize() {
      const homeRect = document
        .getElementById("homeRow")
        .getBoundingClientRect();
      const homeSection = document.getElementById("sectionHome");
      homeSection.style.backgroundPositionX = homeRect.x - 580 + "px";

      const footerSection = document.getElementById("sectionFooter");
      footerSection.style.backgroundPositionX =
        event.target.innerWidth - homeRect.x - 2000 + "px";

      if (event.target.innerWidth >= 992) {
        this.showMobileMenu = false;
      }
    },
    onWindowScroll() {
      this.showMobileMenu = false;
    },
    onWindowClick() {
      this.showMobileMenu = false;
    },

    scrollTo(target) {
      VueScrollTo.scrollTo(target, 200, scrollOptions);
    }
  },
  mounted() {
    document.body.classList.add("no-footer");
    window.addEventListener("scroll", this.onWindowScroll);
    window.addEventListener("resize", this.onWindowResize);
    window.addEventListener("click", this.onWindowClick);
  },
  beforeDestroy() {
    document.body.classList.remove("no-footer");
    window.removeEventListener("scroll", this.onWindowScroll);
    window.removeEventListener("resize", this.onWindowResize);
    window.removeEventListener("click", this.onWindowClick);
  }
};
</script>
