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

.alert-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.3);
}
.alert-content-container {
  position: absolute;
  text-align: start;
  top: 50%;
  left: 50%;
  -ms-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  max-width: 100%;
  background: white;
  border-radius: 16px;
  padding: 24px;
  width: 470px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.close-button {
  margin-left: auto;
  margin-right: 0;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  right: 24px;
  transition: 0.2s;
}
.close-button>svg {
  fill: rgba(0, 0, 0, 0.5);
  width: 16px;
  height: 16px;
  margin: 7px;
  transition: 0.3s;
}
.close-button:hover {
  background: #329447;
}
.close-button:hover>svg {
  fill: white;
}
.category-chart-name {
  color: black;
}
.chart-amount {

}
.spent-chart-amount {

}
</style>

<style scoped>

</style>
