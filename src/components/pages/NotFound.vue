<template>
  <the-container>
    <base-section>
      <h2>
        氣噗噗！沒有這個網址，回到<router-link to="/vtuberList"
          ><i>主頁</i></router-link
        >
      </h2>
    </base-section>
    <img src="/assets/平平子軼事(無字)-crop1.png" alt="" />
  </the-container>
</template>

<script>
import TheContainer from './../layouts/TheContainer.vue';
import BaseSection from './../ui/BaseSection.vue';

export default {
  components: {
    TheContainer,
    BaseSection
  }
};
</script>

<style scoped>
.container {
  min-height: 77vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 60vw;
  max-width: 650px;
  margin: 20px 0;
}

@media (min-width: 575px) {
  .container {
    min-height: 73vh;
  }
}
</style>
