<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <Logo />

    <!-- Sidebar -->
    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <PhotoProfile />
        </div>
        <div class="info" v-if="$page.props.user">
          <a href="#" class="d-block">{{ $page.props.user.name }}</a>
        </div>
      </div>
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <Sidemenu />
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import Logo from '@/components/Image/Logo';
import PhotoProfile from '@/components/Image/Profile';
import Sidemenu from './Sidemenu';
    export default {
        name: 'Sidebar',
        components: { Sidemenu, Logo, PhotoProfile },
        computed: {
          path() {
            return window.location.pathname
          }
        }
    }
</script>