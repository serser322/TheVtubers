<template>
  <div class="famous-saying">
    <h2>{{ famousSaying }}</h2>
    <p>{{ famousSayingAnnotation }}</p>
  </div>
  <base-figure :imgData="imageData"></base-figure>
</template>

<script>
import BaseFigure from './../ui/BaseFigure.vue';
export default {
  components: { BaseFigure },
  props: {
    famousSaying: {
      type: String
    },
    famousSayingAnnotation: {
      type: String
    },
    imageData: {
      type: Object
    }
  }
};
</script>

<style scoped>
.famous-saying {
  align-self: center;
  display: grid;
  grid-template: 'a' 0.5fr 'b' 1fr/ 70vw;
}

.famous-saying h2 {
  font-weight: 500;
  font-size: 1.7em;
  font-style: italic;
  margin: 0 0 10px 0;
  align-self: center;
}

.famous-saying p {
  font-size: 1em;
  align-self: center;
  justify-self: end;
  margin: 0;
}

@media (min-width: 576px) {
  /* .illustration img {
    width: 100%;
  } */

  .famous-saying h2 {
    font-size: 2em;
    margin: 0 0 20px 0;
  }
  .famous-saying p {
    font-size: 1.2em;
  }
}

@media (min-width: 768px) {
  .famous-saying {
    align-self: center;
    display: grid;
    grid-template: 'a' 0.5fr 'b' 1fr/ 1fr;
  }

  .famous-saying h2 {
    font-size: 1.7em;
  }

  .famous-saying p {
    font-size: 1em;
  }

  /*個別設定 */
  .no15 .famous-saying,
  .obear .famous-saying {
    padding: 0 40px 0 0;
  }
}

@media (min-width: 992px) {
  .title {
    font-size: 30px;
    margin-bottom: 15px;
  }

  .famous-saying h2 {
    font-size: 2.2em;
  }

  .famous-saying p {
    font-size: 1.2em;
  }
}
</style>
