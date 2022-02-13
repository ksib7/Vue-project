<template>
  <div class="container">
    <h1 class="heading_h1">Создание постов</h1>
    <post-form @create="createPost"></post-form>
    <post-list v-bind:posts="posts" @remove="removePost"></post-list>
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
      posts: [],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },

    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },

    async getUsers() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let result = await response.json();

      result = result.splice(0, 15);

      this.posts = result;
    },
  },

  mounted() {
    this.getUsers();
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
