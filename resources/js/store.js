import {getLoggedInUser} from './auth.js';

const user = getLoggedInUser();
const storeData = {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        auth_error: null,
        reg_error: null,
        registeredUser: null,
    },
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
            localStorage.setItem("user", JSON.stringify(this.state.user));
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

export default storeData;
