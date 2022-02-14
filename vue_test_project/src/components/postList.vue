<template>
  <div class="post">
    <div v-if="posts.length > 0">
      <h2>Список постов</h2>
      <div v-for="(post, id) in posts" v-bind:key="id" class="post__wrap">
        <div class="post__wrap__text">
          <strong>Название:</strong>{{ post.title }}
        </div>
        <my-button class="btn" @click="$emit('remove', post)"
          >Удалить</my-button
        >
        <div class="post__wrap__text">
          <strong>Описание:</strong>{{ post.body }}
        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="post__clear">Список пуст</h2>
    </div>
  </div>
</template>

<script>
import myButton from "./UI/myButton";

export default {
  components: {
    myButton,
  },

  props: {
    posts: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.post {
  margin-top: 50px;
  position: relative;
}

.post h2 {
  font-size: 32px;
  text-align: center;
  font-weight: bold;
}

.post__wrap {
  width: 100%;
  min-height: 100px;
  border: 2px solid teal;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  justify-content: space-around;
}

.post__wrap__text {
  font-size: 22px;
  width: 90%;
}

.post__wrap__text strong {
  padding-right: 10px;
}

.btn {
  position: absolute;
  right: 10px;
}

.post__clear {
  color: red;
}
</style>