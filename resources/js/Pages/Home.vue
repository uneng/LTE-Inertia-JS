<template>
    <Content>
        <template #header>
            <h2 class="h5 font-weight-bold">
                Home
            </h2>
        </template>

        <welcome />
    </Content>
</template>

<script>
    import AppHome from '@/Layouts/AppHome';
    import Content from '@/Components/Layouts/Home/Content.vue';
    import Welcome from '@/Jetstream/Welcome';

    export default {
        name: 'Home',
        components: {
            Content,
            Welcome
        },
        layout: AppHome,
    }
</script>