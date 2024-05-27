<template>
  <header-component />
  <v-wallet-content />
  <div style="margin-top: 60px">
    <footer-component />
  </div>
</template>

<script>

import HeaderComponent from "@/components/main/header.vue";
import FooterComponent from "@/components/main/footer.vue";
import VWalletContent from "@/components/wallet/wallet_content.vue";

export default {
  name: "index",
  components: {
    VWalletContent,
    FooterComponent, HeaderComponent},
}
</script>

<style scoped>

</style>