<template>
  <div class="body">
    <my-button class="button" @click="$router.push('/')">Все посты</my-button>
    <h1 class="h1">
      Страница поста с ID = {{ $route.params.id }}, который должен быть загружен
      с backend части.
    </h1>
  </div>
</template>

<script>
import MyButton from "../components/UI/myButton.vue";
export default {
  components: {
    MyButton,
  },
};
</script>

<style lang="scss" scoped>
.body {
  padding: 0 10px;
}

.h1 {
  margin-top: 20px;
}
</style>

