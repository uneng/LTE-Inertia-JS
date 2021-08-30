<template>
  <div class="wrapper">
    <Header />
    <Sidebar />
      <slot />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Layouts/Header.vue';
import Sidebar from '@/components/Layouts/Sidebar.vue';
import Footer from '@/components/Layouts/Footer.vue';
  export default {
    name: 'AppLayout',
    components: {
      Header,
      Sidebar, 
      Footer,
    }
  }
</script>

<style scoped>

</style>