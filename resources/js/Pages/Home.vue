<template>
    <app-home>
        <template #header>
            <h2 class="h5 font-weight-bold">
                Home
            </h2>
        </template>

        <welcome />
    </app-home>
</template>

<script>
    import AppHome from '@/Layouts/AppHome'
    import Welcome from '@/Jetstream/Welcome'

    export default {
        name: 'Home',
        components: {
            AppHome,
            Welcome
        },
    }
</script>