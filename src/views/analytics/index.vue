<template>
  <header-component />
  <v-analytics-content />
  <div style="margin-top: 60px">
    <footer-component />
  </div>
</template>

<script>

import HeaderComponent from "@/components/main/header.vue";
import FooterComponent from "@/components/main/footer.vue";
import VAnalyticsContent from "@/components/analytics/analytics_content.vue";

export default {
  name: "index",
  components: {
    VAnalyticsContent,
    FooterComponent, HeaderComponent},
}
</script>

<style scoped>

</style>