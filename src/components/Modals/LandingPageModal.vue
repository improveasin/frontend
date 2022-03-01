<template>
  <b-modal
    button-size="lg"
    id="new-landing-page"
    ref="new-landing-page"
    :title="`ASIN: ${landingPage.asin}`"
    size="xl"
    @show="showModal"
    @hidden="hideModal"
    @ok="saveLandingPage"
  >
    <div class="d-flex flex-row">
      <img
        :src="landingPage.image.url"
        class="list-thumbnail responsive border-0"
        :alt="landingPage.title"
      />
      <div>
        <h1>{{ landingPage.title }}</h1>
      </div>
    </div>
    <br />
    <b-list-group horizontal>
      <b-list-group-item>Impressions<br /><span>2</span></b-list-group-item>
      <b-list-group-item>Click<br /><span>4</span></b-list-group-item>
    </b-list-group>
    <b-input-group prepend="Page url">
      <b-form-input :value="`${host}/pages/${landingPage.objectId}`" />

      <b-input-group-append>
        <b-button v-clipboard:copy="`${host}/pages/${landingPage.objectId}`">
          Copy url
        </b-button>
      </b-input-group-append>
    </b-input-group>

    <br /><br />

    <b-button-group>
      <b-button
        icon="trash-fill"
        aria-hidden="true"
        @click="askForDelete(row, $event)"
        variant="danger"
        font-scale="1.5"
        >Delete product</b-button
      >

      <b-button
        size="sm"
        @click="updatePage(row, $event)"
        class="mr-2"
        variant="secondary"
      >
        Sync with Amazon database
      </b-button>
    </b-button-group>

    <br /><br />

    <br /><br />

    <h3>{{ $t("forms.analytics") }}</h3>
    <b-form @submit.prevent="onSubmit">
      <b-form-group
        label-cols="2"
        horizontal
        :label="$t('forms.facebookPixel')"
      >
        <b-form-textarea
          v-model="form.facebookPixel"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-form-group
        label-cols="2"
        horizontal
        :label="$t('forms.googleTagManager')"
      >
        <b-form-textarea
          type="password"
          v-model="form.googleTagManager"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import Page from "../../services/page";

export default {
  props: ["landingPage"],
  data() {
    return {
      form: {
        facebookPixel: this.landingPage.facebookPixel,
        googleTagManager: this.landingPage.googleTagManager,
      },
      host: `${location.protocol}//${location.host}`,
    };
  },
  created() {
    this.form.facebookPixel = this.landingPage.facebookPixel;
    this.form.googleTagManager = this.landingPage.googleTagManager;
    console.log(this.landingPage);
  },
  methods: {
    showModal(event) {
    },
    hideModal(event) {
    },
    saveLandingPage(event) {
      debugger;
    },
    async onSubmit() {
      debugger;
      const page = { ...this.landingPage, ...this.form };
      const result = await Page.updatePage(page);
    },
  },
};
</script>
