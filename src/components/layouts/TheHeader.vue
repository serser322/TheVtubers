<template>
  <!-- Header -->
  <header>
    <!-- jumbotron -->
    <div class="top-jumbotron"></div>
    <!-- Navbar -->
    <nav class="nav-bar">
      <div class="nav-brand">
        <router-link to="/vtuberList">春魚箱 Vtuber</router-link>
      </div>

      <div class="search">
        <form @submit.prevent="saveSearch">
          <input
            class="search-bar"
            type="search"
            placeholder="輸入欲搜尋之Vtuber名稱..."
            aria-label="Search"
            ref="currentInput"
          />
          <button class="search-btn" type="submit">
            <i class="lni lni-search-alt"></i>
          </button>
        </form>
        <div>{{ searchInput }}</div>
      </div>

      <div class="nav-tab">
        <router-link class="nav-tab-item" to="/padko">平平子</router-link>
        <router-link class="nav-tab-item" to="/no15">15號</router-link>
        <router-link class="nav-tab-item" to="/lutralutra"
          >露恰露恰</router-link
        >
        <router-link class="nav-tab-item" to="/obear">歐貝爾</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchInput: ''
    };
  },
  methods: {
    saveSearch() {
      this.$emit('save-search', this.$refs.currentInput.value);
      this.$router.push('/vtuberList');
    }
  }
};
</script>

<style scoped>
.top-jumbotron {
  position: relative;
  width: 100%;
  height: 60px;
  background-image: url('../../assets/cover.jpg');
  background-size: 300px;
  background-position-y: 10%;
  z-index: 1;
  margin-bottom: 0;
}

.nav-bar {
  font-weight: 700;
  height: 10%;
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
  z-index: 0;
  display: grid;
  grid-template: 'a b' 1fr 'c c' 1.1fr / 1fr 1fr;
}

.nav-bar > div {
  justify-self: center;
  align-self: center;
  margin-top: 20px;
}

.nav-brand {
  font-size: 1.3em;
  margin: 0 5px;
  text-align: center;
  grid-area: a;
}

.nav-brand a {
  text-decoration: none;
  color: royalblue;
}

.search {
  grid-area: b;
}

.search form {
  display: flex;
  flex-flow: nowrap row;
}

.search-bar {
  height: 35px;
  min-width: 130px;
  width: 20vw;
  max-width: 300px;
  border: 2px solid rgb(163, 163, 163);
  border-radius: 5px;
  margin: 0 5px;
}

.search-bar:hover,
:focus {
  border: 3px solid rgba(255, 177, 33, 0.6);
  outline: 0;
}

.search-btn {
  height: 35px;
  min-width: 35px;
  width: 5vw;
  max-width: 70px;
  border: 2px solid rgb(163, 163, 163);
  border-radius: 5px;
  background-color: rgba(0, 255, 255, 0);
  color: rgb(146, 146, 146);
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.search-btn .lni {
  font-weight: 800;
  font-size: 130%;
}

.search-btn:hover {
  color: rgba(255, 177, 33, 0.6);
  border: 2px solid rgba(255, 177, 33, 0.6);
}
.search-btn:active {
  color: rgba(255, 221, 160, 0.5);
  border: 2px solid rgba(255, 221, 160, 0.5);
}

div.nav-tab {
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: flex-end;
  grid-area: c;
  justify-self: center;
  width: 80%;
  position: absolute;
  bottom: 0;
}

.nav-tab .nav-tab-item {
  box-sizing: border-box;
  width: 30%;
  height: 40px;
  border: 2px solid dodgerblue;
  border-radius: 5px 5px 0 0;
  background-color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  color: dodgerblue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -2px;
  position: relative;
  z-index: 0;
}

.nav-tab-item:hover {
  border: 2.5px solid coral;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  text-decoration: none;
  color: coral;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

a.nav-tab-item:active {
  color: yellow;
  border: 3.5px solid yellow;
  border-bottom: 0;
}

.nav-tab-item.active {
  box-sizing: border-box;
  /* width: 125px; */
  height: 45px;
  border: 2.5px solid royalblue;
  border-bottom: 2px solid rgba(255, 145, 0, 0);
  text-decoration: none;
  color: royalblue;
  cursor: pointer;
  z-index: 1;
}

@media (min-width: 576px) {
  .top-jumbotron {
    height: 100px;
    background-size: 400px;
  }

  .nav-bar {
    grid-template: '. a b .' 1fr '. c c .' 1.1fr /1fr 2fr 2fr 1fr;
  }

  div.nav-brand {
    justify-self: start;
  }

  div.nav-tab {
    font-size: 20px;
  }

  div.search {
    justify-self: end;
  }

  div.nav-tab {
    width: 100%;
  }
}

@media (min-width: 768px) {
  div.nav-tab {
    font-size: 20px;
    width: 100%;
  }
}

@media (min-width: 992px) {
  .nav-bar {
    grid-template: '. a b .' 1fr '. a c .' 1.1fr /0.2fr 0.8fr 0.8fr 0.2fr;
  }

  div.nav-brand {
    font-size: 1.7em;
    margin: 0;
  }

  div.nav-tab {
    justify-self: end;
    max-width: 480px;
  }
}
@media (min-width: 1200px) {
  .nav-bar {
    grid-template: '. a b .' 1fr '. a c .' 1.1fr /10vw 1fr 1fr 10vw;
  }
}

@media (min-width: 1400px) {
  .nav-bar {
    grid-template: '. a b .' 1fr '. a c .' 1.1fr /13vw 1fr 1fr 13vw;
  }
}
</style>
