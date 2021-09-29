<template>
  <div class="">
    <b-card class="mb-4" :title="$t('forms.basic')">
      <b-form @submit="onSubmit">
        <b-form-group label-cols="2" horizontal :label="$t('forms.subdomain')">
          <b-input-group>
            <b-form-input
              v-model="form.subdomain"
              :placeholder="$t('forms.subdomain')"
            ></b-form-input>
            <div class="pt-2 pl-4">https://www.improveasin.com</div>
          </b-input-group>
        </b-form-group>
        <b-button type="submit" variant="primary" class="mt-4">{{
          $t("forms.submit")
        }}</b-button>
      </b-form>
    </b-card>
    <b-card class="mb-4" :title="$t('forms.analytics')">
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
        <b-button type="submit" variant="primary" class="mt-4">{{
          $t("forms.submit")
        }}</b-button>
      </b-form>
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
      },
    };
  },
  async created() {
    const settings = await Settings.getSettings();

    this.form = {
      subdomain: settings.subdomain,
      facebookPixel: settings.facebookPixel,
      googleTagManager: settings.googleTagManager,
    };
  },
  methods: {
    async onSubmit() {
      console.log(JSON.stringify(this.form));
      const result = await Settings.saveSettings(this.form);
    },
  },
};
</script>
