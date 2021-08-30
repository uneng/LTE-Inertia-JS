<template>
    <Content>
        <template v-slot:header>
            <h2 class="h5 font-weight-bold">
                Dashboard
            </h2>
        </template>

        <welcome />
    </Content>
</template>

<script>
    import Content from '@/components/Layouts/Content';
    import Welcome from '@/Jetstream/Welcome';

    export default {
        components: {
            Welcome,
            Content,
        },
    }
</script>
