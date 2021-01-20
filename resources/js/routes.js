import HomeComponents from "./components/HomeComponents";
import LoginComponents from "./components/LoginComponents";
import DashboardComponents from "./components/DashboardComponents";


export const routes = [
    {
        path: "/",
        name: "index",
        component: HomeComponents,
    },
    {
        path: "/home",
        name: "home",
        component: HomeComponents,
    },
    {
        path: "/login",
        name: "login",
        component: LoginComponents,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardComponents,
        meta: {
            requiresAuth: true,
        },
    }
];
