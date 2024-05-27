<template>
  <v-change-profile-alert v-if="!isLoading && showChangeProfile" :username-p="profile.fullName" :email-p="profile.email" @close="closeChange"/>
  <v-change-password-alert v-if="!isLoading && showChangePassword" @close="showChangePassword = false" />
  <div class="main-container" v-if="!isLoading">
    <div class="header-container">
      <div class="avatar-container">
        <p>{{profile.fullName[0]}}</p>
      </div>
      <p class="username">{{profile.fullName}}</p>
      <p class="username" style="text-align: end">{{formatCurrency(profile.balance)}}</p>
    </div>
    <div class="bottom-container">
      <div class="block">
        <p class="header-text">Main information</p>
        <p class="button-text" @click="this.showChangeProfile = true">Change profile</p>
        <p class="button-text" @click="this.showChangePassword = true">Change password</p>
      </div>
      <div class="block">
        <p class="header-text">Basqaru</p>
        <p class="info-text">Managing finances is the key to achieving financial stability and life goals. Our app is designed to help you master the basics of finance and take control of your money.</p>
      </div>
    </div>
    <div class="logout-button" @click="logoutProfile">
      <div class="icon-container">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.54167 3.54167H7.79167C8.18125 3.54167 8.5 3.22292 8.5 2.83333C8.5 2.44375 8.18125 2.125 7.79167 2.125H3.54167C2.7625 2.125 2.125 2.7625 2.125 3.54167V13.4583C2.125 14.2375 2.7625 14.875 3.54167 14.875H7.79167C8.18125 14.875 8.5 14.5562 8.5 14.1667C8.5 13.7771 8.18125 13.4583 7.79167 13.4583H3.54167V3.54167Z" fill="white"/>
          <path d="M14.6271 8.25208L12.6508 6.27583C12.6016 6.22522 12.5383 6.19046 12.4692 6.176C12.4001 6.16154 12.3282 6.16804 12.2628 6.19467C12.1974 6.22129 12.1414 6.26683 12.102 6.32545C12.0626 6.38408 12.0416 6.45312 12.0417 6.52375V7.79166H7.08333C6.69375 7.79166 6.375 8.11041 6.375 8.5C6.375 8.88958 6.69375 9.20833 7.08333 9.20833H12.0417V10.4762C12.0417 10.795 12.4242 10.9508 12.6438 10.7242L14.62 8.74791C14.7617 8.61333 14.7617 8.38666 14.6271 8.25208Z" fill="white"/>
        </svg>
      </div>
      <p>Logout</p>
    </div>
  </div>
  <div v-else class="main-container">

  </div>
</template>

<script>

import api from "@/service/api.js";
import utils from "@/utils/utils.js";
import VChangeProfileAlert from "@/components/profile/change_profile_alert.vue";
import VChangePasswordAlert from "@/components/profile/change_password_alert.vue";
import {logout} from "@/service/utils.js";

export default {
  name: "v-profile-content",
  components: {VChangePasswordAlert, VChangeProfileAlert},
  data() {
    return {
      profile: null,
      isLoading: true,
      showChangeProfile: false,
      showChangePassword: false
    }
  },
  mounted() {
    this.loadProfile();
  },
  methods: {
    closeChange(reload) {
      this.showChangeProfile = false;
      if (reload) {
        this.loadProfile();
      }
    },
    loadProfile() {
      this.isLoading = true;
      api.profile.getProfile().then((response) => {
        this.profile = response.data;
        this.isLoading = false;
      })
    },
    formatCurrency(balance) {
      return utils.formatCurrency(balance);
    },
    logoutProfile() {
      logout();
      this.$router.replace("/");
    }
  }
}
</script>

<style scoped>
.main-container {
  height: 80vh;
}
.header-container {
  height: 200px;
  width: 80%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-left: 10%;
  padding-left: 57px;
  padding-right: 57px;
  margin-top: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("@/assets/images/background.png");
  border-radius: 20px;
}
.avatar-container {
  background: white;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  text-align: center;
  border: 5px solid #70E487;
}
.avatar-container>p {
  font-size: 40px;
  color: #70E487;
  flex: 1;
  text-align: center;
  font-family: Rubik-bold, system-ui;
}
.username {
  font-size: 28px;
  color: white;
  flex: 1;
  margin-left: 40px;
  font-family: Rubik-medium, system-ui;
}
.bottom-container {
  width: 80%;
  margin-top: 40px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-left: 10%;
  display: flex;
  background: #F8F8F8;
  border-radius: 20px;
  padding: 40px 20px;
}
.header-text {
  padding: 0px 10px 10px;
  font-size: 20px;
  font-family: Rubik-medium, system-ui;
  color: black;
}
.button-text {
  color: rgba(0, 0, 0, 0.37);
  font-size: 18px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 28px;
  transition: 0.3s;
  width: max-content;
  border-radius: 5px;
  font-family: Rubik-regular, system-ui;
}
.button-text:hover {
  background: rgba(0, 0, 0, 0.07);
}
.info-text {
  color: rgba(0, 0, 0, 0.37);
  font-size: 18px;
  padding: 5px 10px;
  margin-top: 28px;
  font-family: Rubik-regular, system-ui;
}
.block {
  flex: 1;
}
.logout-button {
  display: flex;
  align-items: center;
  margin-left: 10%;
  margin-top: 40px;
  cursor: pointer;
  border-radius: 5px;
  width: max-content;
  transition: 0.3s;
  height: 40px
}
.logout-button:hover {
  background: rgba(0, 0, 0, 0.1);
}
.icon-container {
  margin-right: 14px;
  height: 34px;
  width: 34px;
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #F86868;
}
.icon-container>svg {
  margin-left: 7px;
}
.logout-button>p{
  padding-right: 10px;
  color: #F86868;
  font-size: 16px;
  font-family: Rubik-regular, system-ui;
}
</style>