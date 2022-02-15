<template>
  <div class="container">
    <h2 class="create">Страница с постами</h2>
    <my-button @click="showDialog" class="button">Создать пост</my-button>
    <my-dialog v-model:show="hideModal">
      <h1 class="heading_h1">Создание постов</h1>
      <post-form @create="createPost"></post-form>
    </my-dialog>
    <post-list
      v-if="!isPostLoading"
      v-bind:posts="posts"
      @remove="removePost"
    ></post-list>
    <div v-else>
      <h2 class="indicate">Идет загрузка...</h2>
    </div>
  </div>
</template>

<script>
import postForm from "../components/postForm";
import postList from "../components/postList";
import MyButton from "../components/UI/myButton.vue";
import MyDialog from "../components/UI/myDialog.vue";

export default {
  components: {
    postForm,
    postList,
    MyDialog,
    MyButton,
  },

  data() {
    return {
      posts: [],

      hideModal: false,

      isPostLoading: false,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.hideModal = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },

    async getUsers() {
      this.isPostLoading = true;
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let result = await response.json();

      result = result.splice(0, 15);

      this.posts = result;
      this.isPostLoading = false;
    },

    showDialog() {
      this.hideModal = true;
    },
  },

  mounted() {
    this.getUsers();
  },
};
</script>

<style lang="scss">
.heading_h1 {
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}

.button {
  margin-top: 20px;
}

.indicate {
  font-size: 48px;
  margin-top: 20px;
}

.create {
  font-size: 48px;
  margin-top: 20px;
  text-align: center;
}
</style>
