<script setup lang="ts">
import type Contact from '@/models/contact';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{ contact: Contact }>();
const router = useRouter();

const createdOnFormatted = computed(() =>
  new Date(props.contact.createdOn).toLocaleString()
);

const modifiedOnFormatted = computed(() =>
  new Date(props.contact.modifiedOn).toLocaleString()
);


const goToForm = () => {
  router.push(`/contacts/${props.contact.id}`);
};
</script>

<template>
  <div class="contact-item grid-column-5" @click="goToForm">
    <p>{{ contact.name }}</p>
    <p>{{ contact.details }}</p>
    <p>{{ contact.message }}</p>
    <p>{{ createdOnFormatted }}</p>
    <p>{{ modifiedOnFormatted }}</p>
  </div>
</template>

<style scoped>
.contact-item {
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  padding: 14px 20px;
  transition: background-color 0.25s, transform 0.25s;
  cursor: pointer;
  box-sizing: border-box;
}

.contact-item:hover {
  background-color: #a5aed0;
  color: white;
}

.contact-item p {
  margin: 0;
  color: #2d2f39;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.25s;
  text-align: center;
}

.contact-item:hover p {
  color: white;
}
</style>
