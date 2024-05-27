<template>
  <div class="login-page">
    <header-component />
    <div class="login-container">
      <div style="flex: 1; text-align: center;">
        <p class="header">Sign Up</p>
        <p class="info">Fill out the fields below to register</p>
        <div class="field-container">
          <p>Username</p>
          <div class="input-container">
            <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M47.0001 4.89587C42.0659 4.89587 37.3339 6.85595 33.8449 10.3449C30.356 13.8339 28.3959 18.5659 28.3959 23.5C28.3959 28.4342 30.356 33.1662 33.8449 36.6552C37.3339 40.1441 42.0659 42.1042 47.0001 42.1042C51.9342 42.1042 56.6662 40.1441 60.1552 36.6552C63.6441 33.1662 65.6042 28.4342 65.6042 23.5C65.6042 18.5659 63.6441 13.8339 60.1552 10.3449C56.6662 6.85595 51.9342 4.89587 47.0001 4.89587ZM34.2709 23.5C34.2709 20.1241 35.612 16.8863 37.9992 14.4992C40.3864 12.112 43.6241 10.7709 47.0001 10.7709C50.376 10.7709 53.6138 12.112 56.0009 14.4992C58.3881 16.8863 59.7292 20.1241 59.7292 23.5C59.7292 26.876 58.3881 30.1137 56.0009 32.5009C53.6138 34.8881 50.376 36.2292 47.0001 36.2292C43.6241 36.2292 40.3864 34.8881 37.9992 32.5009C35.612 30.1137 34.2709 26.876 34.2709 23.5ZM47.0001 47.9792C37.9408 47.9792 29.5905 50.0394 23.4061 53.5174C17.3117 56.9484 12.7292 62.1419 12.7292 68.5417V68.9412C12.7253 73.4924 12.7214 79.2029 17.7308 83.284C20.1944 85.2894 23.645 86.719 28.3058 87.659C32.9745 88.6068 39.0649 89.1042 47.0001 89.1042C54.9352 89.1042 61.0217 88.6068 65.6982 87.659C70.3591 86.719 73.8057 85.2894 76.2732 83.284C81.2826 79.2029 81.2748 73.4924 81.2709 68.9412V68.5417C81.2709 62.1419 76.6884 56.9484 70.598 53.5174C64.4096 50.0394 56.0632 47.9792 47.0001 47.9792ZM18.6042 68.5417C18.6042 65.2086 21.0404 61.5896 26.2848 58.6404C31.4391 55.742 38.7555 53.8542 47.004 53.8542C55.2446 53.8542 62.561 55.742 67.7153 58.6404C72.9636 61.5896 75.3959 65.2086 75.3959 68.5417C75.3959 73.6647 75.2392 76.5474 72.5602 78.725C71.1111 79.9079 68.6827 81.0633 64.5311 81.9015C60.3911 82.7396 54.7316 83.2292 47.0001 83.2292C39.2686 83.2292 33.6051 82.7396 29.4691 81.9015C25.3174 81.0633 22.8891 79.9079 21.4399 78.729C18.7609 76.5474 18.6042 73.6647 18.6042 68.5417Z" fill="black" fill-opacity="0.3"/>
            </svg>
            <input placeholder="Username" type="text" v-model="username">
          </div>
        </div>
        <div class="field-container">
          <p>E-mail</p>
          <div class="input-container">
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64.1667 17.5C64.1667 14.2916 61.5417 11.6666 58.3334 11.6666H11.6667C8.45837 11.6666 5.83337 14.2916 5.83337 17.5V52.5C5.83337 55.7083 8.45837 58.3333 11.6667 58.3333H58.3334C61.5417 58.3333 64.1667 55.7083 64.1667 52.5V17.5ZM58.3334 17.5L35 32.0833L11.6667 17.5H58.3334ZM58.3334 52.5H11.6667V23.3333L35 37.9166L58.3334 23.3333V52.5Z" fill="black" fill-opacity="0.3"/>
            </svg>
            <input placeholder="E-mail" type="email" v-model="email">
          </div>
        </div>
        <div class="field-container">
          <p>Password</p>
          <div class="input-container">
            <svg width="89" height="92" viewBox="0 0 89 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.3" clip-path="url(#clip0_669_567)">
                <path d="M70.4577 32.292V26.8333C70.4577 19.7167 67.7228 12.8915 62.8547 7.8593C57.9865 2.82708 51.3839 0 44.4994 0C37.6148 0 31.0122 2.82708 26.144 7.8593C21.2759 12.8915 18.541 19.7167 18.541 26.8333V32.292C15.2382 33.782 12.4271 36.2347 10.4513 39.35C8.47551 42.4653 7.42076 46.1082 7.41602 49.8333V72.8333C7.4219 77.9148 9.37729 82.7864 12.8532 86.3795C16.3292 89.9726 21.0419 91.9939 25.9577 92H63.041C67.9568 91.9939 72.6695 89.9726 76.1455 86.3795C79.6214 82.7864 81.5768 77.9148 81.5827 72.8333V49.8333C81.5779 46.1082 80.5232 42.4653 78.5474 39.35C76.5716 36.2347 73.7605 33.782 70.4577 32.292ZM25.9577 26.8333C25.9577 21.75 27.9112 16.8749 31.3884 13.2805C34.8656 9.68601 39.5818 7.66667 44.4994 7.66667C49.4169 7.66667 54.1331 9.68601 57.6103 13.2805C61.0875 16.8749 63.041 21.75 63.041 26.8333V30.6667H25.9577V26.8333ZM74.166 72.8333C74.166 75.8833 72.9939 78.8084 70.9076 80.9651C68.8212 83.1217 65.9916 84.3333 63.041 84.3333H25.9577C23.0071 84.3333 20.1775 83.1217 18.0911 80.9651C16.0048 78.8084 14.8327 75.8833 14.8327 72.8333V49.8333C14.8327 46.7833 16.0048 43.8583 18.0911 41.7016C20.1775 39.5449 23.0071 38.3333 25.9577 38.3333H63.041C65.9916 38.3333 68.8212 39.5449 70.9076 41.7016C72.9939 43.8583 74.166 46.7833 74.166 49.8333V72.8333Z" fill="black"/>
                <path d="M44.5001 53.6667C43.5166 53.6667 42.5733 54.0706 41.8779 54.7895C41.1824 55.5084 40.7917 56.4834 40.7917 57.5001V65.1667C40.7917 66.1834 41.1824 67.1584 41.8779 67.8773C42.5733 68.5962 43.5166 69.0001 44.5001 69.0001C45.4836 69.0001 46.4268 68.5962 47.1223 67.8773C47.8177 67.1584 48.2084 66.1834 48.2084 65.1667V57.5001C48.2084 56.4834 47.8177 55.5084 47.1223 54.7895C46.4268 54.0706 45.4836 53.6667 44.5001 53.6667Z" fill="black"/>
              </g>
              <defs>
                <clipPath id="clip0_669_567">
                  <rect width="89" height="92" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <input placeholder="Password" type="password" v-model="password">
          </div>
        </div>
        <div class="primary-button" @click="doRegister">Sign Up</div>
        <div class="bottom-content">
          <p class="account-text">Have an account?</p>
          <p class="text-button" @click="this.$router.push('/login')">Sign In</p>
        </div>
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>

import HeaderComponent from "@/components/main/header.vue";
import FooterComponent from "@/components/main/footer.vue";
import api from "@/service/api.js";
import utils from "@/utils/utils.js";

export default {
  name: "index",
  components: {FooterComponent, HeaderComponent},
  data() {
    return {
      username: "",
      email: "",
      password: ""
    }
  },
  methods: {
    doRegister() {
      if (!utils.checkIsEmpty(this.username, this.password, this.email)) {
        api.auth.register({
          data: {
            fullName: this.username,
            email: this.email,
            password: this.password
          }
        }).then((response) => {
          this.$router.push('/login');
        }).catch(() => {
          alert("Почта уже зарегистрирована!");
          this.email = "";
          this.password = "";
        })
      }
    }
  }
}
</script>

<style scoped>
.text-button {
  color: #329447;
  font-size: 15px;
  font-family: Rubik-regular, system-ui;
  font-weight: 600;
  padding: 10px 14px;
  cursor: pointer;
  border-radius: 10px;
  background: white;
  transition: 0.2s;
}
.text-button:hover {
  background: #eaeaea;
}
.account-text {
  text-align: start;
  flex: 1;
  font-size: 15px;
  color: black;
  font-family: Rubik-regular, system-ui;
}
.bottom-content {
  margin-bottom: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.primary-button {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
.login-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.login-container {
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
}
.header {
  font-size: 22px;
  font-family: Rubik-regular, system-ui;
  font-weight: 600;
  color: black;
}
.info {
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-family: Rubik-regular, system-ui;
}
.field-container {
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  text-align: start;
}
.field-container>p {
  font-size: 15px;
  color: black;
  font-family: Rubik-regular, system-ui;
}
.input-container {
  margin-top: 7px;
  display: flex;
  padding: 10px 10px 10px 14px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  vertical-align: middle;
  align-items: center;
}
.input-container>svg {
  width: 22px;
  height: 22px;
}
.input-container>input {
  border: none;
  flex: 1;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 15px;
  font-family: Rubik-regular, system-ui;
  margin-left: 10px;
}
input:focus {
  border: none;
  outline: none;
}
::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
</style>