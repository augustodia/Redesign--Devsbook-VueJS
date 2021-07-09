<template>
  <section class="the_post" :style="{ transitionDelay: '.' + index + 's' }">
    <div class="info-user">
      <img class="pic-user pic-user-2" src="@/assets/user-pic.jpg" alt="" />
      <div class="info-post">
        <h3 class="post_name_user">{{ post.name_user_post }}</h3>
        <p>{{ post.past_time }}</p>
      </div>
    </div>
    <div class="content-post">
      <p>{{ post.message_post }}</p>
    </div>
    <div class="post-actions">
      <div class="action" @click="isLiked = !isLiked">
        <svg
          width="23"
          height="21"
          viewBox="0 0 23 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="{ vermelho: isLiked }"
        >
          <path
            d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z"
            stroke="#797B87"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Gosto</p>
      </div>
      <div class="action">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z"
            stroke="#797B87"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>Comentar</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ThePost",
  props: ["post", "index"],
  data() {
    return {
      isLiked: false,
    };
  },
};
</script>

<style>
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

.post-actions .action svg {
  margin-right: 8px;
}

svg.vermelho path {
  fill: #c31414;
  stroke: #c31414;
  transition: all 0.3s;
}

.post-actions .action p {
  font-weight: 500;
  color: #797b87;
}
</style>
