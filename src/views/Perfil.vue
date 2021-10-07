<template>
  <div class="container">
    <div class="perfil">
      <div>
        <img class="capa" src="@/assets/capa.jpg" alt="" />
      </div>
      <div class="info-perfil">
        <img class="img-perfil" src="@/assets/user-pic-perfil.jpg" alt="" />
        <h1 class="name-perfil">Luiz Augusto dos Santos</h1>
        <div class="follow-following">
          <div class="item">
            <p class="number">10</p>
            <p class="type-relation">Seguidores</p>
          </div>
          <div class="item">
            <p class="number">1</p>
            <p class="type-relation">Seguindo</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content-perfil">
    <div class="more-info-perfil">
      <div class="item">
        <img class="ico" src="@/assets/calendar.svg" alt="">
        <p>05/11/1997</p>
      </div>
      <div class="item">
        <img class="ico" src="@/assets/map-pin.svg" alt="">
        <p>Palmital - PR</p>
      </div>
      <div class="item">
        <img class="ico" src="@/assets/work.svg" alt="">
        <p>Desenvolvedor de Software</p>
      </div>
    </div>
    <posts></posts>
    </div>
  </div>
</template>

<script>
import Posts from "@/components/Posts.vue";
export default {
  name: "Perfil",
  components: {
  Posts
  }
};
</script>

<style>
.perfil {
  margin: 32px;
  margin-bottom: 16px;
  background-color: #fafafa;
  border-radius: 8px;
}

.info-perfil {
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
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

.follow-following {
  margin-top: 24px;
  display: flex;
}

.follow-following .item {
  text-align: center;
  margin: 0px 24px;
}

.follow-following .number,
.type-relation {
  font-weight: bold;
  font-size: 18px;
  color: rgba(20, 28, 72, 0.8);
}

.type-relation {
  color: rgba(20, 28, 72, 0.6);
}

.content-perfil {
  display: flex;
}

.more-info-perfil {
  display: block;
  max-width: 250px;
  height: 100%;
  margin: 0 0 32px 32px;
  padding: 8px 24px;
  background-color: #fafafa;
  border-radius: 8px;
}

.more-info-perfil .item {
  margin: 16px 0;
  display: flex;
  align-items: center;
}

.more-info-perfil .ico {
  opacity: 0.5;
  margin-right: 8px;
}

.more-info-perfil p {
  color: rgba(20, 28, 72, 0.7);
  font-weight: 500;
}

.content-perfil .input-post {
  margin: 0px 32px 0px 16px;
}

.content-perfil .the_post {
  margin: 16px 32px 16px 16px;
}
</style>
