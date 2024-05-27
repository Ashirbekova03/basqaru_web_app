<template>
  <div class="content-container">
    <canvas id="category-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';
import utils from "@/utils/utils.js";

export default {
  name: "v-category-analytics",
  props: {
    transactions: Array,
    categories: Array
  },
  data() {
    return {
      dataSet: [],
      planetChartData: {
        type: "doughnut",
        data: {
          labels: [],
          datasets: [
            {
              label: "",
              data: [],
              backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(99, 255, 132, 0.2)", "rgba(132, 99, 255, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(99, 255, 132, 0.2)", "rgba(132, 99, 255, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
              borderColor: ["rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)", "rgba(255, 99, 132, 1)", "rgba(99, 255, 132, 1)", "rgba(132, 99, 255, 1)", "rgba(255, 205, 86, 1)", "rgba(54, 162, 235, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)", "rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)", "rgba(255, 205, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)", "rgba(255, 99, 132, 1)", "rgba(99, 255, 132, 1)", "rgba(132, 99, 255, 1)", "rgba(255, 205, 86, 1)", "rgba(54, 162, 235, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)", "rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)", "rgba(255, 205, 86, 1)", "rgba(75, 192, 192, 1)"],
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  let label = context.label || '';

                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed !== null) {
                    label += new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    }).format(context.parsed);
                  }
                  return label;
                }
              }
            }
          }
        }
      }
    }
  },
  mounted() {
    for (let i = 0; i < this.categories.length; i++) {
      this.dataSet.push({
        category: this.categories[i],
        amount: 0
      });
    }
    for (let j = 0; j < this.categories.length; j++) {
      for (let i = 0; i < this.transactions.length; i++) {
        if (!this.transactions[i].isReceive && this.transactions[i].category.id === this.dataSet[j].category.id) {
          this.dataSet[j].amount += this.transactions[i].amount;
        }
      }
    }
    for (let i = 0; i < this.dataSet.length; i++) {
      this.planetChartData.data.labels.push(this.dataSet[i].category.name + ": " + utils.formatCurrency(this.dataSet[i].category.limit));
      this.planetChartData.data.datasets[0].data.push(this.dataSet[i].amount);
    }
    const ctx = document.getElementById('category-chart').getContext('2d');
    new Chart(ctx, this.planetChartData);
  }
}
</script>

<style scoped>
.content-container {
  margin-top: 40px;
}
</style>