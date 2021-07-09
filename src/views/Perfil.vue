<template>
  <div class="perfil">
    <div>
      <img class="capa" src="@/assets/capa.jpg" alt="" />
    </div>
    <div class="info-perfil">
      <img class="img-perfil" src="@/assets/user-pic-perfil.jpg" alt="" />
      <h1 class="name-perfil">Luiz Augusto dos Santos</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Perfil",
};
</script>

<style scoped>
.perfil {
  margin: 32px;
  background-color: #fafafa;
  border-radius: 8px;
}

.info-perfil {
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-perfil {
  width: 130px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
}

.info-perfil .name-perfil {
  margin-top: 24px;
  color: rgba(20, 28, 72, 0.9);
}

.capa {
  width: 100%;
  border-radius: 8px;
}
</style>
