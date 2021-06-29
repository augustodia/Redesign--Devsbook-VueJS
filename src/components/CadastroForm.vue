<template>
  <div class="login-form">
    <h2>Cadastro</h2>
    <form>
      <label for="nome">Nome</label>
      <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Digite seu email"
      />
      <label for="birth">Data de nascimento</label>
      <input
        type="text"
        id="birth"
        name="birth"
        placeholder="Digite sua data de nascimento"
      />
      <label for="password">Senha</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Digite sua senha"
      />
      <button class="btn" @click.prevent="logar">Cadastrar</button>
      <router-link class="no-account" :to="{ name: 'Login' }"
        >Já tem conta? Clique aqui.</router-link
      >
    </form>
  </div>
</template>

<script scoped>
export default {
  name: "Cadastro",
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

input {
  border: 1.5px solid rgba(49, 101, 200, 0.2);
  padding: 16px;
  border-radius: 8px;
  font-size: 18px;
  box-shadow: inset 3px 3px 12px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: all 0.3s;
}

input:focus {
  border: 1.5px solid rgba(49, 101, 200, 0.8);
}

button {
  padding: 16px 0;
  font-size: 18px;
  background-color: rgba(49, 101, 200, 1);
  border: none;
  border-radius: 8px;
  box-shadow: 1px 8px 16px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
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
