<template>
  <div class="input-post">
    <img class="pic-user pic-user-2" src="@/assets/user-pic.jpg" alt="" />
    <input type="text" placeholder="No que estás pesando, Luiz Augusto?" />
    <div class="btn"><p>Publicar</p></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "InputPost",
};
</script>

<style>
.input-post {
  display: flex;
  border-radius: 8px;
  background: #fafafa;
  max-width: 100%;
  align-items: center;
  padding: 12px;
  margin: 32px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}

input {
  box-shadow: none;
  margin: 0px;
  border: none;
  outline: 0;
  border-radius: 8px;
  background: transparent;
  width: 100%;
}

input:focus {
  border: none;
}

.btn-post:hover {
  transform: scale(1.05);
}
</style>
