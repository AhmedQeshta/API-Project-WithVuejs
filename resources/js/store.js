import VuexPersistence from 'vuex-persist'

import {getLoggedInUser} from "./auth";

// const user = getLoggedInUser();


const state = {
    currentUser: getLoggedInUser(),
    isLoggedIn: !!getLoggedInUser(),
    auth_error: null,
    reg_error: null,
    registeredUser: null,
};
export default {
    state,
    plugins: [new VuexPersistence().plugin],
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUser;
        },
        authError(state) {
            return state.auth_error;
        },
        registeredUser(state) {
            return state.registeredUser;
        },
    },
    mutations: {
        login(state) {
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
            localStorage.setItem("user", JSON.stringify(this.state.currentUser));
        },
        loginFailed(state, payload) {
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        registerSuccess(state, payload) {
            state.reg_error = null;
            state.registeredUser = payload.user;
        },
        registerFailed(state, payload) {
            state.reg_error = payload.error;
        },
    },
    actions: {
        login(context) {
            context.commit('login');
        }
    }
}

