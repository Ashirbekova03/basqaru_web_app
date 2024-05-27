<template>
  <v-add-category-alert v-if="isShowAddCategory" @close="closeAddCategory" @closeReload="closeAddCategory"/>
  <div class="main-container">
    <div class="header-container">
      <p class="main-text">Add transaction</p>
      <div style="text-align: center; margin-right: 60px">
        <p class="hint-text">Enter amount</p>
        <input class="amount-input" v-model="amount" placeholder="0" maxlength="8">
        <div class="selector">
          <div class="select-item" :class="{'selected' : isReceive}" @click="isReceive = true">Received</div>
          <div class="select-item" :class="{'selected' : !isReceive}" @click="isReceive = false">Spent</div>
        </div>
      </div>
    </div>
    <div class="title-line">
      <p class="title-text">Categories</p>
      <div class="create-button" @click="isShowAddCategory = true">
        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7.998H8V12.998C8 13.2632 7.89464 13.5176 7.70711 13.7051C7.51957 13.8926 7.26522 13.998 7 13.998C6.73478 13.998 6.48043 13.8926 6.29289 13.7051C6.10536 13.5176 6 13.2632 6 12.998V7.998H1C0.734784 7.998 0.48043 7.89264 0.292893 7.70511C0.105357 7.51757 0 7.26322 0 6.998C0 6.73278 0.105357 6.47843 0.292893 6.29089C0.48043 6.10336 0.734784 5.998 1 5.998H6V0.998001C6 0.732785 6.10536 0.47843 6.29289 0.290894C6.48043 0.103358 6.73478 -0.0019989 7 -0.0019989C7.26522 -0.0019989 7.51957 0.103358 7.70711 0.290894C7.89464 0.47843 8 0.732785 8 0.998001V5.998H13C13.2652 5.998 13.5196 6.10336 13.7071 6.29089C13.8946 6.47843 14 6.73278 14 6.998C14 7.26322 13.8946 7.51757 13.7071 7.70511C13.5196 7.89264 13.2652 7.998 13 7.998Z" fill="white"/>
        </svg>
      </div>
      <div style="flex: 1"></div>
      <p class="primary-button" @click="addTransaction">Add transaction</p>
    </div>
    <div v-if="!isLoading">
      <div v-if="categories.length > 0" class="list">
        <div class="category-container" v-for="category in categories" :key="category">
          <div class="select-container" :class="{'select-container-selected': category.id === selectedId}" @click="selectedId = category.id">
            <div class="category-image-container">
              <img class="category-image" :src="category.imageUrl">
            </div>
            <p class="category-name">{{category.name}}</p>
          </div>
        </div>
      </div>
      <div v-else class="empty-text">Categories list is empty</div>
    </div>
  </div>
</template>

<script>
import utils from "@/utils/utils.js";
import api from "@/service/api.js";
import VAddCategoryAlert from "@/components/wallet/add_category_alert.vue";

export default {
  name: "v-add-transaction-content",
  components: {VAddCategoryAlert},
  data() {
    return {
      categories: [],
      isLoading: true,
      amount: "",
      selectedId: -1,
      isReceive: true,
      isShowAddCategory: false
    }
  },
  mounted() {
    this.loadCategories();
  },
  methods: {
    loadCategories() {
      this.isLoading = true;
      api.category.findAll().then((response) => {
        this.categories = response.data;
        this.isLoading = false;
      })
    },
    formatCurrency(balance) {
      return utils.formatCurrency(balance);
    },
    closeAddCategory(value) {
      this.isShowAddCategory = false;
      if (value) {
        this.loadCategories();
      }
    },
    addTransaction() {
      if (!utils.checkIsEmpty(this.amount) && this.selectedId !== -1) {
        api.transaction.add({
          data: {
            amount: parseFloat(this.amount),
            categoryId: this.selectedId,
            isReceive: this.isReceive
          }
        }).then(() => {
          this.$router.replace('/wallet');
        })
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  min-height: 80vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.header-container {
  height: 200px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding-left: 57px;
  padding-right: 57px;
  margin-top: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("@/assets/images/background.png");
  border-radius: 20px;
}
.main-text {
  flex: 1;
  font-size: 48px;
  margin-bottom: 20px;
  color: white;
  font-family: Rubik-medium, system-ui;
}
.hint-text {
  font-size: 14px;
  font-family: Rubik-regular, system-ui;
  color: rgba(255, 255, 255, 0.8);
}
.title-line {
  margin-top: 22px;
  display: flex;
}
.title-text {
  font-size: 26px;
  color: black;
  font-family: Rubik-medium, system-ui;
}
.empty-text {
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
  text-align: center;
  margin-top: 60px;
  font-family: Rubik-regular, system-ui;
}
.amount-input {
  max-width: 300px;
  text-align: center;
  color: white;
  background: transparent;
  border: none;
  font-family: Rubik-medium, system-ui;
  font-size: 48px;
}
input:focus {
  outline: none;
}
::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
.selector {
  background: white;
  border-radius: 50px;
  display: flex;
  padding: 1px 1px;
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
  width: max-content;
}
.select-item {
  text-align: center;
  padding-top: 5px;
  cursor: pointer;
  font-size: 12px;
  color: #4BC462;
  font-family: Rubik-regular, system-ui;
  min-width: 80px;
  margin: 2px 2px;
  border-radius: 50px;
  height: 22px;
}
.selected {
  color: white;
  background: #4BC462;
}
.list {
  text-align: center;
  margin-top: 24px;
}
.category-container {
  width: 120px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
.select-container {
  width: max-content;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s;
}
.select-container:hover {
  background: rgba(0, 0, 0, 0.1);
}
.select-container-selected {
  background: #4BC462;
}
.category-name {
  font-size: 16px;
  color: black;
  margin-top: 8px;
  transition: 0.2s;
  text-align: center;
  font-family: Rubik-medium, system-ui;
}
.select-container-selected>.category-name {
  color: white;
}
.category-image-container {
  width: 70px;
  height: 70px;
  border-radius: 100px;
  background: #4BC462;
}
.category-image {
  width: 68px;
  height: 68px;
  margin: 1px 1px 1px 1px;
  border-radius: 100px;
  object-fit: cover;
}
.create-button {
  background: #4BC462;
  cursor: pointer;
  height: 36px;
  margin-left: 20px;
  text-align: center;
  padding-top: 2px;
  border-radius: 40px;
}
.create-button>svg {
  margin: 10px 12px 6px 12px;
}
</style>