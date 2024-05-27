<template>
  <div class="main-container" v-if="!isLoading">
    <div class="header-container">
      <div>
        <select v-model="selectedPeriod" @change="onChangePeriod">
          <option :value="0">Week</option>
          <option :value="1">Month</option>
          <option :value="2">Year</option>
        </select>
      </div>
      <div style="display: flex; flex: 1; align-items: center; margin-bottom: 24px">
        <div class="block">
          <p class="hint-text">Available balance</p>
          <p class="main-text">{{formatCurrency(profile.balance)}}</p>
        </div>
        <div class="block">
          <div class="amount-container">
            <div class="amount-block">
              <p class="amount-title">Received</p>
              <div class="amount-operation-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 14.997C5.19891 14.997 5.38968 15.076 5.53033 15.2167C5.67098 15.3573 5.75 15.5481 5.75 15.747L5.75 18C5.75 18.138 5.862 18.25 6 18.25L18 18.25C18.0663 18.25 18.1299 18.2237 18.1768 18.1768C18.2237 18.1299 18.25 18.0663 18.25 18V15.747C18.25 15.5481 18.329 15.3573 18.4697 15.2167C18.6103 15.076 18.8011 14.997 19 14.997C19.1989 14.997 19.3897 15.076 19.5303 15.2167C19.671 15.3573 19.75 15.5481 19.75 15.747V18C19.75 18.4641 19.5656 18.9092 19.2374 19.2374C18.9092 19.5656 18.4641 19.75 18 19.75L6 19.75C5.53587 19.75 5.09075 19.5656 4.76256 19.2374C4.43437 18.9092 4.25 18.4641 4.25 18L4.25 15.747C4.25 15.5481 4.32902 15.3573 4.46967 15.2167C4.61032 15.076 4.80109 14.997 5 14.997ZM12.202 4.25C12.4009 4.25 12.5917 4.32902 12.7323 4.46967C12.873 4.61032 12.952 4.80109 12.952 5L12.952 13.086C12.952 13.2849 12.873 13.4757 12.7323 13.6163C12.5917 13.757 12.4009 13.836 12.202 13.836C12.0031 13.836 11.8123 13.757 11.6717 13.6163C11.531 13.4757 11.452 13.2849 11.452 13.086L11.452 5C11.452 4.80109 11.531 4.61032 11.6717 4.46967C11.8123 4.32902 12.0031 4.25 12.202 4.25Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.32181 10.626C8.4607 10.4838 8.65036 10.4026 8.84912 10.4002C9.04787 10.3977 9.23947 10.4743 9.38181 10.613L12.2018 13.368L15.0218 10.613C15.092 10.5427 15.1754 10.4871 15.2672 10.4493C15.359 10.4115 15.4574 10.3923 15.5567 10.3928C15.656 10.3934 15.7542 10.4136 15.8456 10.4524C15.937 10.4912 16.0198 10.5477 16.0892 10.6188C16.1586 10.6898 16.2132 10.7739 16.2498 10.8662C16.2864 10.9585 16.3043 11.0572 16.3025 11.1565C16.3007 11.2557 16.2792 11.3537 16.2393 11.4446C16.1993 11.5355 16.1417 11.6175 16.0698 11.686L12.7258 14.953C12.5857 15.0898 12.3976 15.1664 12.2018 15.1664C12.006 15.1664 11.8179 15.0898 11.6778 14.953L8.33381 11.686C8.19175 11.547 8.1107 11.3573 8.10845 11.1585C8.1062 10.9597 8.18294 10.7682 8.32181 10.626Z" fill="white"/>
                </svg>
                <p class="amount-text">{{formatCurrency(received)}}</p>
              </div>
            </div>
            <div class="amount-block spent">
              <p class="amount-title">Spent</p>
              <div class="amount-operation-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M19 9.003C18.8011 9.003 18.6103 8.92398 18.4697 8.78333C18.329 8.64268 18.25 8.45191 18.25 8.253V6C18.25 5.862 18.138 5.75 18 5.75L6 5.75C5.9337 5.75 5.87011 5.77634 5.82322 5.82322C5.77634 5.87011 5.75 5.9337 5.75 6V8.253C5.75 8.45191 5.67098 8.64268 5.53033 8.78333C5.38968 8.92398 5.19891 9.003 5 9.003C4.80109 9.003 4.61032 8.92398 4.46967 8.78333C4.32902 8.64268 4.25 8.45191 4.25 8.253V6C4.25 5.53587 4.43437 5.09075 4.76256 4.76256C5.09075 4.43437 5.53587 4.25 6 4.25L18 4.25C18.4641 4.25 18.9092 4.43437 19.2374 4.76256C19.5656 5.09075 19.75 5.53587 19.75 6V8.253C19.75 8.45191 19.671 8.64268 19.5303 8.78333C19.3897 8.92398 19.1989 9.003 19 9.003ZM11.798 19.75C11.5991 19.75 11.4083 19.671 11.2677 19.5303C11.127 19.3897 11.048 19.1989 11.048 19L11.048 10.914C11.048 10.7151 11.127 10.5243 11.2677 10.3837C11.4083 10.243 11.5991 10.164 11.798 10.164C11.9969 10.164 12.1877 10.243 12.3283 10.3837C12.469 10.5243 12.548 10.7151 12.548 10.914V19C12.548 19.1989 12.469 19.3897 12.3283 19.5303C12.1877 19.671 11.9969 19.75 11.798 19.75Z" fill="#4BC462"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6782 13.374C15.5393 13.5162 15.3496 13.5974 15.1509 13.5998C14.9521 13.6023 14.7605 13.5257 14.6182 13.387L11.7982 10.632L8.97819 13.387C8.90805 13.4573 8.82465 13.5129 8.73282 13.5507C8.641 13.5885 8.54259 13.6077 8.44329 13.6072C8.34399 13.6066 8.24579 13.5864 8.15438 13.5476C8.06298 13.5088 7.98018 13.4523 7.9108 13.3812C7.84142 13.3102 7.78683 13.2261 7.75021 13.1338C7.71359 13.0415 7.69566 12.9428 7.69746 12.8435C7.69927 12.7443 7.72077 12.6463 7.76072 12.5554C7.80067 12.4645 7.85828 12.3825 7.93019 12.314L11.2742 9.04699C11.4143 8.91016 11.6024 8.83357 11.7982 8.83357C11.994 8.83357 12.1821 8.91016 12.3222 9.04699L15.6662 12.314C15.8082 12.453 15.8893 12.6427 15.8916 12.8415C15.8938 13.0403 15.8171 13.2318 15.6782 13.374Z" fill="#4BC462"/>
                </svg>
                <p class="amount-text">{{formatCurrency(spent)}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-transactions-analytics v-if="!transactionsLoader && this.transactions.length !== 0" :transactions="this.transactions"/>
    <v-category-analytics v-if="!transactionsLoader && this.transactions.length !== 0" :transactions="this.transactions" :categories="this.categories"/>
  </div>
  <div v-else class="main-container">

  </div>
</template>

<script>
import utils from "@/utils/utils.js";
import api from "@/service/api.js";
import VTransactionsAnalytics from "@/components/analytics/transactions_analytics.vue";
import VCategoryAnalytics from "@/components/analytics/category_analytics.vue";

export default {
  name: "v-analytics-content",
  components: {VCategoryAnalytics, VTransactionsAnalytics},
  data() {
    return {
      profile: null,
      transactions: [],
      isLoading: true,
      spent: 0,
      received: 0,
      periods: [604800000, 2629324800, 31536000000],
      selectedPeriod: 0,
      transactionsLoader: true,
      categories: []
    }
  },
  mounted() {
    this.loadProfile();
    this.loadTransactions();
  },
  methods: {
    formatCurrency(balance) {
      return utils.formatCurrency(balance);
    },
    loadProfile() {
      this.isLoading = true;
      api.profile.getProfile().then((response) => {
        this.profile = response.data;
        this.isLoading = false;
      })
    },
    parseDate(timestamp) {
      return utils.formatDateTime(timestamp);
    },
    loadTransactions() {
      this.received = 0;
      this.spent = 0;
      this.transactionsLoader = true;
      this.transactions = [];
      let toPeriod = Date.now();
      let fromPeriod = toPeriod - this.periods[this.selectedPeriod];
      api.transaction.byPeriod(fromPeriod, toPeriod).then((response) => {
        this.transactions = response.data;
        for (let i = 0; i < this.transactions.length; i++) {
          if (this.transactions[i].isReceive) {
            this.received += this.transactions[i].amount;
          } else {
            this.spent += this.transactions[i].amount;
          }
        }
        this.loadCategories();
      })
    },
    loadCategories() {
      this.categories = [];
      api.category.findAll().then((response) => {
        this.categories = response.data;
        this.transactionsLoader = false;
      })
    },
    onChangePeriod() {
      this.loadTransactions();
    }
  }
}
</script>

<style scoped>
.amount-container {
  display: flex;
}
.amount-block {
  vertical-align: middle;
  border-radius: 20px;
  padding: 7px 18px 10px 18px;
  background: #4BC462;
}
.amount-title {
  font-size: 12px;
  font-family: Rubik-light, system-ui;
  color: white;
}
.amount-operation-container {
  display: flex;
  margin-top: 5px;
}
.amount-operation-container>svg {
  width: 24px;
  height: 24px;
}
.amount-operation-container>p {
  color: white;
  font-size: 20px;
  margin-left: 3px;
  font-family: Rubik-medium, system-ui;
}
.spent {
  margin-left: 16px;
  background: white;
}
.spent>.amount-title {
  color: #4BC462;
}
.spent>.amount-operation-container>p {
  color: #4BC462;
}
.main-container {
  min-height: 80vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.header-container {
  height: 200px;
  display: flex;
  margin-bottom: 32px;
  flex-direction: column;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("@/assets/images/background.png");
  border-radius: 20px;
}
.main-text {
  flex: 1;
  font-size: 48px;
  color: white;
  font-family: Rubik-medium, system-ui;
}
.hint-text {
  font-size: 14px;
  font-family: Rubik-regular, system-ui;
  color: rgba(255, 255, 255, 0.8);
}
.block {
  text-align: center;
  flex: 1;
}
select {
  color: white;
  margin-top: 20px;
  font-size: 14px;
  font-family: Rubik-regular, system-ui;
  background: transparent;
  border: none;
  cursor: pointer;
}
select:focus {
  outline: none;
}
option {
  border: none;
  cursor: pointer;
  outline: none;
  background: #4BC462;
  color: white;
}
</style>