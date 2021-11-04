<template>
  <section :class="sectionBackgroundClass">
    <div :class="sectionClass">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: ['sectionBackgroundClass', 'sectionClass']
};
</script>

<style>
.section-1-background,
.section-3-background {
  background-color: rgba(255, 255, 255, 0.8);
  min-width: 100%;
  display: flex;
  justify-content: center;
}

.section-1,
.section-2,
.section-3,
.section-4 {
  position: relative;
  max-width: 1300px;
  padding: 0.5em;
  display: grid;
  grid-template: 'a' 0.5fr 'b' 1fr/ 1fr;
  min-height: 65vh;
}

.section-2-background,
.section-4-background {
  background-color: rgba(197, 238, 255, 0.65);
  min-width: 100%;
  display: flex;
  justify-content: center;
}

.section-2 {
  grid-template: 'a' 1fr 'b' 1fr/ 70vw;
}

.section-3 {
  grid-template: 'a' 1fr 'b' 1fr / 70vw;
}

.section-4 {
  grid-template: 1fr 1fr /70vw;
  margin-bottom: 2em;
}

@media (min-width: 576px) {
  .section-1 {
    padding: 2em;
  }

  .section-2 {
    grid-template: 'a b' 1fr / 1fr 1fr;
    padding: 2em;
  }

  .section-3 {
    grid-template: 'a' 1fr / 1fr 1fr;
    padding: 2em;
  }
  .section-4 {
    grid-template: 'a b' 1fr / 1fr 1fr;
    padding: 2em 3em;
  }
}

@media (min-width: 768px) {
  .section-1 {
    padding: 2em;
    grid-template: 'a b' 1fr/ 1fr 1fr;
  }
}
</style>
