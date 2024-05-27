<template>
  <div class="main-container" v-if="!isLoading">
    <div class="header-container">
      <p class="main-text">My wallet</p>
      <div style="text-align: center; margin-right: 60px">
        <p class="hint-text">Available balance</p>
        <p class="main-text">{{formatCurrency(profile.balance)}}</p>
      </div>
    </div>
    <div class="title-line">
      <p class="title-text">My transactions</p>
      <p class="primary-button" @click="this.$router.push('/add-transaction')">Add transaction</p>
    </div>
    <div v-if="!transactionsLoader">
      <div v-if="transactions.length > 0" class="list">
        <div class="transaction-line-container" v-for="pair in transactionsPair" :key="pair">
          <div class="transaction-container">
            <div class="transaction-image-container">
              <img class="transaction-image" :src="pair.first.category.imageUrl">
            </div>
            <div class="info-container">
              <p class="category-name">{{pair.first.category.name}}</p>
              <p class="transaction-date">{{parseDate(pair.first.dateTime)}}</p>
            </div>
            <p v-if="pair.first.isReceive" class="transaction-amount receive">+${{pair.first.amount}}</p>
            <p v-else class="transaction-amount spent">-${{pair.first.amount}}</p>
          </div>
          <div style="width: 24px;"></div>
          <div v-if="pair.second" class="transaction-container">
            <div class="transaction-image-container">
              <img class="transaction-image" :src="pair.second.category.imageUrl">
            </div>
            <div class="info-container">
              <p class="category-name">{{pair.second.category.name}}</p>
              <p class="transaction-date">{{parseDate(pair.second.dateTime)}}</p>
            </div>
            <p v-if="pair.second.isReceive" class="transaction-amount receive">+${{pair.second.amount}}</p>
            <p v-else class="transaction-amount spent">-${{pair.second.amount}}</p>
          </div>
          <div v-else style="flex: 1; padding: 11px 15px;"></div>
        </div>
      </div>
      <div v-else class="empty-text">Transactions list is empty</div>
    </div>
  </div>
  <div v-else class="main-container">

  </div>
</template>

<script>
import utils from "@/utils/utils.js";
import api from "@/service/api.js";

export default {
  name: "v-wallet-content",
  data() {
    return {
      profile: null,
      transactions: [],
      isLoading: true,
      transactionsLoader: true,
      transactionsPair: []
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
      this.transactionsLoader = true;
      api.transaction.findAll().then((response) => {
        this.transactions = response.data;
        if (this.transactions.length > 0) {
          if (this.transactions.length > 1) {
            for (let i = 0; i + 1 < this.transactions.length; i += 2) {
              this.transactionsPair.push({
                first: this.transactions[i],
                second: this.transactions[i + 1]
              });
            }
          }
          if (this.transactions.length % 2 === 1) {
            this.transactionsPair.push({
              first: this.transactions[this.transactions.length - 1],
              second: null
            });
          }
        }
        this.transactionsLoader = false;
      })
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
  flex: 1;
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
.transaction-line-container {
  display: flex;
  margin-top: 14px;
}
.transaction-container {
  flex: 1;
  padding: 11px 15px;
  border-radius: 20px;
  align-items: center;
  display: flex;
  background: white;
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.1);
}
.transaction-image-container {
  border-radius: 100px;
  width: 52px;
  height: 52px;
  background: #4BC462;
}
.transaction-image {
  margin: 1px 1px 1px 1px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  object-fit: cover;
}
.info-container {
  flex: 1;
  margin-left: 16px;
  margin-right: 16px;
}
.category-name {
  color: black;
  font-size: 16px;
  font-family: Rubik-medium, system-ui;
}
.transaction-date {
  font-size: 14px;
  margin-top: 5px;
  font-family: Rubik-regular, system-ui;
  color: rgba(0, 0, 0, 0.6);
}
.transaction-amount {
  font-size: 16px;
  font-family: Rubik-medium, system-ui;
}
.spent {
  color: #ED6666;
}
.receive {
  color: #11E426;
}
</style>