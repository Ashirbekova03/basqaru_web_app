<template>
  <header-component />
  <v-add-transaction-content />
  <div style="margin-top: 60px">
    <footer-component />
  </div>
</template>

<script>

import HeaderComponent from "@/components/main/header.vue";
import FooterComponent from "@/components/main/footer.vue";
import VAddTransactionContent from "@/components/wallet/add_transaction_component.vue";

export default {
  name: "index",
  components: {
    VAddTransactionContent,
    FooterComponent, HeaderComponent},
}
</script>

<style scoped>

</style>