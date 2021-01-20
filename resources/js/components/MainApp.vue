<template>
    <div class="container-fluid">
        <Navigation/>
        <div class="container pt-4">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Navigation from "./Navigation";

export default {
    name: 'main-app',
    components: {Navigation},
    mounted() {

    },
    data() {
        return {}
    },
    methods: {},
}
</script>
