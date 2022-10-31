<template>
  <div>

    <b-row>
      <b-colxx xxs="12">
        <h1>Settings</h1>
        
        <div class="separator mb-5" />
      </b-colxx>
    </b-row>
    <!--
    <b-card class="mb-4" title="General">
      <b-form @submit="onSubmit">
        <b-form-group label-cols="2" label="Subdomain">
          <b-input-group>
            <b-form-input
              v-model="form.subdomain"
              :placeholder="$t('forms.subdomain')"
            ></b-form-input>
            <div class="pt-2 pl-4">https://{{ form.subdomain ? form.subdomain : '[subdomain]' }}.improveasin.com</div>
          </b-input-group>
        </b-form-group>
        <b-button type="submit" variant="primary" class="mt-4">{{
          $t("forms.submit")
        }}</b-button>
      </b-form>

      <div
        v-bind:class="[isLoading ? 'visible' : 'invisible', 'loading-overlay']"
        style="background-color: rgb(255 255 255 / 90%); position: absolute;"
      >
        <div class="loading"></div>
      </div>
    </b-card>
    -->
    <b-card class="mb-4" title="Logo">
      <b-form @submit="onLogoSubmit">
        <b-form-group>
          <div class="flex flex-row pb-2" style="display: flex; justify-content: space-evenly">
            <div class="basis-1/4">
              <h5>Current Logo</h5>
              <b-container v-if="currentLogo">
                <b-img :src="currentLogo" height="100"></b-img>
              </b-container>
            </div>
            <div class="basis-1/4">
              <h5>New Logo</h5>
              <b-container v-if="newLogo" class="pb-3">
                <b-img :src="newLogo" height="100"></b-img>
              </b-container>
              <b-input-group>
                <b-form-file v-model="logo" @change="onLogoChange" :placeholder="$t('forms.logo')"></b-form-file>
              </b-input-group>
              <b-container v-if="logo">
                <b-button type="submit" variant="primary" class="mt-4 flex items-end">Upload image</b-button>
              </b-container>
            </div>
          </div>
        </b-form-group>
      </b-form>

      <div v-bind:class="[isLoading ? 'visible' : 'invisible', 'loading-overlay']"
        style="background-color: rgb(255 255 255 / 90%); position: absolute;">
        <div class="loading"></div>
      </div>
    </b-card>
    <b-card class="mb-4" :title="$t('forms.analytics')">
      <b-form @submit.prevent="onSubmit">
        <b-form-group label-cols="2" horizontal :label="$t('forms.facebookPixel')">
          <b-form-textarea v-model="form.facebookPixel" rows="6" max-rows="6"></b-form-textarea>
        </b-form-group>
        <b-form-group label-cols="2" horizontal :label="$t('forms.googleTagManager')">
          <b-form-textarea type="password" v-model="form.googleTagManager" rows="6" max-rows="6"></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary" class="mt-4">{{
            $t("forms.submit")
        }}</b-button>
      </b-form>

      <div v-bind:class="[isLoading ? 'visible' : 'invisible', 'loading-overlay']"
        style="background-color: rgb(255 255 255 / 90%); position: absolute;">
        <div class="loading"></div>
      </div>
    </b-card>
  </div>
</template>

<script>
import Settings from "../../services/settings";

export default {
  data() {
    return {
      form: {
        subdomain: "",
        facebookPixel: "",
        googleTagManager: "",
        logo: "",
      },
      currentLogo: "",
      newLogo: "",
      logo: "",
      isLoading: false,
    };
  },
  async created() {
    const settings = await Settings.getSettings();

    if (settings) {
      this.form = {
        objectId: settings.objectId,
        subdomain: settings.subdomain,
        facebookPixel: settings.facebookPixel,
        googleTagManager: settings.googleTagManager,
      };
      this.currentLogo = settings.logo;
    }
  },
  methods: {
    async onSubmit() {
      console.log(JSON.stringify(this.form));
      this.isLoading = true;
      Settings.saveSettings(this.form)
        .then()
        .catch()
        .finally(() => {
          this.isLoading = false;
        });
    },
    async onLogoSubmit(event) {
      event.preventDefault();

      this.isLoading = true;

      Settings.saveLogo(this.logo, this.logo.name)
        .then((response) => {
          console.log(response);
          response.fileURL;

          const settings = {
            ...this.form,
            logo: response.fileURL,
          };
          Settings.saveSettings(settings)
            .then((response) => {
              console.log(response);

              this.newLogo = "";
              this.logo = "";
              this.currentLogo = response.logo;
            })
            .catch(console.error)
            .finally(() => {
              this.isLoading = false;
            });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    onLogoChange(event) {
      this.newLogo = URL.createObjectURL(event.target.files[0]);
    },
  },
};
</script>
