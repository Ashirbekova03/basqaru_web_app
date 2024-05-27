<template>
  <header-component />
  <v-lesson-content />
  <div style="margin-top: 100px">
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "@/components/main/header.vue";
import FooterComponent from "@/components/main/footer.vue";
import VLessonContent from "@/components/lesson/lesson_content.vue";
export default {
  name: "index",
  components: {VLessonContent, FooterComponent, HeaderComponent}
}
</script>

<style scoped>

</style>