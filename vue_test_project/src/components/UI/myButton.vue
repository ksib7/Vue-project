<template>
  <div>
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  font-size: 18px;
  color: white;
  background: none;
  border: none;
  background: teal;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.6;
}
</style>