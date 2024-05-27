<template>
  <div class="main-container" v-if="!loading">
    <div class="search-container">
      <input placeholder="Search..." v-model="searchText" @input="searchLessons">
      <div class="icon-container">
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0575 20.7437L16.5113 15.1975C18.0227 13.349 18.7659 10.9903 18.587 8.60928C18.4081 6.22825 17.3208 4.00708 15.5502 2.40518C13.7795 0.803284 11.4609 -0.0567715 9.07394 0.00291071C6.68695 0.0625929 4.41421 1.03745 2.72583 2.72583C1.03745 4.41421 0.0625929 6.68695 0.00291071 9.07394C-0.0567715 11.4609 0.803284 13.7795 2.40518 15.5502C4.00708 17.3208 6.22825 18.4081 8.60928 18.587C10.9903 18.7659 13.349 18.0227 15.1975 16.5113L20.7437 22.0575C20.9189 22.2268 21.1537 22.3205 21.3973 22.3183C21.6409 22.3162 21.874 22.2185 22.0462 22.0462C22.2185 21.874 22.3162 21.6409 22.3183 21.3973C22.3205 21.1537 22.2268 20.9189 22.0575 20.7437ZM9.32143 16.7548C7.85125 16.7548 6.41409 16.3188 5.19168 15.502C3.96927 14.6852 3.01652 13.5243 2.45391 12.166C1.8913 10.8078 1.74409 9.31318 2.03091 7.87125C2.31773 6.42933 3.02568 5.10483 4.06526 4.06526C5.10483 3.02568 6.42933 2.31773 7.87125 2.03091C9.31318 1.74409 10.8078 1.8913 12.166 2.45391C13.5243 3.01652 14.6852 3.96927 15.502 5.19168C16.3188 6.41409 16.7548 7.85125 16.7548 9.32143C16.7526 11.2922 15.9687 13.1816 14.5752 14.5752C13.1816 15.9687 11.2922 16.7526 9.32143 16.7548Z" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="lesson-content" v-if="lessons.length > 0">
      <div class="lesson-line">
        <div class="player-container">
          <youtube-vue3 v-if="lessonSelected >= 0" :videoid="lessons[lessonSelected].contentUrl" :controls="1" :modestbranding="0" :loop="0" :autoplay="0" width="100%" height="400px" style="border-radius: 20px"/>
        </div>
        <div class="lessons-container">
          <div class="lessons-header">
            <p class="header-text">Lessons</p>
            <p class="numbers"><span class="selected-number">{{lessonSelected + 1}}</span>/{{lessons.length}}</p>
          </div>
          <div class="line"></div>
          <div class="list">
            <div v-for="(lesson, index) in lessons" :key="index">
              <div class="lesson-item" @click="this.lessonSelected = index">
                <img :src="'https://img.youtube.com/vi/' + lesson.contentUrl + '/0.jpg'" class="lesson-image">
                <p class="lesson-title">{{lesson.title}}</p>
              </div>
              <div class="line" v-if="lesson.id !== lessons[lessons.length - 1].id"></div>
            </div>
          </div>
        </div>
      </div>
      <p class="lesson-data">{{lessons[lessonSelected].data}}</p>
    </div>
    <div v-else style="margin-top: 60px; text-align: center">
      <p class="numbers">Lessons list is empty</p>
    </div>
  </div>
  <div v-else class="main-container">

  </div>
</template>

<script>
import api from "@/service/api.js";

export default {
  name: "v-lesson-content",
  data() {
    return {
      searchText: "",
      lessons: [],
      lessonSelected: -1,
      loading: true
    }
  },
  mounted() {
    this.loadLessons();
  },
  methods: {
    loadLessons() {
      this.loading = true;
      api.lesson.findAll().then((response) => {
        this.lessons = response.data;
        if (this.lessons.length > 0) {
          this.lessonSelected = 0;
        }
        this.loading = false;
      })
    },
    searchLessons() {
      if (this.searchText.length !== 0) {
        api.lesson.search(this.searchText).then((response) => {
          this.lessons = response.data;
          if (this.lessons.length > 0) {
            this.lessonSelected = 0;
          }
          this.loading = false;
        })
      } else {
        this.loadLessons();
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  min-height: 80vh;
}
.search-container {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  min-width: 300px;
  background: #F8F8F8;
  border-radius: 5px;
  display: flex;
}
input {
  flex: 1;
  font-size: 18px;
  font-family: Rubik-light, system-ui;
  color: black;
  margin-left: 24px;
  margin-right: 24px;
  border: none;
  background: transparent;
}
::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
input:focus {
  outline: none;
  border: none;
}
.icon-container {
  background: #4BC462;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 48px;
  width: 48px;
  text-align: center;
}
.icon-container>svg {
  width: 22px;
  height: 22px;
  margin-top: 12px;
}
.lesson-line {
  display: flex;
  margin-top: 50px;
}
.player-container {
  flex: 1;
}
.lesson-content {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.lessons-container {
  margin-left: 33px;
  display: flex;
  flex-direction: column;
  background: #F8F8F8;
  width: 300px;
  border-radius: 10px;
  height: 400px;
}
.lessons-header {
  display: flex;
  padding: 20px 26px;
}
.header-text {
  flex: 1;
  font-size: 20px;
  color: black;
  font-family: Rubik-medium, system-ui;
}
.numbers {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.2);
  font-family: Rubik-regular, system-ui;
}
.selected-number {
  color: #4BC462;
  font-weight: 700;
}
.line {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
}
.list {
  flex: 1;
  overflow: auto;
  padding-left: 24px;
  padding-right: 24px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.lesson-item {
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 240px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.lesson-image {
  margin-right: 12px;
  width: 102px;
  height: 61px;
  border-radius: 5px;
  object-fit: cover;
}
.lesson-title {
  flex: 1;
  font-size: 14px;
  color: black;
  font-family: Rubik-regular, system-ui;
}
.list::-webkit-scrollbar {
  width: 3px;
  height: 4px;
}
.list::-webkit-scrollbar-track {
  background: white;
}
.list::-webkit-scrollbar-thumb {
  background: #4BC462;
  border-radius: 20px;
}
.list::-webkit-scrollbar-thumb:hover {
  background: #4BC462;
}
.lesson-data {
  font-size: 18px;
  color: black;
  margin-top: 28px;
  font-family: Rubik-regular, system-ui;
}
</style>