import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Posts from "@/components/Posts.vue";
import Login from "@/views/Login.vue";
import LoginForm from "@/components/LoginForm.vue";
import CadastroForm from "@/components/CadastroForm.vue";
import Perfil from "@/views/Perfil.vue";


const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        name: "Home",
        component: Posts,
      },
      {
        path: "/perfil",
        name: "Perfil",
        component: Perfil,
      },
    ],
  },
  {
    path: "/",
    component: Login,
    children: [
      {
        path: "login",
        name: "Login",
        component: LoginForm,
      },
      {
        path: "cadastro",
        name: "Cadastro",
        component: CadastroForm,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;
