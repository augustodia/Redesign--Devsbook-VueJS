<template>
  <div class="nav">
    <ul>
      <li>
        <img src="@/assets/home.svg" alt="" /><router-link
          :to="{ name: 'Home' }"
          >Home</router-link
        >
      </li>
      <li><img src="@/assets/user.svg" alt="" /><a href="">Perfil</a></li>
      <li>
        <img src="@/assets/settings.svg" alt="" /><a href="">Configurações</a>
      </li>
      <li>
        <img src="@/assets/power.svg" alt="" /><router-link
          :to="{ name: 'Login' }"
          >Sair</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheNav",
};
</script>

<style scoped>
.nav {
  background-color: #fafafa;
  max-width: 500px;
  padding: 24px;
  border-radius: 8px;
  margin-top: 32px;
}

ul {
  width: 100%;
}

ul li {
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-left: 3px solid transparent;
}

ul li img {
  margin-right: 16px;
  opacity: 0.4;
}

ul li:hover {
  border-left: 3px solid rgba(20, 28, 72, 0.87);
}

ul li a {
  color: rgba(20, 28, 72, 0.87);
  font-weight: 600;
  letter-spacing: 1px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  display: flex;
  position: relative;
  border-radius: 8px;
}

ul li a.router-link-exact-active::before {
  content: "";
  width: 3px;
  height: 70px;
  display: block;
  position: absolute;
  top: -1px;
  left: -59px;
  background: rgba(20, 28, 72, 0.87);
}

ul li:last-child {
  border-bottom: none;
}

/* ul li a::before {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  background: url("../assets/home.svg") center no-repeat no-repeat;
} */

/* .router-link-exact-active {
  border-left: 3px solid rgba(20, 28, 72, 0.87);
} */
</style>
