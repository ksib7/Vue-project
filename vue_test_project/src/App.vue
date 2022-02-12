<template>
  <div class="container">
    <h1 class="heading_h1">Создание постов</h1>
    <post-form @create="createPost"></post-form>
    <post-list v-bind:posts="posts"></post-list>
  </div>
</template>

<script>
import postForm from "./components/postForm";
import postList from "./components/postList";

export default {
  components: {
    postForm,
    postList,
  },

  data() {
    return {
      posts: [
        { id: 1, title: "Название 1", body: "Информация 1" },
        { id: 2, title: "Название 2", body: "Информация 2" },
        { id: 3, title: "Название 3", body: "Информация 3" },
        { id: 4, title: "Название 4", body: "Информация 4" },
        { id: 5, title: "Название 5", body: "Информация 5" },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0px 10px;
}

.heading_h1 {
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}
</style>
