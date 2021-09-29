<template>
  <b-modal
    id="modalright"
    ref="modalright"
    :title="$t('pages.add-new-modal-title')"
    modal-class="modal-right"
  >
    <b-form>
      <b-form-group label="ASIN">
        <b-form-input v-model="newItem.asin" />
      </b-form-group>
    </b-form>

    <template slot="modal-footer">
      <b-button variant="outline-secondary" @click="hideModal('modalright')">{{
        $t("pages.cancel")
      }}</b-button>
      <b-button variant="primary" @click="addNewItem()" class="mr-1">{{
        $t("pages.submit")
      }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Page from "../../services/page";

export default {
  components: {
    "v-select": vSelect
  },
  props: ["categories", "statuses"],
  data() {
    return {
      newItem: {
        asin: ""
      }
    };
  },
  methods: {
    addNewItem() {
      console.log("adding item : ", this.newItem);

      Page.createPage(this.newItem.asin)
        .then(() => {
          this.hideModal('modalright')
        })
        .catch(console.error);
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    }
  }
};
</script>
