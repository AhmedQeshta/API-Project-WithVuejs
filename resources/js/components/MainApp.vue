<template>
    <div>
        <Navigation/>
        <div class="container-fluid">
            <div class="container pt-4">
                <router-view/>
            </div>
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
