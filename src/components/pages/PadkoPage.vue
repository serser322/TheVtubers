<template>
  <the-container>
    <div class="padko">
      <base-section
        sectionBackgroundClass="section-1-background"
        sectionClass="section-1"
      >
        <famous-saying
          :famousSaying="padkoData.famousSaying"
          :famousSayingAnnotation="padkoData.famousSayingAnnotation"
          :imageData="padkoData.images.section1"
        ></famous-saying>
      </base-section>

      <base-section
        sectionBackgroundClass="section-2-background"
        sectionClass="section-2"
      >
        <basic-info
          :basicInfo="padkoData.basicInfo"
          :socialMediaIcons="padkoData.socialMediaIcons"
          :imageData="padkoData.images.section2"
        ></basic-info>
      </base-section>

      <base-section
        sectionBackgroundClass="section-3-background"
        sectionClass="section-3"
      >
        <other-saying
          :otherSaying="padkoData.otherSaying"
          :imageData="padkoData.images.section3"
        ></other-saying>
      </base-section>

      <base-section
        sectionBackgroundClass="section-4-background"
        sectionClass="section-4"
      >
        <special-achievements
          :achievements="padkoData.achievements"
          :imageData="padkoData.images.section4"
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
  inject: ['padkoData']
};
</script>

<style scoped></style>
