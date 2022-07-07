<script setup >
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
import Header from './components/my-components/Header.vue';
import Footer from './components/my-components/Footer.vue';
import { createApp } from '@vue/runtime-dom';
import { createPinia } from 'pinia';
</script>

<template>
  <Header></Header>
 
  <Footer></Footer>
  

</template>

<style></style>
