<template>
  <div class="container">
    <div class="block">
      <p class="header">Lessons</p>
      <p class="info">Access a deeper scan with unprescedented levels of AI text analysis.</p>
    </div>
    <div style="width: 30px"></div>
    <div class="block">
      <p class="header">Analytics</p>
      <p class="info">Scan documents for plagiarism and our AI copyright check.</p>
    </div>
    <div style="width: 30px"></div>
    <div class="block">
      <p class="header">Monitorning</p>
      <p class="info">Easily scan dozens of files at once, organize, save, and download reports.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "info-blocks-component",
}
</script>

<style scoped>
.container {
  margin-top: 100px;
  display: flex;
}
.block {
  flex: 1;
  background: #EFEFEF;
  border-radius: 18px;
  min-height: 140px;
  padding: 21px 29px;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid #EFEFEF;
}
.block:hover {
  background: white;
  border: 1px solid #4BC462;
}
.block:hover .header {
  color: #4BC462;
}
.block:hover .info {
  color: black;
}
.header {
  color: black;
  font-size: 22px;
  font-family: Rubik-regular, system-ui;
  font-weight: 700;
  margin-bottom: 28px;
  transition: 0.3s;
}
.info {
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  height: 140%;
  font-family: Rubik-regular, system-ui;
  transition: 0.3s;
}
</style>