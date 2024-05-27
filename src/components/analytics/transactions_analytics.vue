<template>
  <div class="content-container">
    <p class="title">Transactions</p>
    <canvas id="transactions-chart"></canvas>
  </div>
</template>

<script>

import Chart from 'chart.js';

export default {
  name: "v-transactions-analytics",
  props: {
    transactions: Array,
  },
  data() {
    return {
      dataSet: [],
      planetChartData: {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "",
              data: [],
              backgroundColor: "rgba(75, 196, 98, .5)",
              borderColor: "rgba(75, 196, 98, 1)",
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                  callback: function (label, index, labels) {
                    const parts = label.toFixed(2).split('.');
                    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
                    const decimalPart = parts[1];
                    return `$${integerPart}.${decimalPart}`;
                  }
                }
              }
            ]
          },
        }
      }
    }
  },
  mounted() {
    for (let i = 0; i < this.transactions.length; i++) {
      if (!this.transactions[i].isReceive) {
        this.planetChartData.data.labels.push("");
        this.planetChartData.data.datasets[0].data.push(this.transactions[i].amount);
        this.dataSet.push(this.transactions[i]);
      }
    }
    const ctx = document.getElementById('transactions-chart').getContext('2d');
    new Chart(ctx, this.planetChartData);
  }
}
</script>

<style scoped>
.content-container {

}
.title {
  font-size: 22px;
  color: black;
  font-family: Rubik-medium, system-ui;
}
</style>