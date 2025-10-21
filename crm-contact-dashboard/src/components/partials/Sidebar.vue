<script setup lang="ts"></script>

<template>
  <aside class="sidebar-wrapper">
    <h2 class="sidebar-title">Contact Dashboard</h2>
    <nav class="sidebar-nav">
      <button class="nav-btn">Dashboard</button>
      <button class="nav-btn active">Contacts</button>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar-wrapper {
  width: 260px;
  background-color: var(--black-blue-color);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
  box-shadow: 4px 0 8px rgba(0,0,0,0.15);
}

.sidebar-title {
  font-size: 22px;
  font-weight: bold;
  color: white;
  padding-bottom: 20px;
  margin-bottom: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border-bottom: 2px solid #fff;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
}

.nav-btn {
  background: transparent;
  color: #e5e7eb;
  border: none;
  text-align: left;
  width: 100%;
  padding: 14px 18px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.25s, color 0.25s;
}

.nav-btn:hover {
  background: var(--darker-blue-color);
  color: white;
}

.nav-btn.active {
  background: var(--blue-color);
  color: white;
}
</style>
