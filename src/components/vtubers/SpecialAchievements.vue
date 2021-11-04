<template>
  <div class="achievements">
    <h4 class="title">特殊事蹟</h4>
    <div class="line"></div>
    <ul>
      <li v-for="(achievement, index) in achievements" :key="index">
        {{ achievement }}
      </li>
    </ul>
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
    achievements: {
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
  text-align: center;
  font-weight: 600;
  margin: 0;
}

.achievements {
  position: relative;
  align-self: center;
  justify-self: center;
}

.achievements .title::before {
  content: '';
  top: -10px;
  right: -10px;
  background-color: #fff94a91;
  width: 110px;
  height: 70px;
  border-radius: 15px;
  position: absolute;
  z-index: -1;
}

.achievements .title {
  text-align: end;
  padding: 0 10px 0 0;
}

.achievements ul {
  margin: 1.6em 0;
  padding-left: 0.5em;
}

.achievements ul > li {
  margin: 10px;
}

@media (min-width: 576px) {
  .achievements {
    grid-area: b;
  }

  figure {
    grid-area: a;
    padding: 0 1.5em 0 0;
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

  .achievements .title::before {
    right: -55px;
    width: 170px;
    height: 100px;
  }

  .achievements {
    padding: 0 15px 0 0;
  }
}
</style>
