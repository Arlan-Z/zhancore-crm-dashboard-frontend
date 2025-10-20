<script setup lang="ts">
import type Contact from '@/models/contact';
import { computed } from 'vue';

const props = defineProps<{ contact: Contact }>();

const createdOnFormatted = computed(() =>
  new Date(props.contact.createdOn).toLocaleString()
);

const modifiedOnFormatted = computed(() =>
  new Date(props.contact.modifiedOn).toLocaleString()
);
</script>

<template>
  <p>{{ contact.name }}</p>
  <p>{{ contact.details }}</p>
  <p>{{ contact.message }}</p>
  <p>{{ createdOnFormatted }}</p>
  <p>{{ modifiedOnFormatted }}</p>
</template>

<style scoped>
p {
  margin: 0;
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

p + p {
  border-left: 2px solid #ddd;
}
</style>