<template>
    <nav class="navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="contender">
            <div class="navbar-header  float-left">
                <router-link :to="{name:'home'}" class="navbar-brand">Laravel<sup
                    class="text-white badge-dark px-1 rounded-circle">8</sup>&
                    VueJs
                </router-link>
            </div>
            <div class="nav navbar-nav float-right">
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
