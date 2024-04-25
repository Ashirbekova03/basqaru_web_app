<template>
  <div class="main">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
@import "@/assets/fonts/rubik.css";
@import "@/assets/fonts/stolzl.css";

body, html, p {
  margin: 0;
  padding: 0;
}
.main {
  margin-left: 10%;
  width: 80%;
}
.primary-button {
  width: max-content;
  font-family: Rubik-regular, system-ui;
  color: white;
  font-size: 16px;
  font-weight: 400;
  padding: 14px 24px;
  background: #4BC462;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.primary-button:hover {
  background: #329447;
}
@media screen and (max-width: 1000px) {
  .main {
    margin-left: 5%;
    width: 90%;
  }
}
@media screen and (max-width: 900px) {
  .main {
    width: 800px;
    margin-left: 50px;
  }
}
</style>

<style scoped>

</style>
