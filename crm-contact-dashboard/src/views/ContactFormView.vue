<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import ContactForm from '@/components/ContactForm.vue';
import type Contact from '@/models/contact';
import { getContacts } from '@/services/api';
import Sidebar from '@/components/partials/Sidebar.vue';

const route = useRoute();
const contact = ref<Contact | null>(null);

onMounted(async () => {
  const id = Number(route.params.id);
  const contacts = await getContacts();
  contact.value = contacts.find(c => c.id === id) || null;
});
</script>

<template>
  <div class="contact-form-view-wrapper">
    <Sidebar active-page="contacts"/>

    <div v-if="contact">
      <ContactForm :contact="contact" />
    </div>
    <div v-else class="loading">
      <p>Loading contact...</p>
    </div>
  </div>
</template>

<style scoped>
.contact-form-view-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: #f5f6fa;
  font-family: 'Poppins', sans-serif;
  width: 100%;
}

.loading {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444;
  font-size: 18px;
}
</style>
