<template>
  <div class="content">
    <p class="header-text">Basqaru</p>
    <div class="container">
      <div style="flex: auto; text-align: center">
        <img src="@/assets/images/hero_2.png" class="image-hero">
      </div>
      <div class="part" style="align-items: center">
        <div>
          <p class="info-text">With our app, you'll learn how to create a budget, manage expenses effectively, and increase your income. We provide simple and easy-to-use tools to help improve your financial status. Join our community and start your journey to financial independence today! Let's achieve financial well-being together!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "hero-second-component",
}
</script>

<style scoped>
.content {
  text-align: center;
  margin-top: 80px;
}
.container {
  display: flex;
}
.image-hero {
  margin-left: 20px;
  width: 400px;
}
.part {
  flex: auto;
  max-width: 60%;
  display: flex;
}
.header-text {
  font-size: 60px;
  margin-bottom: 20px;
  color: #4BC462;
  font-family: Rubik-regular, system-ui;
  font-weight: 700;
}
.info-text {
  font-size: 22px;
  line-height: 140%;
  font-family: Rubik-regular, system-ui;
  color: rgba(0, 0, 0, 0.6);
}
</style>