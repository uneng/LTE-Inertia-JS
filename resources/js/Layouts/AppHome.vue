<template>
  <div>
    <jet-banner />
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from '@/Components/Layouts/Home/Navbar.vue';
export default {
  name: 'AppHome',
  components: {
    Navbar,
  }
}
</script>
