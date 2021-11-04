<template>
  <main class="card-container">
    <p v-if="noSearchResult">查無結果</p>
    <base-card
      v-for="vtuber in filterList"
      :key="vtuber.id"
      :name="vtuber.name"
      :href="vtuber.href"
      :img="vtuber.img"
    ></base-card>
  </main>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue';

export default {
  components: { BaseCard },
  inject: ['vtubers', 'userInputObj'],
  // props: {
  //   userInput: {
  //     type: String
  //   }
  // },
  data() {
    return {
      noSearchResult: false
    };
  },
  computed: {
    filterList() {
      if (this.userInputObj.userInput.length === 0) {
        this.showNoSearchResult(false);
        return this.vtubers;
      } else {
        const filterVtubersList = this.vtubers.filter(vtuber =>
          vtuber.name.includes(this.userInputObj.userInput)
        );

        if (filterVtubersList.length === 0) {
          this.showNoSearchResult(true);
          return 0;
        } else {
          this.showNoSearchResult(false);
          return filterVtubersList;
        }
      }
    }
  },
  methods: {
    showNoSearchResult(boolean) {
      this.noSearchResult = boolean;
    }
  }
};
</script>

<style scoped>
.card-container {
  position: relative;
  min-height: 100%;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  margin: 20px 0;
}

@media (min-width: 992px) {
  .card-container {
    margin-bottom: 60px;
  }
}
</style>
