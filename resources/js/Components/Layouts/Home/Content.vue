<template>
    <div>
        <!-- Page Heading -->
        <header class="d-flex py-3 bg-white shadow-sm border-bottom">
            <div class="container">
                <slot name="header" />
            </div>
        </header>

        <!-- Page Content -->
        <main class="container my-5">
            <slot />
        </main>
    </div>
</template>

<script>
    export default {
        name: 'Content'
    }
</script>

<style scoped>

</style>