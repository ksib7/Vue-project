<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style scoped>
.dialog {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 1;
}

.dialog__content {
  max-width: 500px;
  width: 100%;
  min-height: 271px;
  background: white;
  margin: auto;
  padding: 40px;
  border-radius: 20px;
}
</style>
