<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>
                    <form action="#" @submit.prevent="check">
                        <div class="card-body">
                            user name :
                            <input v-model.trim="users.name" type="text">
                            <p>{{ users.name }}</p>
                        </div>
                        <div class="card-body">
                            user Phone :
                            <input v-model.trim="users.phone" type="text">
                            <p>{{ users.phone }}</p>
                        </div>
                        <button class="btn btn-danger mx-auto text-center" type="submit">clear</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main-app',
    mounted() {
        console.log('Component mounted.')
    },
    data() {
        return {
            users: {
                name: null,
                phone: null,
            }
        }
    },
    methods: {
        check() {
            this.users.name = "";
            this.users.phone = "";
        }
    },
}
</script>
