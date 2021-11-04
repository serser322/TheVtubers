<template>
  <div @click="toPageTop" class="page-up-circle">
    <i class="lni lni-chevron-up-circle"></i>
  </div>
</template>

<script>
export default {
  methods: {
    toPageTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.page-up-circle {
  font-size: 40px;
  position: fixed;
  bottom: 35px;
  right: 30px;
}

.page-up-circle:hover {
  cursor: pointer;
  color: royalblue;
}

.page-up-circle:active {
  color: coral;
}
</style>
