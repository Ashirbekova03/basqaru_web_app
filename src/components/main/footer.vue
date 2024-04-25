<template>
  <div class="footer-container">
    <div class="logo-container">
      <img src="@/assets/images/logo.png" class="logo-image">
    </div>
    <p class="info-text">IITU 2024</p>
  </div>
</template>

<script>

export default {
  name: "footer-component",
}
</script>

<style scoped>
.footer-container {
  padding-bottom: 14px;
  width: 100%;
  display: flex;
  align-items: center;
}
.logo-container {
  flex: 1;
}
.logo-image {
  height: 50px;
}
svg {
  width: 14px;
  height: 14px;
  margin-right: 4px;
}
.info-text {
  color: black;
  font-size: 18px;
  font-family: Rubik-regular, system-ui;
  font-weight: 600;
}
</style>