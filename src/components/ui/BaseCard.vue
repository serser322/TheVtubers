<template>
  <a :href="href" class="card">
    <img :src="'/assets/' + img" alt="圖片無法顯示QQ" />
    <div class="card-body">
      <figcaption>{{ name }}</figcaption>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String
    },
    img: {
      type: String
    },
    name: {
      type: String
    }
  }
};
</script>

<style scoped>
.card {
  width: 300px;
  height: auto;
  border: 2px solid dodgerblue;
  border-radius: 15px;
  background-color: #ffedca;
  margin: 1em 1em;
  transition: transform 0.5s;
  cursor: pointer;
  display: grid;
  grid-template: 1fr 0.2fr / 1fr;
  overflow: hidden;
  text-decoration: none;
  box-sizing: border-box;
}

.card:hover {
  transform: scale(1.1);
  border: 3.5px solid coral;
}

.card:hover figcaption {
  color: coral;
}

.card img {
  background-color: white;
  width: 100%;
}

.card figcaption {
  border-radius: 0 0 10px 10px;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: 700;
  color: royalblue;
}
</style>
