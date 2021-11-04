<template>
  <div class="otherSaying">
    <h4 class="title">經典名言</h4>
    <div class="line"></div>
    <article>
      <p v-for="(saying, index) in otherSaying" :key="index">
        {{ saying }}
      </p>
    </article>
    <div class="line"></div>
  </div>
  <base-figure :imgData="imageData"></base-figure>
</template>

<script>
import BaseFigure from './../ui/BaseFigure.vue';
export default {
  components: {
    BaseFigure
  },
  props: {
    otherSaying: {
      type: Array
    },
    imageData: {
      type: Object
    }
  }
};
</script>

<style scoped>
.title {
  position: relative;
  color: royalblue;
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 5px;
  padding: 0 0 0 10px;
  z-index: 0;
}

.line {
  height: 1px;
  width: 100%;
  background: rgb(70, 90, 245);
  position: relative;
  z-index: 0;
}

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
  margin-top: 10px;
  text-align: center;
  font-weight: 600;
}

.otherSaying {
  position: relative;
  align-self: center;
  justify-self: center;
}

.otherSaying .title::before {
  content: '';
  width: 110px;
  height: 70px;
  top: -20px;
  left: -10px;
  background-color: #fff94a91;
  border-radius: 15px;
  position: absolute;
  z-index: -1;
}

.otherSaying article {
  margin: 0.7em 0;
  position: relative;
  z-index: 0;
}

.otherSaying article > p {
  list-style: none;
  font-weight: 500;
  margin: 0.5em 0.5em;
}

@media (min-width: 576px) {
  .otherSaying {
    margin: 0 0 0 3em;
  }

  .otherSaying article {
    margin: 1.6em 0;
  }
  .illustration img {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .illustration img {
    max-width: 500px;
    margin: 0;
  }
}

@media (min-width: 992px) {
  .title {
    font-size: 30px;
    margin-bottom: 15px;
  }

  .otherSaying .title::before {
    left: -55px;
    width: 170px;
    height: 100px;
  }
}
</style>
