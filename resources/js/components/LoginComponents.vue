<template>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div v-if="authError" class="form-group row">
                                <p class="error">
                                    {{ authError }}
                                </p>
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label " for="email">E-mail</label>
                                <input id="email" v-model.trim="form.email" class="form-control" name="email" required
                                       type="email">
                            </div>
                            <div class="form-group row">
                                <label class="col-4 col-form-label " for="password">Password</label>
                                <input id="password" v-model.trim="form.password" class="form-control" name="password"
                                       required
                                       type="password">
                            </div>

                            <div class="form-group row">
                                <div class="col-8 ">
                                    <button class="btn btn-primary" type="submit">Login</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div><!-- End Of col-->
        </div><!-- End Of row-->
    </div><!-- End Of container-->
</template>

<script>
import {login} from "../auth";

export default {
    name: "login-component",
    data() {
        return {
            form: {
                email: null,
                password: null,
            },
            error: null,
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login');
            login(this.$data.form).then(res => {
                this.$store.commit('loginSuccess', res);
                this.$router.push({path: '/dashboard'});
            }).catch(err => {
                this.$store.commit('loginFailed');
            })
        }
    },
    computed: {
        authError() {
            return this.$store.getters.authError;
        },
        registeredUser() {
            return this.$store.getters.registeredUser;
        }
    },
}
</script>

<style scoped>
.error {
    text-align: center;
    color: red;
}
</style>
