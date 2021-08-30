<template>
    <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <slot name="header" />
          </div>
        </section>
        <section class="content">
          <div class="container-fluid">
            <slot />
          </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Content",
    }
</script>

<style scoped>

</style>