import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Posts from "@/components/Posts.vue";
import Login from "@/views/Login.vue";
import LoginForm from "@/components/LoginForm.vue";
import CadastroForm from "@/components/CadastroForm.vue";
import Perfil from "@/views/Perfil.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
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
  ],
});
