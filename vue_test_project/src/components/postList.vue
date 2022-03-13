<template>
  <div class="post">
    <div v-if="posts.length > 0">
      <h2>Список постов</h2>
      <div v-for="(post, id) in posts" v-bind:key="id" class="post__wrap">
        <div class="post__wrap__text">
          <strong>Название:</strong>{{ post.title }}
        </div>
        <my-button
          @click="$router.push(`/posts/${post.id}`)"
          class="btn btn--position"
          >Открыть</my-button
        >
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
  margin-bottom: 50px;
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
  width: 80%;
}

.post__wrap__text strong {
  padding-right: 10px;
}

.btn {
  position: absolute;
  right: 10px;
}

.btn--position {
  right: 130px;
}

.post__clear {
  color: red;
}

@media (max-width: 1215px) {
  .post__wrap__text {
    width: 70%;
  }
}

@media (max-width: 873px) {
  .post__wrap__text {
    width: 60%;
  }
}

@media (max-width: 657px) {
  .post__wrap__text {
    width: 100%;
  }

  .post__wrap {
    padding-bottom: 80px;
  }

  .btn--position {
    bottom: 5px;
    left: 5px;
    max-width: 108px;
  }

  .btn--position2 {
    right: 5px;
    bottom: 5px;
  }
} ;
</style>
