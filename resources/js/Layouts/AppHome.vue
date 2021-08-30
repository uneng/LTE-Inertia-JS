<template>
  <div>
    <jet-banner />
    <Navbar />
    <slot />
  </div>
</template>

<script>
import JetBanner from '@/Jetstream/Banner'
import Navbar from '@/Components/Layouts/Home/Navbar.vue';
export default {
  name: 'AppHome',
  components: {
    JetBanner,
    Navbar,
  }
}
</script>
