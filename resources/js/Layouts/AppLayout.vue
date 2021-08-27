<template>
  <div class="wrapper">
    <Header />
    <Sidebar />
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <slot name="header"></slot>
          </div>
        </section>
        <section class="content">
          <div class="container-fluid">
            <slot></slot>
          </div>
        </section>
      </div>
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

<style lang="scss" scoped>

</style>