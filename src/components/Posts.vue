<template>
  <div class="post_container">
    <section class="the_post">
      <div class="info-user">
        <img class="pic-user pic-user-2" src="@/assets/user-pic.jpg" alt="" />
        <div class="info-post">
          <h3 class="post_name_user">Luiz Augusto Santos</h3>
          <p>12 horas atrás</p>
        </div>
      </div>
      <div class="content-post">
        <p>
          Olá a todos, sejam bem vindos! Obrigado pelo minuto de atenção que
          vocês tem dado, fico muito grato. Seguirei estudando e compartilhando
          minhas conquistas :)
        </p>
      </div>
      <div class="post-actions">
        <div class="action">
          <img src="@/assets/like.svg" alt="" />
          <p>Gosto</p>
        </div>
        <div class="action">
          <img src="@/assets/comment.svg" alt="" />
          <p>Comentar</p>
        </div>
      </div>
    </section>
    <section class="the_post">
      <div class="info-user">
        <img class="pic-user pic-user-2" src="@/assets/user-pic.jpg" alt="" />
        <div class="info-post">
          <h3 class="post_name_user">Luiz Augusto Santos</h3>
          <p>12 horas atrás</p>
        </div>
      </div>
      <div class="content-post">
        <p>
          Olá mais uma vez! Uma foto bem aleatória para teste...
        </p>
        <img src="@/assets/foto.jpg" alt="" />
      </div>
      <div class="post-actions">
        <div class="action">
          <img src="@/assets/like.svg" alt="" />
          <p>Gosto</p>
        </div>
        <div class="action">
          <img src="@/assets/comment.svg" alt="" />
          <p>Comentar</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Posts",
};
</script>

<style scoped>
.the_post {
  padding: 24px 24px 8px 24px;
  background: #fafafa;
  margin: 16px 32px;
  border-radius: 8px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}

.pic-user-2 {
  width: 56px;
  height: 56px;
  margin-left: 0px;
}

.info-user {
  display: flex;
  align-items: center;
}

.info-post {
  margin-left: 16px;
  color: rgba(20, 28, 72, 0.87);
}

.info-post p {
  color: rgba(20, 28, 72, 0.6);
}

.content-post p {
  margin-top: 16px;
  font-weight: 600;
  color: rgba(20, 28, 72, 0.77);
  line-height: 26px;
}
.content-post img {
  margin-top: 16px;
  border-radius: 8px;
}

.post-actions {
  display: flex;
  margin-top: 32px;
  border-top: 1.5px solid rgba(121, 123, 135, 0.2);
  padding: 8px;
}
.post-actions .action {
  padding: 8px;
  flex: 1;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.3s;
  cursor: pointer;
}

.post-actions .action:hover {
  background-color: #efefef;
}

.post-actions .action img {
  margin-right: 8px;
}

.post-actions .action p {
  font-weight: 500;
  color: #797b87;
}
</style>
