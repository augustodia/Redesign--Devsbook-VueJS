<template>
  <div class="home">
    <the-header></the-header>
    <div class="container-home container-2">
      <nav class="nav">
        <ul>
          <li>
            <img src="@/assets/home.svg" alt="" /><router-link
              :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li>
            <img src="@/assets/user.svg" alt="" /><router-link
              :to="{ name: 'Perfil' }"
              >Perfil</router-link
            >
          </li>
          <li>
            <img src="@/assets/settings.svg" alt="" /><a href=""
              >Configurações</a
            >
          </li>
          <li>
            <img src="@/assets/power.svg" alt="" /><router-link
              :to="{ name: 'Login' }"
              >Sair</router-link
            >
          </li>
        </ul>
      </nav>
      <main>
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </main>
      <aside>
        <div class="sidebar">
          <h3>Pedidos de amizade</h3>
          <div class="container-requests">
            <div class="request-item">
              <div class="request-info">
                <img class="pic-user" src="@/assets/user-pic.jpg" alt="" />
                <p><span>Fulano de Tal Sobrinho</span> quer ser seu amigo</p>
              </div>
              <div class="request-actions">
                <button class="btn">Aceitar</button>
                <button class="btn-secondary">Recusar</button>
              </div>
            </div>
          </div>
          <div class="container-requests">
            <div class="request-item">
              <div class="request-info">
                <img class="pic-user" src="@/assets/user-pic.jpg" alt="" />
                <p><span>Fulano de Tal Sobrinho</span> quer ser seu amigo</p>
              </div>
              <div class="request-actions">
                <button class="btn">Aceitar</button>
                <button class="btn-secondary">Recusar</button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: "Home",
  components: { TheHeader },
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 0, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

main {
  width: 100%;
}
.container-home {
  display: flex;
  padding: 0 32px;
}

.navigation {
  flex: 1;
}

.nav {
  align-self: flex-start;
}

.nav {
  background-color: #fafafa;
  max-width: 500px;
  padding: 24px;
  border-radius: 8px;
  margin-top: 32px;
}

.nav ul {
  width: 100%;
}

.nav ul li {
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-left: 3px solid transparent;
}

.nav ul li img {
  margin-right: 16px;
  opacity: 0.4;
}

.nav ul li:hover {
  border-left: 3px solid rgba(20, 28, 72, 0.87);
}

.nav ul li a {
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

.nav ul li a.router-link-exact-active::before {
  content: "";
  width: 3px;
  height: 70px;
  display: block;
  position: absolute;
  top: -1px;
  left: -59px;
  background: rgba(20, 28, 72, 0.87);
}

.nav ul li:last-child {
  border-bottom: none;
}

main {
  flex: 4;
}

aside {
  flex: 1.5;
}

h3 {
  color: rgba(20, 28, 72, 0.6);
}
.sidebar {
  margin-top: 32px;
}

.sidebar img {
  margin-left: 0px;
  margin-right: 12px;
}

.sidebar .container-requests {
  margin-top: 16px;
  padding: 24px;
  background: #fafafa;
  border-radius: 8px;
}

.sidebar .request-info {
  display: flex;
}

.sidebar .request-info span {
  font-weight: 600;
  color: rgba(20, 28, 72, 1);
}

.sidebar .request-actions {
  display: flex;
}

.sidebar button {
  padding: 8px;
  flex: 1;
  font-size: 14px;
}

.sidebar .btn-secondary {
  margin-left: 16px;
}
</style>
