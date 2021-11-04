<template>
  <the-container>
    <div class="no15">
      <base-section
        sectionBackgroundClass="section-1-background"
        sectionClass="section-1"
      >
        <famous-saying
          :famousSaying="no15Data.famousSaying"
          :famousSayingAnnotation="no15Data.famousSayingAnnotation"
          :imageData="no15Data.images.section1"
        ></famous-saying>
      </base-section>

      <base-section
        sectionBackgroundClass="section-2-background"
        sectionClass="section-2"
      >
        <basic-info
          :basicInfo="no15Data.basicInfo"
          :socialMediaIcons="no15Data.socialMediaIcons"
          :imageData="no15Data.images.section2"
        ></basic-info>
      </base-section>

      <base-section
        sectionBackgroundClass="section-3-background"
        sectionClass="section-3"
      >
        <other-saying
          :otherSaying="no15Data.otherSaying"
          :imageData="no15Data.images.section3"
        ></other-saying>
      </base-section>

      <base-section
        sectionBackgroundClass="section-4-background"
        sectionClass="section-4"
      >
        <special-achievements
          :achievements="no15Data.achievements"
          :imageData="no15Data.images.section4"
        ></special-achievements>
      </base-section>
    </div>
  </the-container>
</template>

<script>
import TheContainer from '../layouts/TheContainer.vue';
import BaseSection from '../ui/BaseSection.vue';
import FamousSaying from '../vtubers/FamousSaying.vue';
import BasicInfo from '../vtubers/BasicInfo.vue';
import OtherSaying from '../vtubers/OtherSaying.vue';
import SpecialAchievements from '../vtubers/SpecialAchievements.vue';

export default {
  components: {
    TheContainer,
    BaseSection,
    FamousSaying,
    BasicInfo,
    OtherSaying,
    SpecialAchievements
  },
  inject: ['no15Data']
};
</script>

<style scoped>
.no15-page .famous-saying {
  padding: 0 20px 0 0;
  color: red;
}
</style>
