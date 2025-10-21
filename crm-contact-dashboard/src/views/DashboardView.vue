<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Sidebar from '@/components/partials/Sidebar.vue';
import type Contact from '@/models/contact';
import { getContacts } from '@/services/api';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'vue-chartjs';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const contacts = ref<Contact[]>([]);

const chartReady = ref(false);

onMounted(async () => {
  contacts.value = await getContacts();
  totalContacts.value = contacts.value.length;


  const firstDataset = chartData.value.datasets[0];

  if (firstDataset) {
    const monthlyCounts = Array(12).fill(0);

    contacts.value.forEach(c => {
      const month = new Date(c.createdOn).getMonth(); 
      if (month >= 0 && month < 12) {
        monthlyCounts[month]++;
      }
    });

    firstDataset.data = monthlyCounts;
    chartReady.value = true;
  }
});


const totalContacts = ref(0);

const chartData = ref<ChartData<'bar'>>({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Contacts Created',
      data: [], 
      backgroundColor: 'rgba(76, 92, 150, 0.7)',
      borderRadius: 6,
    }
  ]
});

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
    title: {
      display: true,
      text: 'Contacts Created by Month'
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1
      }
    }
  }
};
</script>

<template>
  <div class="dashboard-wrapper">
    <Sidebar active-page="dashboard" />

    <div class="dashboard-content">
      <div class="stat-block">
        <h2>Total Contacts</h2>
        <p class="stat-number">{{ totalContacts }}</p>
      </div>

      <div class="chart-block">
        <Bar v-if="chartReady" :data="chartData" :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard-wrapper {
  display: flex;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  background-color: #f5f6fa;
}

.dashboard-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 60px 80px;
}

.stat-block {
  background-color: white;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
}

.stat-block h2 {
  font-size: 22px;
  font-weight: 600;
  color: var(--dark-blue-color);
  margin-bottom: 16px;
}

.stat-number {
  font-size: 40px;
  font-weight: 700;
  color: var(--blue-color);
}

.chart-block {
  background-color: white;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  height: 400px;
}
</style>