<template>
  <the-container>
    <div class="obear">
      <base-section
        sectionBackgroundClass="section-1-background"
        sectionClass="section-1"
      >
        <famous-saying
          :famousSaying="obearData.famousSaying"
          :famousSayingAnnotation="obearData.famousSayingAnnotation"
          :imageData="obearData.images.section1"
        ></famous-saying>
      </base-section>

      <base-section
        sectionBackgroundClass="section-2-background"
        sectionClass="section-2"
      >
        <basic-info
          :basicInfo="obearData.basicInfo"
          :socialMediaIcons="obearData.socialMediaIcons"
          :imageData="obearData.images.section2"
        ></basic-info>
      </base-section>

      <base-section
        sectionBackgroundClass="section-3-background"
        sectionClass="section-3"
      >
        <other-saying
          :otherSaying="obearData.otherSaying"
          :imageData="obearData.images.section3"
        ></other-saying>
      </base-section>

      <base-section
        sectionBackgroundClass="section-4-background"
        sectionClass="section-4"
      >
        <special-achievements
          :achievements="obearData.achievements"
          :imageData="obearData.images.section4"
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
  inject: ['obearData']
};
</script>

<style scoped></style>
