<template>
  <b-modal
    id="modalright"
    ref="modalright"
    :title="$t('pages.add-new-modal-title')"
    modal-class="modal-right"
  >
    <b-form v-bind:style="{ opacity: isLoad ? '0.1' : '1' }">
      <b-form-group label="ASIN">
        <b-form-input v-model="newItem.asin" />
      </b-form-group>
    </b-form>
    <template v-if="isLoad">
      <div class="loading"></div>
    </template>

    <template slot="modal-footer">
      <b-button variant="outline-secondary" @click="hideModal('modalright')">{{
        $t("pages.cancel")
      }}</b-button>
      <b-button variant="primary" @click="addNewItem()" class="mr-1"
        >Create new landingpage</b-button
      >
    </template>
  </b-modal>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Page from "../../services/page";
import store from "../../store";

export default {
  components: {
    "v-select": vSelect,
  },
  props: ["categories", "statuses"],
  data() {
    return {
      isLoad: false,
      newItem: {
        asin: "",
      },
    };
  },
  methods: {
    async addNewItem() {
      console.log("adding item : ", this.newItem);
      this.isLoad = true;

      Page.createPage(this.newItem.asin)
        .then(async () => {
          const user = await Backendless.UserService.getCurrentUser();
          Page.getPages(user.objectId)
            .then((pages) => {
              console.log(`Fetch your landing pages...`, pages);

              store.dispatch("pages/setPages", pages);

              this.isLoad = false;

              this.hideModal("modalright");
            })
            .catch(console.error);

          this.hideModal("modalright");
        })
        .catch(console.error);
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
};
</script>
