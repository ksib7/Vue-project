<template>
  <div>
    <form @submit.prevent class="form" action="">
      <input
        class="inputEl"
        type="text"
        placeholder="Название"
        required
        v-model="post.title"
      />
      <input
        class="inputEl"
        type="text"
        placeholder="Описание"
        required
        v-model="post.body"
      />
      <my-button class="btn" @click="createPost">Добавить</my-button>
    </form>
  </div>
</template>

<script>
import myButton from "./UI/myButton";

export default {
  components: {
    myButton,
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.inputEl {
  width: 100%;
  min-height: 70px;
  border: 1px solid teal;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 18px;
  padding: 10px;
}

.btn {
  -ms-flex-item-align: end;
  align-self: flex-end;
  margin-top: 50px;
}
</style>
