<template>
  <main class="container">
    <slot></slot>
    <base-up-icon></base-up-icon>
  </main>
</template>

<script>
import BaseUpIcon from '../ui/BaseUpIcon.vue';
export default {
  components: {
    BaseUpIcon
  }
};
</script>

<style scoped>
/*Character page*/
.container {
  box-sizing: border-box;
  position: relative;
  padding: 0;
  margin: 0px;
  min-width: 100%;
  font-weight: 400;
  font-size: 0.9em;
}

/* RWD */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    font-size: 1em;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
    font-size: 1.1em;
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
}
</style>
