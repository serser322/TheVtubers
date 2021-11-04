<template>
  <figure class="illustration">
    <img :src="'/assets/' + imgData.img" alt="" />
    <figcaption>{{ imgData.caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    imgData: {
      type: Object
    }
  }
};
</script>

<style scoped>
.illustration {
  align-self: center;
  justify-self: center;
  margin: 0;
}

.illustration img {
  max-width: 350px;
  margin: -30px 0 0 0;
}

.illustration figcaption {
  text-align: center;
  font-weight: 600;
  margin: 0;
}

/*個別設定*/
.padko .section-4 .illustration figcaption {
  margin-top: -15px;
}

@media (min-width: 576px) {
  .illustration img {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .illustration img {
    max-width: 500px;
    min-width: 500px;
    margin: 0;
  }
}
</style>
