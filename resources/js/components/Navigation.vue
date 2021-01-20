<template>
    <nav class="navbar-expand-lg navbar-light bg-primary shadow-sm navbar-dark">
        <div class="contender d-flex justify-content-between align-items-center px-5 py-2">
            <div class="nav navbar-header  ">
                <router-link :to="{name:'home'}" class="navbar-brand">Laravel<sup
                    class="text-white badge-dark px-1 rounded-circle">8</sup>&
                    VueJs
                </router-link>
            </div>
            <div class="nav navbar-nav ">
                <router-link v-if="!currentUser" :to="{name:'login'}"
                             class="nav-item nav-link bg-secondary text-white rounded-sm">Login
                </router-link>
                <router-link v-if="currentUser" :to="{name:'dashboard'}" class="nav-item nav-link">Dashboard
                </router-link>
                <a v-if="currentUser" class="nav-item nav-link" @click.prevent="logout">Logout</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    methods: {
        logout() {
            this.$store.commit('logout');
            this.$router.push('/login');
        }
    },
    computed: {
        currentUser() {
            return this.$store.getters.currentUser;
        }
    },
}
</script>

<style scoped>

</style>
