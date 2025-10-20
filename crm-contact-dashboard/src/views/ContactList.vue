<script setup lang="ts">
import ContactItem from '@/components/ContactItem.vue';
import type Contact from '@/models/contact';

const contact: Contact = {
    name: "Arlan Zhumagulov",
    details: "+77771234567",
    message: "Need CRM",
    createdOn: new Date(Date.now() - 200000),
    modifiedOn: new Date(Date.now() - 20000)
}
</script>

<template>
    <div class="contact-list-wrapper">
        <h1>Fullname</h1>
        <h1>Contact Method</h1>
        <h1>Message</h1>
        <h1>Created On</h1>
        <h1>Modified On</h1>

        <ContactItem 
            :contact="contact"
        />
    </div>
</template>


<style scoped>
.contact-list-wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
}


</style>