<script setup lang="ts">
import ContactItem from '@/components/ContactItem.vue';
import Loading from '@/components/partials/Loading.vue';
import Sidebar from '@/components/partials/Sidebar.vue';
import type Contact from '@/models/contact';
import { getContacts } from '@/services/api';
import { onMounted, ref } from 'vue';

const contacts = ref<Contact[]>([]);

onMounted(async () => {
  contacts.value = await getContacts();
});
</script>

<template>
  <div class="contact-list-wrapper">
    <Sidebar active-page="contacts"/>

    <div class="contact-table">
      <div class="table-header grid-column-5">
        <span>Fullname</span>
        <span>Contact Method</span>
        <span>Message</span>
        <span>Created On</span>
        <span>Modified On</span>
      </div>

      <ContactItem v-if="contacts.length > 0"
        v-for="contact in contacts" 
        :key="contact.id" 
        :contact="contact" 
      />

      <Loading v-else/>
    </div>

  </div>
</template>

<style scoped>
.contact-list-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: #f5f6fa;
  font-family: 'Poppins', sans-serif;
}

.contact-table {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
}

.contact-table span {
  text-align: center;
}

.table-header {
  background-color: var(--dark-blue-color);
  color: white;
  font-weight: 600;
  padding: 16px 20px;
  border-radius: 10px 10px 0 0;
  letter-spacing: 0.3px;
  text-align: left;
  box-sizing: border-box;
}

.grid-column-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  width: 100%;
  column-gap: 20px;
}
</style>
