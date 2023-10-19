<template>
  <app-layout>
    <router-view />
    <in-app-feedback />
  </app-layout>
</template>

<script>
import AppLayout from "../../layouts/AppLayout";
import InAppFeedback from "../../components/InAppFeedback.vue"

export default {
  components: {
    "app-layout": AppLayout,
    "in-app-feedback": InAppFeedback
  }
};
</script>
