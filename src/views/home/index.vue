<template>
  <header-component />
  <hero-first-component />
  <info-blocks-component />
  <hero-second-component />
  <div style="margin-top: 60px">
    <footer-component />
  </div>
</template>

<script>

import HeaderComponent from "@/components/main/header.vue";
import HeroFirstComponent from "@/components/home/hero_first.vue";
import InfoBlocksComponent from "@/components/home/info_blocks.vue";
import HeroSecondComponent from "@/components/home/hero_second.vue";
import FooterComponent from "@/components/main/footer.vue";

export default {
  name: "index",
  components: {FooterComponent, HeroSecondComponent, InfoBlocksComponent, HeroFirstComponent, HeaderComponent},
}
</script>

<style scoped>

</style>