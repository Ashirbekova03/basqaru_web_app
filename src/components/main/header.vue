<template>
  <div class="header-container">
    <div class="logo-container">
      <img src="@/assets/images/logo.png" class="logo-image" @click="this.$router.push('/')">
    </div>
    <div v-if="!isLoading">
      <div v-if="userName == null" class="default-container">
        <div v-if="this.$route.name !== 'login' && this.$route.name !== 'register'" class="primary-button" @click="this.$router.push('/login')">
          <svg width="159" height="159" viewBox="0 0 159 159" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_666_563)">
              <path d="M79.5 79.5C101.453 79.5 119.25 61.7033 119.25 39.75C119.25 17.7967 101.453 0 79.5 0C57.5467 0 39.75 17.7967 39.75 39.75C39.75 61.7033 57.5467 79.5 79.5 79.5Z" fill="white"/>
              <path d="M79.5 92.7501C46.5851 92.7868 19.9116 119.46 19.875 152.375C19.875 156.034 22.841 159 26.4999 159H132.5C136.159 159 139.125 156.034 139.125 152.375C139.088 119.46 112.415 92.7865 79.5 92.7501Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_666_563">
                <rect width="159" height="159" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          Log in
        </div>
      </div>
      <div v-else class="user-container">
        <div class="nav-button">Lessons</div>
        <div class="nav-button">Analytics</div>
        <div class="nav-button">Wallet</div>
        <div class="primary-button">
          <svg width="159" height="159" viewBox="0 0 159 159" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_666_563)">
              <path d="M79.5 79.5C101.453 79.5 119.25 61.7033 119.25 39.75C119.25 17.7967 101.453 0 79.5 0C57.5467 0 39.75 17.7967 39.75 39.75C39.75 61.7033 57.5467 79.5 79.5 79.5Z" fill="white"/>
              <path d="M79.5 92.7501C46.5851 92.7868 19.9116 119.46 19.875 152.375C19.875 156.034 22.841 159 26.4999 159H132.5C136.159 159 139.125 156.034 139.125 152.375C139.088 119.46 112.415 92.7865 79.5 92.7501Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_666_563">
                <rect width="159" height="159" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          {{userName}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "header-component",
  data() {
    return {
      isLoading: false,
      userName: null
    }
  },
  mounted() {
    this.userName = localStorage.getItem("user_name");
    this.isLoading = false;
  }
}
</script>

<style scoped>
.header-container {
  padding-top: 14px;
  width: 100%;
  display: flex;
}
.logo-container {
  flex: 1;
}
.logo-image {
  height: 50px;
  cursor: pointer;
}
svg {
  width: 14px;
  height: 14px;
  margin-right: 4px;
}
.primary-button {
  padding-right: 34px !important;
  margin-left: 20px;
  display: inline-block;
  vertical-align: middle;
}
.nav-button {
  display: inline-block;
  vertical-align: middle;
  width: max-content;
  font-family: Rubik-regular, system-ui;
  color: black;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 20px;
  background: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  margin-right: 20px;
}
.nav-button:hover {
  background: #eaeaea;
}
.default-container {
  flex: 1;
  text-align: end;
}
</style>