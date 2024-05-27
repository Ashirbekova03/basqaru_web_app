<template>
  <div class="alert-container">
    <div class="alert-content-container">
      <div class="close-button" @click="closeAlert">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_7_2)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.121L17.303 19.425C17.5844 19.7064 17.966 19.8645 18.364 19.8645C18.762 19.8645 19.1436 19.7064 19.425 19.425C19.7064 19.1436 19.8645 18.762 19.8645 18.364C19.8645 17.966 19.7064 17.5844 19.425 17.303L14.12 12L19.424 6.697C19.5633 6.55767 19.6737 6.39227 19.7491 6.21025C19.8244 6.02823 19.8632 5.83315 19.8631 5.63615C19.8631 5.43915 19.8242 5.24409 19.7488 5.0621C19.6734 4.88011 19.5628 4.71477 19.4235 4.5755C19.2842 4.43623 19.1188 4.32577 18.9367 4.25043C18.7547 4.17508 18.5596 4.13633 18.3626 4.13637C18.1656 4.13642 17.9706 4.17527 17.7886 4.2507C17.6066 4.32613 17.4413 4.43667 17.302 4.576L12 9.879L6.697 4.576C6.5587 4.43267 6.39323 4.31832 6.21027 4.23962C6.0273 4.16092 5.83049 4.11945 5.63132 4.11763C5.43215 4.1158 5.23462 4.15366 5.05024 4.229C4.86586 4.30433 4.69833 4.41563 4.55742 4.55641C4.41652 4.69718 4.30506 4.8646 4.22955 5.04891C4.15404 5.23322 4.116 5.43072 4.11763 5.62989C4.11927 5.82906 4.16056 6.02591 4.23908 6.20895C4.31761 6.39199 4.4318 6.55756 4.575 6.696L9.88 12L4.576 17.303C4.29461 17.5844 4.13652 17.966 4.13652 18.364C4.13652 18.762 4.29461 19.1436 4.576 19.425C4.85739 19.7064 5.23905 19.8645 5.637 19.8645C6.03495 19.8645 6.41661 19.7064 6.698 19.425L12 14.12V14.121Z" />
          </g>
          <defs>
            <clipPath id="clip0_7_2">
              <rect width="24" height="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div style="flex: 1; text-align: center;">
        <p class="header">Change profile</p>
        <p class="info">Change the fields below</p>
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
        <div class="primary-button" @click="changeProfile">Save</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/service/api.js";
import {reloadHeader} from "@/service/utils.js";

export default {
  name: "v-change-profile-alert",
  props: {
    emailP: String,
    usernameP: String
  },
  data() {
    return {
      username: "",
      email: ""
    }
  },
  mounted() {
    this.username = this.usernameP;
    this.email = this.emailP;
  },
  methods: {
    closeAlert: function () {
      this.$emit('close')
    },
    closeReload() {
      this.$emit('close', {...true})
    },
    changeProfile() {
      api.profile.changeProfile({
        data: {
          email: this.email,
          username: this.username
        }
      }).then((response) => {
        const data = response.data;
        localStorage.setItem("auth_token", data.token);
        this.closeReload();
      }).catch(() => {
        this.email = this.emailP;
        this.username = this.usernameP;
        alert("Почта уже зарегистрирована!")
      });
    }
  }
}
</script>

<style scoped>

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
.primary-button {
  width: 100%;
  margin-top: 20px;
}
</style>