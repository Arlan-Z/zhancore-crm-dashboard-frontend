import { createRouter, createWebHistory } from 'vue-router';
import ContactListView from '@/views/ContactListView.vue';
import ContactFormView from '@/views/ContactFormView.vue';
import DashboardView from '@/views/DashboardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      redirect: '/dashboard' 
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactListView
    },
    {
      path: '/contacts/:id',
      name: 'contact-edit',
      component: ContactFormView,
      props: true
    },
    { path: '/dashboard', 
      name: 'dashboard', 
      component: DashboardView 
    },
  ],
})

export default router
