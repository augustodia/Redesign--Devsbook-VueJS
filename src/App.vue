<template>
  <div id="app">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import Home from "@/views/Home.vue";
export default {
  components: {},
  methods: {
    verificaLogin() {
      if (!this.$store.state.login) {
        this.$router.push({ name: "Login" });
      }
    },
  },
  created() {
    this.verificaLogin();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Quicksand", sans-serif;
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
}

ul {
  list-style: none;
}

a {
  display: block;
  text-decoration: none;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}
.container-2 {
  max-width: 1920px;
  margin: 0 auto;
}

button {
  padding: 16px 0;
  font-size: 18px;
  background-color: rgba(49, 101, 200, 1);
  border: none;
  border-radius: 8px;
  box-shadow: 1px 8px 16px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 1px;
}

.btn {
  background-color: rgba(49, 101, 200, 1);
  box-shadow: none;
  color: #fafafa;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  justify-self: end;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid rgba(20, 28, 72, 0.3);
  box-shadow: none;

  color: rgba(20, 28, 72, 0.6);
  font-weight: 500;
}

img {
  display: block;
  max-width: 100%;
}

input {
  border: 1.5px solid rgba(49, 101, 200, 0.2);
  padding: 16px;
  border-radius: 8px;
  font-size: 18px;
  box-shadow: inset 3px 3px 12px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: all 0.3s;
  margin-bottom: 8px;
  color: #0d0d0d;
}

input:focus {
  border: 1.5px solid rgba(49, 101, 200, 0.8);
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(20px, 0, 0);
}

.v-leave-to {
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.pic-user {
  border-radius: 8px;
  width: 36px;
  height: 36px;
  margin-left: 16px;
}

.pic-user-2 {
  width: 56px;
  height: 56px;
  margin-left: 0px;
}
</style>
