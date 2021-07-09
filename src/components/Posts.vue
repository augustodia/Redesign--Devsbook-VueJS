<template>
  <div>
    <input-post></input-post>
    <div class="post_container">
      <transition-group name="posts" mode="out-in">
        <the-post
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
          :index="index"
        ></the-post>
      </transition-group>
    </div>
  </div>
</template>

<script>
import InputPost from "@/components/InputPost.vue";
import ThePost from "@/components/ThePost.vue";
import axios from "axios";
export default {
  components: { InputPost, ThePost },
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      axios.get("http://localhost:3000/posts").then((response) => {
        this.posts = response.data;
        console.log(response.data);
      });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style scoped>
.posts-enter,
.posts-leave-to {
  opacity: 0;
}

.posts-enter {
  transform: translate3d(0, -40px, 0);
}

.posts-leave-to {
  transform: translate3d(0, 0, 0);
}

.posts-enter-active,
.posts-leave-active {
  transition: all 0.3s;
}
</style>
