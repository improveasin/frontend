<template>
  <b-row>
    <b-colxx class="disable-text-selection">
      <list-page-heading
        :title="$t('menu.data-list')"
        :selectAll="selectAll"
        :isSelectedAll="isSelectedAll"
        :isAnyItemSelected="isAnyItemSelected"
        :keymap="keymap"
        :displayMode="displayMode"
        :changeDisplayMode="changeDisplayMode"
        :changeOrderBy="changeOrderBy"
        :changePageSize="changePageSize"
        :sort="sort"
        :searchChange="searchChange"
        :from="from"
        :to="to"
        :total="total"
        :perPage="perPage"
      ></list-page-heading>
      <template v-if="isLoad">
        <div class="loading"></div>
      </template>
      <template v-else>
        <list-page-listing
          :displayMode="displayMode"
          :items="items"
          :selectedItems="selectedItems"
          :toggleItem="toggleItem"
          :toggleModal="toggleModal"
          :showLandingPage="showLandingPage"
          :lastPage="lastPage"
          :perPage="perPage"
          :page="page"
          :changePage="changePage"
          :handleContextMenu="handleContextMenu"
          :onContextMenuAction="onContextMenuAction"
        ></list-page-listing>

        <b-modal
          button-size="lg"
          id="new-landing-page"
          ref="new-landing-page"
          :title="`ASIN: ${currentLandingPage.asin}`"
          size="xl"
          @show="showModal"
          @hidden="hideModal"
          @ok="saveLandingPage"
        >
          <landing-page-modal :landingPage="currentLandingPage" />
        </b-modal>
      </template>
    </b-colxx>
  </b-row>
</template>

<script>
import ListPageHeading from "../../containers/pages/ListPageHeading";
import ListPageListing from "../../containers/pages/ListPageListing";
import LandingPageModal from "../../components/Modals/LandingPageModal.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    "landing-page-modal": LandingPageModal,
    "list-page-heading": ListPageHeading,
    "list-page-listing": ListPageListing,
  },
  data() {
    return {
      isLoad: true,
      displayMode: "thumb",
      sort: {
        column: "title",
        label: "Product Name",
      },
      page: 1,
      perPage: 4,
      search: "",
      from: 0,
      to: 0,
      total: 0,
      lastPage: 0,
      selectedItems: [],
      currentLandingPage: {
        asin: "",
      },
    };
  },
  methods: {
    showModal() {
      debugger;
    },
    hideModal() {
      debugger;
    },
    saveLandingPage() {
      debugger;
    },
    changeDisplayMode(displayType) {
      this.displayMode = displayType;
    },
    changePageSize(perPage) {
      this.page = 1;
      this.perPage = perPage;
    },
    changeOrderBy(sort) {
      this.sort = sort;
    },
    searchChange(val) {
      this.search = val;
      this.page = 1;
    },

    selectAll(isToggle) {
      if (
        this.selectedItems &&
        this.selectedItems.length >= this.items.length
      ) {
        if (isToggle) this.selectedItems = [];
      } else {
        this.selectedItems = this.items.map((x) => x.id);
      }
    },
    keymap(event) {
      switch (event.srcKey) {
        case "select":
          this.selectAll(false);
          break;
        case "undo":
          this.selectedItems = [];
          break;
      }
    },
    getIndex(value, arr, prop) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value) {
          return i;
        }
      }
      return -1;
    },
    toggleItem(event, itemId) {
      if (event.shiftKey && this.selectedItems.length > 0) {
        let itemsForToggle = this.items;
        var start = this.getIndex(itemId, itemsForToggle, "id");
        var end = this.getIndex(
          this.selectedItems[this.selectedItems.length - 1],
          itemsForToggle,
          "id"
        );
        itemsForToggle = itemsForToggle.slice(
          Math.min(start, end),
          Math.max(start, end) + 1
        );
        this.selectedItems.push(
          ...itemsForToggle.map((item) => {
            return item.id;
          })
        );
      } else {
        if (this.selectedItems.includes(itemId)) {
          this.selectedItems = this.selectedItems.filter((x) => x !== itemId);
        } else this.selectedItems.push(itemId);
      }
    },
    toggleModal(event, data) {
      this.currentLandingPage = data;
      this.$bvModal.show("new-landing-page");
    },
    showLandingPage(event, data) {
      this.$router.push({
        name: "show-landing-page",
        params: { id: data.objectId },
      });
    },
    handleContextMenu(vnode) {
      if (!this.selectedItems.includes(vnode.key)) {
        this.selectedItems = [vnode.key];
      }
    },
    onContextMenuAction(action) {
      console.log(
        "context menu item clicked - " + action + ": ",
        this.selectedItems
      );
    },
    changePage(pageNum) {
      this.page = pageNum;
    },
  },
  computed: {
    ...mapGetters({
      getPages: "pages/getPages",
    }),
    isSelectedAll() {
      return this.selectedItems.length >= this.items.length;
    },
    isAnyItemSelected() {
      return (
        this.selectedItems.length > 0 &&
        this.selectedItems.length < this.items.length
      );
    },
    items() {
      const pages = this.getPages;
      console.log(`pages `, pages);

      if (pages) {
        this.isLoad = false;

        if (this.search.length === 0) {
          return pages;
        }

        return pages.filter((page) => {
          return (
            page.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
          );
        });
      }
    },
  },
  watch: {
    search() {
      this.page = 1;
    },
  },
};
</script>
