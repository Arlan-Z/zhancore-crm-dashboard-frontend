<script setup lang="ts">
import { ref, watch } from 'vue';
import type Contact from '@/models/contact';
import { updateContact } from '@/services/api';

const props = defineProps<{
  contact: Contact
}>();

const contact = ref({
  name: '',
  details: '',
  message: ''
});

watch(
  () => props.contact,
  (newContact) => {
    if (newContact) {
      contact.value = {
        name: newContact.name,
        details: newContact.details,
        message: newContact.message
      };
    }
  },
  { immediate: true }
);

const handleSubmit = async () => {
  if (!contact.value.name || !contact.value.details || !contact.value.message) {
    alert('Please fill out all fields.');
    return;
  }

  await updateContact(props.contact.id, contact.value);
  alert('✅ Contact updated successfully!');
};
</script>

<template>
  <div class="contact-form-wrapper">
    <div class="form-container">
      <h1 class="form-title">Edit Contact</h1>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input id="name" v-model="contact.name" type="text" placeholder="Enter full name" />
        </div>

        <div class="form-group">
          <label for="details">Contact Method</label>
          <input id="details" v-model="contact.details" type="text" placeholder="Enter phone or email" />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="contact.message" placeholder="Enter message"></textarea>
        </div>

        <button type="submit" class="submit-btn">Update Contact</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.contact-form-wrapper {
  display: flex;
  min-height: 100vh;
  background-color: #f5f6fa;
  font-family: 'Poppins', sans-serif;
}

.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px 80px;
}

.form-title {
  font-size: 26px;
  font-weight: 600;
  color: var(--dark-blue-color);
  margin-bottom: 40px;
  text-transform: uppercase;
}

.contact-form {
  background-color: white;
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-weight: 500;
  color: var(--black-blue-color);
}

input, textarea {
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 15px;
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus, textarea:focus {
  border-color: var(--dark-blue-color);
  box-shadow: 0 0 0 3px rgba(76, 92, 150, 0.15);
  outline: none;
}

textarea {
  resize: none;
  min-height: 100px;
}

.submit-btn {
  align-self: flex-start;
  background-color: var(--dark-blue-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.25s;
}

.submit-btn:hover {
  background-color: var(--blue-color);
}
</style>
