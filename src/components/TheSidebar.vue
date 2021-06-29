<template>
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
</template>

<script>
export default {
  name: "TheSidebar",
};
</script>

<style scoped>
h3 {
  color: rgba(20, 28, 72, 0.6);
}
.sidebar {
  margin-top: 32px;
}

img {
  margin-left: 0px;
  margin-right: 12px;
}

.container-requests {
  margin-top: 16px;
  padding: 24px;
  background: #fafafa;
  border-radius: 8px;
}

.request-info {
  display: flex;
}

.request-info span {
  font-weight: 600;
  color: rgba(20, 28, 72, 1);
}

.request-actions {
  display: flex;
}

button {
  padding: 8px;
  flex: 1;
  font-size: 14px;
}

.btn-secondary {
  margin-left: 16px;
}
</style>
