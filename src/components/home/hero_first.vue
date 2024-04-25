<template>
  <div class="container">
    <div class="part" style="align-items: center">
      <div>
        <p class="header-text">Welcome to<br><span class="select-part">Basqaru!</span></p>
        <p class="info-text">Managing finances is the key to achieving financial stability and life goals. Our app is designed to help you master the basics of finance and take control of your money.</p>
      </div>
    </div>
    <img src="@/assets/images/hero.png" class="image-hero">
  </div>
</template>

<script>

export default {
  name: "hero-first-component",
}
</script>

<style scoped>
.container {
  margin-top: 80px;
  display: flex;
}
.image-hero {
  margin-left: 20px;
  width: 400px;
}
.part {
  flex: 1;
  max-width: 60%;
  display: flex;
}
.header-text {
  font-size: 60px;
  margin-bottom: 40px;
  color: black;
  font-family: Rubik-regular, system-ui;
  font-weight: 700;
}
.select-part {
  color: #4BC462;
}
.info-text {
  font-size: 22px;
  line-height: 140%;
  font-family: Rubik-regular, system-ui;
  color: rgba(0, 0, 0, 0.6);
}
</style>