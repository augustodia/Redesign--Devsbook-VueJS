<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.svg" alt="" />
      <p>DevsBook</p>
    </div>
    <div class="user">
      <div class="input-search">
        <input type="text" placeholder="Pesquisar" />
      </div>
      <img class="pic-user" src="@/assets/user-pic.jpg" alt="" />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #fafafa;
}

input {
  padding: 8px 16px 8px 48px;
  border: 1.5px solid transparent;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  color: #0d0d0d;
  margin-bottom: 0px;
  width: 100%;
  box-shadow: 0px 0px 3px rgb(0 0 0 / 10%);
}

.logo {
  width: 36px;
  display: flex;
  align-items: center;
}

.logo p {
  margin-left: 8px;
  font-size: 18px;
  color: #5e85cf;
  font-weight: 500;
  letter-spacing: 2px;
}
.user {
  display: flex;
  width: 380px;
}
.input-search {
  height: 36px;
  box-shadow: inset 3px 3px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 0.3s;
  position: relative;
  width: 100%;
  cursor: pointer;
}

.input-search::before {
  content: "";
  display: block;
  width: 24px;
  height: 24px;
  background: url("../assets/search.svg") center no-repeat no-repeat;
  position: absolute;
  top: 6px;
  left: 8px;
  opacity: 0.4;
}
</style>
