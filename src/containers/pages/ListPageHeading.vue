<template>
  <b-row>
    <b-colxx xxs="12">
      <h1>{{ title }}</h1>
      <div class="top-right-button-container">
        <b-button v-b-modal.modalright variant="primary" size="lg" class="top-right-button">{{ $t('pages.add-new') }}
        </b-button>
      </div>
      <add-new-modal :categories="categories" :statuses="statuses"></add-new-modal>
      <div class="mb-2 mt-2">
        <b-button variant="empty" class="pt-0 pl-0 d-inline-block d-md-none" v-b-toggle.displayOptions>
          {{ $t('pages.display-options') }}
          <i class="simple-icon-arrow-down align-middle" />
        </b-button>
        <div id="displayOptions" class="d-md-block">
          <div class="d-block d-md-inline-block pt-1">
            <div class="search d-inline-block float-md-left mr-3 align-top" style="width: 400px">
              <b-input :placeholder="$t('menu.search')" @input="(val) => searchChange(val)" />
            </div>

            <div class="mr-3 d-inline-block float-right">
              <a :class="{ 'mr-2 view-icon': true, 'active': displayMode === 'thumb' }" @click="changeDisplayMode('thumb')">
                <thumb-list-icon />
              </a>
              <a :class="{ 'mr-2 view-icon': true, 'active': displayMode === 'image' }" @click="changeDisplayMode('image')">
                <image-list-icon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="separator mb-5" />
    </b-colxx>
  </b-row>
</template>
<script>
import {
  DataListIcon,
  ThumbListIcon,
  ImageListIcon
} from "../../components/Svg";
import AddNewModal from "./AddNewModal";

export default {
  components: {
    "data-list-icon": DataListIcon,
    "thumb-list-icon": ThumbListIcon,
    "image-list-icon": ImageListIcon,
    "add-new-modal": AddNewModal
  },
  props: [
    "title",
    "selectAll",
    "isSelectedAll",
    "isAnyItemSelected",
    "keymap",
    "displayMode",
    "changeDisplayMode",
    "changeOrderBy",
    "changePageSize",
    "sort",
    "searchChange",
    "from",
    "to",
    "total",
    "perPage"
  ],
  data() {
    return {
      categories: [
        {
          label: "Cakes",
          value: "Cakes"
        },
        {
          label: "Cupcakes",
          value: "Cupcakes"
        },
        {
          label: "Desserts",
          value: "Desserts"
        }
      ],
      statuses: [
        {
          text: "ON HOLD",
          value: "ON HOLD"
        },
        {
          text: "PROCESSED",
          value: "PROCESSED"
        }
      ],
      sortOptions: [
        {
          column: "title",
          label: "Product Name"
        },
        {
          column: "category",
          label: "Category"
        },
        {
          column: "status",
          label: "Status"
        }
      ],
      pageSizes: [4, 8, 12]
    };
  }
};
</script>
