<template>
  <div class="login-container container">
    <img class="social-img" src="@/assets/Social.svg" alt="" />
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script scoped>
export default {
  name: "Login",
  methods: {
    logar() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  width: 100%;
  height: 100vh;
}
.social-img {
  width: 400px;
  flex: 1;
}

h2 {
  margin-bottom: 32px;
  font-size: 48px;
  font-weight: 500;
  color: #0d0d0d;
}
.login-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 128px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

label {
  margin: 8px 0;
  font-size: 16px;
}

button {
  text-transform: uppercase;
}

button:hover {
  background-color: rgba(49, 101, 200, 0.9);
  box-shadow: 1px 14px 24px rgba(0, 0, 0, 0.2);
  transform: scale(1.05);
}

.no-account {
  margin-top: 16px;
  font-size: 14px;
  text-decoration: none;
  color: #3f3f3f;
  transition: all 0.3s;
}

.no-account:hover {
  color: rgba(49, 101, 200, 1);
}
</style>
