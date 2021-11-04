<template>
  <div class="basic-info">
    <h4 class="title">基本資料</h4>
    <div class="line"></div>
    <table>
      <tr v-for="(value, key) in basicInfo" :key="key">
        <th>{{ key }}</th>
        <td>{{ value }}</td>
      </tr>
    </table>

    <div class="social-media-icon">
      <a
        v-for="(icon, _, index) in socialMediaIcons"
        :key="index"
        :href="icon.link"
        :title="icon.title"
        target="_blank"
        rel="noreferrer noopener"
        :class="'lni' + ' ' + icon.class"
      ></a>
    </div>
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
    basicInfo: {
      type: Object
    },
    socialMediaIcons: {
      type: Object
    },
    imageData: {
      type: Object
    }
  }
};
</script>

<style scoped>
.basic-info {
  position: relative;
  align-self: center;
  margin: 2em 0;
}

.basic-info .title {
  text-align: right;
  padding: 0 10px 0 0;
}

.basic-info .title::before {
  content: '';
  background-color: #fff94a91;
  width: 110px;
  height: 70px;
  border-radius: 15px;
  top: -10px;
  right: -10px;
  position: absolute;
  z-index: -1;
}

.basic-info table {
  margin: 0.7em 0.5em;
}

table tr {
  height: 30px;
}

table tr > th {
  min-width: 5.5em;
  text-align-last: justify;
  padding: 0 1.5em 0 0;
  font-weight: 700;
}

table tr > td {
  color: rgb(61, 61, 61);
}

.social-media-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 0.7em;
}

.social-media-icon .lni {
  font-size: 25px;
  margin: 0 10px;
  text-decoration: none;
}

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

/* RWD */
@media (min-width: 576px) {
  /* .section-2 figure {
    grid-area: a;
  }

  .section-2 .basic-info {
    grid-area: b;
    margin: 0 2em;
  } */

  figure {
    grid-area: a;
  }

  .basic-info {
    grid-area: b;
    margin: 0 2em;
  }

  table {
    margin: 0.7em 0.5em;
  }

  table tr {
    max-height: 36px;
  }

  table tr td {
    padding: 3px 0;
  }

  .social-media-icon {
    margin-bottom: 1.6em;
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

  .basic-info .title::before {
    width: 170px;
    height: 100px;
    right: -55px;
  }
}
</style>
