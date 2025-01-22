import Register from "./components/Form/Register.vue";
import MainLayout from "./components/MainLayout.vue";

export const routes = [
  {
    path: "/",
    component: MainLayout,
  },
  {
    path: "/register",
    component: Register,
  },
];
