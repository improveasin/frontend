<template>
  <home-layout>
    <div :class="{ 'landing-page': true, 'show-mobile-menu': showMobileMenu }">
      <!-- <div class="mobile-menu" @click="$event.stopPropagation()">
        <a @click="scrollTo('#home')" href="javascript:;" class="logo-mobile">
          <span></span>
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a @click="scrollTo('#features')" href="javascript:;">FEATURES</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#layouts')" href="javascript:;">LAYOUTS</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#components')" href="javascript:;"
              >COMPONENTS</a
            >
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#apps')" href="javascript:;">APPS</a>
          </li>
          <li class="nav-item">
            <a @click="scrollTo('#themes')" href="javascript:;">THEMES</a>
          </li>
          <li class="nav-item">
            <div class="separator"></div>
          </li>
        </ul>
      </div> -->

          
      <!-- <div class="main-container">
        <div class="landing-page-nav"> -->

      <div class="page-wrapper">
        <div class="main-wrapper">
          <headroom style="height:initial;">
            <!-- <nav>
              <div
                class="container d-flex align-items-center justify-content-between"
              >
                <a
                  class="navbar-logo pull-left"
                  @click="scrollTo('#home')"
                  href="javascript:;"
                >
                  <span class="white"></span>
                  <span class="dark"></span>
                </a>

                <span
                  class="mobile-menu-button"
                  @click="
                    showMobileMenu = !showMobileMenu;
                    $event.stopPropagation();
                  "
                >
                  <i class="simple-icon-menu"></i>
                </span>
              </div>
            </nav> -->
             <div class="navbar">
                <div class="container-nav">
                    <div class="div-block-2"><img src="/assets/img/improveasin-logo.svg" loading="lazy" width="122" alt="" class="image">
                        <div class="navbar-wrapper">
                            <a href="#" class="navbar-link">Über uns</a>
                            <div class="padding-horizontal"></div>
                            <a href="#" class="navbar-link">Vergleich</a>
                            <div class="padding-horizontal"></div>
                            <a href="#" class="navbar-link">Vorteile</a>
                            <div class="padding-horizontal is-medium"></div>
                            <a href="#form" class="first-button w-inline-block">
                                <p class="first-button-text">Jetzt ausprobieren</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          </headroom>
        </div>

        <div class="content-container" id="home">

          <div class="hero-section">
                <div class="container-standard">
                    <div class="hero-wrapper">
                        <div class="hero-content_component">
                            <h1 class="heading-3">Steigere deinen Amazon Umsatz durch den gezielten Einsatz von Landingpages für deinen externen Traffic!</h1>
                            <div class="padding-vertical"></div>
                            <p class="paragraph-medium">ImproveASIN hilft dir externen Traffic optimal zu nutzen und das Ranking deiner Listings zu steigern. Erstelle in wenigen Schritten Conversion optimierte Landingpages mit ImproveASIN!</p>
                        </div>
                        <div class="input-content_component">
                            <div class="form-block w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get" class="input-form"><label for="Marketplace" class="input-label">Marketplace</label>
                                    <div class="padding-vertical is-form"></div><select id="Marketplace" name="Marketplace" data-name="Marketplace" required="" class="input-selector w-select">
                    <option value="">Niederlande</option>
                    <option value="First">Deutschland</option>
                    <option value="Second">USA</option>
                    <option value="Third">Spanien</option>
                  </select>
                                    <div class="padding-vertical is-hero-sec"></div><label for="ASIN-Code" class="input-label">ASIN Code</label>
                                    <div class="padding-vertical is-form"></div><input type="text" class="input-fields w-input" maxlength="256" name="ASIN-Code" data-name="ASIN Code" placeholder="ASIN83040-203945858" id="ASIN-Code" required="">
                                    <div class="padding-vertical is-hero"></div><input type="submit" value="Kostenfrei anlegen" data-wait="Gleich ist es geschafft!" class="input-submit-button w-button">
                                </form>
                                <div class="success-message w-form-done">
                                    <div class="text-block">Thank you! Your submission has been received!</div>
                                </div>
                                <div class="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <!-- <div class="section home" id="sectionHome">
            <div class="container">
              <div class="row home-row" id="homeRow">
                <div class="col-12 d-block d-md-none">
                  <a :href="adminRoot" target="_blank">
                    <img
                      alt="mobile hero"
                      class="mobile-hero"
                      src="/assets/img/landing-page/home-hero-mobile.png"
                    />
                  </a>
                </div>

                <div class="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div class="home-text">
                    <div class="display-1">
                      Dein Amazon Landing Page Generator.
                      <br /><b>100% kostenlos!</b>
                    </div>
                    <p class="white mb-5">
                      Steigere deinen Amazon Umsatz durch den gezielten Einsatz
                      von Landingpages für deinen externen Traffic!
                      <br />
                      <br />ImproveASIN hilft dir externen Traffic optimal zu
                      nutzen und das Ranking deiner Listings zu steigern.
                      Erstelle in wenigen Schritten Conversion optimierte
                      Landingpages mit ImproveASIN!
                    </p>
                    <AmazonLogin />
                  </div>
                </div>
                <div
                  class="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6 d-none d-md-block"
                >
                  <a :href="adminRoot" target="_blank">
                    <img
                      alt="hero"
                      src="/assets/img/landing-page/home-hero.png"
                    />
                  </a>
                </div>
              </div>

              <div class="row">
                <div class="col-12 p-0">
                  <div class="home-carousel">
                    <glide-component :settings="slideSettings">
                      <div
                        class="card"
                        v-for="(f, index) in slideItems"
                        :key="`slide_${index}`"
                      >
                        <div class="card-body text-center">
                          <div>
                            <i :class="f.icon + ' large-icon'"></i>
                            <h5 class="mb-3 font-weight-semibold">
                              {{ f.title }}
                            </h5>
                          </div>
                          <div>
                            <p class="detail-text">{{ f.detail }}</p>
                          </div>
                        </div>
                      </div>
                    </glide-component>
                  </div>
                </div>
              </div>

              <div class="row">
                <a
                  class="btn btn-circle btn-outline-semi-light hero-circle-button"
                  @click="scrollTo('#features')"
                >
                  <i class="simple-icon-arrow-down"></i>
                </a>
              </div>
            </div>
          </div> -->

          <!-- <div class="section">
            <div class="container" id="features">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Features At a Glance</h1>
                  <p>
                    We tried to create an admin theme that we would like to use
                    ourselves so we listed our priorities. We would like to have
                    a theme that is not over complicated to use, does the job
                    well, contains must have components and looks really nice.
                  </p>
                </div>
              </div>

              <div v-for="(feature, i) in features" :key="`feature_${i}`">
                <div v-if="i % 2 == 0" class="row feature-row">
                  <div
                    class="col-12 col-md-6 col-lg-5 d-flex align-items-center"
                  >
                    <div class="feature-text-container">
                      <h2>{{ feature.title }}</h2>
                      <p v-html="feature.detail"></p>
                    </div>
                  </div>
                  <div
                    class="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative"
                  >
                    <img
                      :alt="feature.title"
                      :src="feature.img"
                      class="feature-image-right feature-image-charts position-relative"
                    />
                  </div>
                </div>
                <div v-if="i % 2 == 1" class="row feature-row">
                  <div class="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                    <img
                      :alt="feature.title"
                      :src="feature.img"
                      class="feature-image-left feature-image-charts"
                    />
                  </div>
                  <div
                    class="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2"
                  >
                    <div class="feature-text-container">
                      <h2>{{ feature.title }}</h2>
                      <p v-html="feature.detail"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <!-- <div class="section background">
            <div class="container" id="layouts">
              <div class="row">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Structures &amp; Layouts</h1>
                  <p>
                    We did our best to create layouts for various needs that
                    developers might have and best experience for users.
                    <br />They are clean and slick. They function well and look
                    good at the same time.
                  </p>
                </div>
              </div>

              <div class="row pt-5">
                <div
                  class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5"
                  v-for="(l, index) in layouts"
                  :key="`layout_${index}`"
                >
                  <img
                    class="img-fluid border-radius depth-2 mb-3 semi-rounded"
                    :src="l.img"
                  />
                  <h4 class="text-center">{{ l.title }}</h4>
                </div>
              </div>
            </div>
          </div> -->

          <!-- <div class="section mb-0">
            <div class="container" id="components">
              <div class="row mb-5">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Components</h1>
                  <p>
                    We used most popular and well managed open source components
                    with bootstrap components. Combined them into even more
                    useful ones. Themed them with same design principles and
                    created a design harmony between components and layouts.
                    <br />
                    <br />From carousels to charts, switches to list we tried to
                    provide components that we like to use on our development
                    processes.
                  </p>
                </div>
              </div>
            </div>
            <img
              class="components-image mb-5 pb-5"
              src="/assets/img/landing-page/components.jpg"
            />
          </div> -->

 <div class="traffic-section">
                <div class="container-standard">
                    <div class="div-block-4">
                        <div class="traffic-content">
                            <p class="text-style-text">Mehr Traffic</p>
                            <div class="padding-vertical is-xsmall"></div>
                            <h2 data-w-id="c8bfcc1c-9c3b-ef99-a6b9-09cf99451878" 
                                class="h2-white">Warum Du eine Landingpage zwischen Deine externen Traffic quellen wie Posts/Ads und Dein Amazon Listing schalten solltest?</h2>
                            <div class="padding-vertical"></div>
                            <p data-w-id="c66db091-fa94-d9e9-7605-d2492b04a3af" 
                                class="text-style-white">Ads sorgen für viel Traffic auf einem Listing. Das kann das Ranking des Amazon Listings positiv beeinflussen. Muss es aber nicht! Warum nicht? Ganz einfach, die meisten Kunden kaufen nicht beim ersten Klick. Sie wollen sich
                                erst informieren, um sicherzustellen, dass dieses Produkt zu ihren Anforderungen passt.<br></p>
                        </div>
                        <div><img src="/assets/img/Group-62.png" loading="lazy" 
                                data-w-id="22bc2658-c60c-b823-c70e-e501366957a2" srcset="/assets/img/Group-62-p-500.png 500w, /assets/img/Group-62-p-800.png 800w, /assets/img/Group-62-p-1080.png 1080w, /assets/img/Group-62-p-1600.png 1600w, /assets/img/Group-62.png 1976w" sizes="100vw"
                                alt="" class="image-2"></div>
                    </div>
                </div>
            </div>



   <div class="with-improveasin-section">
                <div class="container-effect">
                    <div data-w-id="ec373471-f0ac-2ab1-3e87-1566c739cadc" 
                        class="effect-wrapper">
                        <div class="heading-content_component">
                            <div class="check-icon"></div>
                            <div class="padding-horizontal is-small"></div>
                            <h2 class="h2 centered">Ohne Improveasin Landingpage<br></h2>
                        </div>
                        <p class="paragraph-standard centered"><span class="text-span">Beispiel:<br></span><br>1000 Leute kommen pro Tag durch Werbung (Ads) auf dein Amazon Listing und 10 Leute kaufen dein Produkt. Dann hast du eine Conversion von gerade mal 1%.</p>
                        <div id="How-It-works" data-w-id="768a61f3-3ea2-83ed-34e2-7e5286719661" class="section black wf-section">
                            <div class="w-layout-grid container small flex">
                                <div data-w-id="768a61f3-3ea2-83ed-34e2-7e5286719663" class="timeline-wrapper">
                                    <div class="grey-line">
                                        <div class="white-line red"></div>
                                    </div>
                                </div>
                                <div id="w-node-_768a61f3-3ea2-83ed-34e2-7e5286719666-12513ffa" class="process-wrapper">
                                    <div class="step-wrapper margin-l">
                                        <div class="step"><img src="/assets/img/red-circle-1.svg" loading="lazy" alt="" class="step-1-number red">
                                            <div class="black-line"></div>
                                        </div>
                                        <div class="step-1-info-wrapper">
                                            <div class="red-effect-img"></div>
                                            <div class="step-info">
                                                <p class="effect-text-white">1000 Leute Klicken deine Posts &amp; Ads<br></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step-wrapper margin-l">
                                        <div class="step"><img src="/assets/img/Group-12.svg" loading="lazy" alt="" class="step-2-number red">
                                            <div class="black-line"></div>
                                        </div>
                                        <div class="step-2-info-wrapper _2">
                                            <div class="red-effect-img _2"></div>
                                            <div class="step-info">
                                                <p class="text-style-white inverted">1000 Leute auf dem Listing &amp; 10 kaufen<br></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step-wrapper margin-l">
                                        <div class="step"><img src="/assets/img/Group-13.svg" loading="lazy" alt="" class="step-3-number red">
                                            <div class="black-line is-abstand"></div>
                                        </div>
                                        <div class="step-3-info-wrapper">
                                            <div class="red-effect-img _3"></div>
                                            <div class="step-info">
                                                <p class="effect-text-white">1% Conversion Rate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step-wrapper margin-l"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="effect-wrapper">
                        <div class="heading-content_component">
                            <div class="check-icon blue"></div>
                            <div class="padding-horizontal is-small"></div>
                            <h2 class="h2 centered">Mit Improveasin Landingpage<br></h2>
                        </div>
                        <p class="paragraph-standard centered"><span class="text-span">Beispiel:<br></span><br>Wenn von denselben 1000 Leuten nur 100 Leute auf dein Amazon Listing kommen, weil 900 Interessenten vorher ausgefiltert wurden, die sich gegen einen Kauf entschieden haben und es
                            kaufen dieselben 10 Leute dein Produkt, dann hast du eine Conversion von 10%.  Das klingt schon besser, oder?</p>
                        <div id="How-It-works" data-w-id="09d1ea40-05c4-47e2-6cbd-a4c2280af897" class="section black wf-section">
                            <div class="w-layout-grid container small flex">
                                <div data-w-id="1ae3d8cd-bad6-9111-3513-5ee8ef756d67" class="timeline-wrapper">
                                    <div class="grey-line">
                                        <div class="white-line"></div>
                                    </div>
                                </div>
                                <div id="w-node-_1ae3d8cd-bad6-9111-3513-5ee8ef756d6a-12513ffa" class="process-wrapper">
                                    <div class="step-wrapper margin-l">
                                        <div class="step"><img src="/assets/img/1-.svg" loading="lazy" alt="" class="step-1-number">
                                            <div class="black-line"></div>
                                        </div>
                                        <div class="step-1-info-wrapper">
                                            <div class="effect-img"></div>
                                            <div class="step-info">
                                                <p class="effect-text-white">1000 Leute Klicken deine Posts &amp; Ads<br></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step-wrapper margin-l">
                                        <div class="step"><img src="/assets/img/2-.svg" loading="lazy" alt="" class="step-2-number">
                                            <div class="black-line"></div>
                                        </div>
                                        <div class="step-2-info-wrapper">
                                            <div class="effect-img _2"></div>
                                            <div class="step-info">
                                                <p class="text-style-white">Filtert Negativ-Entscheider aus, bevor sie auf dein Amazon Listing kommen</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step-wrapper margin-l">
                                        <div class="step"><img src="/assets/img/circle-3.svg" loading="lazy" alt="" class="step-3-number">
                                            <div class="black-line"></div>
                                        </div>
                                        <div class="step-3-info-wrapper">
                                            <div class="effect-img _3"></div>
                                            <div class="step-info">
                                                <p class="effect-text-white">100 Leute auf dem Listing &amp; 10 kaufen</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="step-wrapper margin-l">
                                        <div class="step"><img src="/assets/img/circle-4.svg" loading="lazy" alt="" class="step-4-number">
                                            <div class="black-line is-blue"></div>
                                        </div>
                                        <div class="step-4-info-wrapper">
                                            <div class="effect-img _4"></div>
                                            <div class="step-info">
                                                <p class="effect-text-white">10% Conversion Rate</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="div-block-13">
                            <div class="div-block-14"></div>
                        </div>
                    </div>
                </div>
            </div>

          <!-- <div class="section background">
            <div class="container" id="apps">
              <div class="row">
                <div
                  class="col-12 offset-0 col-lg-8 offset-lg-2 text-center mb-4"
                >
                  <h1>Applications</h1>
                  <p class="section-text">
                    With the help of components and layouts, we created four
                    different applications. They are a good way to get you
                    started if you want to build something similar.
                  </p>
                </div>
              </div>
              <div class="row screenshots">
                <div class="col-12 text-center mb-4">
                  <b-tabs
                    nav-class="justify-content-center"
                    content-class="card-body pt-0"
                    :no-fade="true"
                  >
                    <b-tab
                      v-for="(app, index) in applications"
                      :key="`app_${index}`"
                      :title="app.title"
                    >
                      <router-link :to="app.path">
                        <img
                          :alt="app.title"
                          :src="app.img"
                          class="app-image"
                        />
                      </router-link>
                    </b-tab>
                  </b-tabs>
                </div>
              </div>
            </div>
          </div> -->

          <!-- <div class="section mb-0">
            
            <div class="container" id="themes">
              <div class="row mb-5">
                <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Themes</h1>
                  <p>
                    We carefully choosed colors and created 10 different themes
                    with dark and light versions. You may also create your own
                    themes easily since all the theme related styling is managed
                    by Sass variables.
                  </p>
                </div>
              </div>
              <div
                class="row mb-5"
                v-for="(t, index) in themes"
                :key="`themes_${index}`"
              >
                <div class="col-12 text-center mb-3">
                  <h4 class="text-center">{{ t.title }}</h4>
                </div>
                <div class="col-12 col-md-6 col-lg-4 offset-lg-2 mb-3">
                  <div class="depth-2 color-container">
                    <div
                      v-for="(align, i) in ['left', 'center', 'right']"
                      :key="`align_light_${index}_${i}`"
                      :class="t.class + '-light-' + (i + 1) + ' color-' + align"
                    ></div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3">
                  <div class="depth-2 color-container">
                    <div
                      v-for="(align, i) in ['left', 'center', 'right']"
                      :key="`align_dark_${index}_${i}`"
                      :class="t.class + '-dark-' + (i + 1) + ' color-' + align"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->


            <div class="advantage-section">
                <div class="container-small">
                    <div class="traffic-content centered">
                        <p class="text-style-text">Vorteile</p>
                        <div class="padding-vertical is-xsmall"></div>
                        <h2 data-w-id="13ba1ed8-cc15-51f5-4abb-c1b0abd467b0" 
                            class="h2-white centered">Positive Begleiterscheinung</h2>
                        <div class="padding-vertical"></div>
                        <p data-w-id="13ba1ed8-cc15-51f5-4abb-c1b0abd467b3" 
                            class="text-style-white centered">Und nicht nur das, die 10 Leute verbringen jetzt auch weniger Zeit auf deinem Amazon Listing bevor sie es in den Warenkorb legen. Warum? Weil Sie sich alle nötigen Informationen bereits auf einer Landingpage angesehen haben. Die
                            Kaufentscheidung ist also schon gefallen bevor sie auf dein Amazon Listing kommen.<br><br>Für Amazon, die alle Bewegungen auf deinem Listing messen, sind die Conversion und die Verweildauer auf deinem Listing starke Signale
                            dafür, dass dein Produkt bei den Kunden gut ankommt. Das veranlasst Amazon dein Produkt in der organischen Suche höher zu ranken.</p>
                    </div>
                </div>
                <div class="container-large">
                    <div class="div-block-9">
                        <div data-w-id="dcf979d0-7e2d-e2c2-57a4-7048d77d9b89" class="div-block-10">
                            <div class="div-block-11"><img src="/assets/img/Vector.svg" loading="lazy" alt="" class="image-3"></div>
                            <p class="paragraph-standard advantage">Landing Page</p>
                        </div>
                        <div class="div-block-10">
                            <div class="div-block-11"><img src="/assets/img/iconmonstr-layer-16-6.svg" loading="lazy" alt="" class="image-3"></div>
                            <p class="paragraph-standard advantage">Höheres Ranking</p>
                        </div>
                        <div class="div-block-10">
                            <div class="div-block-11"><img src="/assets/img/iconmonstr-eye-3-1.svg" loading="lazy" alt="" class="image-3"></div>
                            <div class="div-block-12"></div>
                            <p class="paragraph-standard advantage">Höhere Sichtbarkeit</p>
                        </div>
                        <div class="div-block-10">
                            <div class="div-block-11"><img src="/assets/img/iconmonstr-user-29-1.svg" loading="lazy" alt="" class="image-3"></div>
                            <p class="paragraph-standard advantage">Mehr Kunden</p>
                        </div>
                        <div id="w-node-_9e0cff14-859f-3085-429a-63e91797b4b8-12513ffa" class="div-block-10">
                            <div class="div-block-11"><img src="/assets/img/iconmonstr-tag-20-1.svg" loading="lazy" alt="" class="image-3"></div>
                            <p class="paragraph-standard advantage">Mehr Sales</p>
                        </div>
                    </div>
                </div>
            </div>
            

          <!-- <div class="section footer mb-0" id="sectionFooter"> -->
           
            <!-- <div class="container">
              <div class="row footer-row">
                <div class="col-12 text-right">
                  <a
                    class="btn btn-circle btn-outline-semi-light footer-circle-button"
                    @click="scrollTo('#home')"
                    href="javascript:;"
                  >
                    <i class="simple-icon-arrow-up"></i>
                  </a>
                </div>
                <div class="col-12 text-center footer-content">
                  <a @click="scrollTo('#home')" href="javascript:;">
                    <img
                      class="footer-logo"
                      alt="footer logo"
                      src="/assets/logos/white-full.svg"
                    />
                  </a>
                </div>
              </div>
            </div> -->


               <div class="anlegen-section">

                <div class="container-s">
                    <div id="form" class="div-block-7">
                        <h2 class="heading-style-white centered">ImproveASIN ist dein Boost für externen Traffic<br></h2>
                        <div class="padding-vertical is-xsmall"></div>
                        <p class="paragraph-style-white centered">Nutze jetzt das 100% kostenfreie Tool und binde es gleich in deinen <br>externen Traffic Funnel ein!</p>
                        <div class="form-block w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" class="sec-input-form">
                                <div class="div-block-8"><label for="Marketplace-2" class="input-label white">Marketplace</label>
                                    <div class="padding-vertical is-form"></div><select id="Marketplace-2" name="Marketplace-2" data-name="Marketplace 2" class="last-input-selector w-select">
                    <option value="">Niederlande</option>
                    <option value="First">Deutschland</option>
                    <option value="Second">USA</option>
                    <option value="Third">Spanien</option>
                  </select>
                                    <div class="padding-vertical"></div><label for="ASIN-Code-2" class="input-label white">ASIN Code</label>
                                    <div class="padding-vertical is-form"></div><input type="text" class="last-input-field w-input" maxlength="256" name="ASIN-Code-2" data-name="ASIN Code 2" placeholder="ASIN83040-203945858" id="ASIN-Code-2" required="">
                                    <div class="padding-vertical is-xsmall"></div><input type="submit" value="Kostenfrei anlegen" data-wait="Gleich ist es geschafft!" class="input-submit-button sec w-button">
                                </div>
                            </form>
                            <div class="success-message w-form-done">
                                <div class="text-block">Thank you! Your submission has been received!</div>
                            </div>
                            <div class="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> </div>

            <div class="footer">
              <div class="container-standard">
                <div class="footer-wrapper">
                  <a href="impressum.html" class="footer-link">Impressum</a>
                  <div class="padding-horizontal"></div>
                  <a href="datenschutz.html" class="footer-link">Datenschutz</a>
                </div>
              </div>
            </div>

          <!-- </div> -->
          
        <!-- </div> -->
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
