<template>
  <div class="home">
    <the-header></the-header>
    <div class="container-home container-2">
      <the-nav class="navigation"></the-nav>
      <main>
        <input-post></input-post>
        <posts></posts>
      </main>
      <aside>
        <the-sidebar></the-sidebar>
      </aside>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNav from "@/components/TheNav.vue";
import Posts from "@/components/Posts.vue";
import InputPost from "@/components/InputPost.vue";
import TheSidebar from "@/components/TheSidebar.vue";

export default {
  name: "Home",
  components: { TheHeader, TheNav, Posts, InputPost, TheSidebar },
};
</script>

<style scoped>
main {
  width: 100%;
}
.container-home {
  display: flex;
  padding: 0 32px;
}

.navigation {
  flex: 1;
}

.nav {
  align-self: flex-start;
}

main {
  flex: 4;
}

aside {
  flex: 1.5;
}
</style>
