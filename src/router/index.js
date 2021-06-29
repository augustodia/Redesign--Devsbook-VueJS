import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import LoginForm from "@/components/LoginForm.vue";
import CadastroForm from "@/components/CadastroForm.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      children: [
        {
          path: "",
          name: "Login",
          component: LoginForm,
        },
      ],
    },
    {
      path: "/cadastro",
      component: Login,
      children: [
        {
          path: "",
          name: "Cadastro",
          component: CadastroForm,
        },
      ],
    },
  ],
});
