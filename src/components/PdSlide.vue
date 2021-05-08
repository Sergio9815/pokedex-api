<template>
  <section class="socialbar">
    <div class="socialbar__container">
      <button class="socialbar__container-btn" @click="hideMenu">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div class="socialbar__links">
      <a href="https://github.com/Sergio9815/pokedex-api"
        ><i class="fab fa-github"></i
      ></a>
      <a href="https://www.instagram.com/sagb_24/"
        ><i class="fab fa-instagram"></i
      ></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SocialBar',
  data() {
    return {
      links: [],
    }
  },
  methods: {
    hideMenu() {
      this.$emit('hide')
    },
  },
}
</script>

<style scoped>
.socialbar {
  width: 3em;
  height: 23vh;
  left: 3%;
  top: 9px;
  border-radius: 20px;
  position: absolute;
  background: var(--white);
  color: white;
  border: 2px solid var(--background);
}

.socialbar__container {
  margin-top: 27px;
  margin-left: -1px;
  transform: rotate(89deg);
}

.socialbar__container-btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.fas,
.fab {
  color: var(--background);
  font-size: 20px;
}

.fas:hover {
  transition: 1s;
  transform: rotate(90deg);
}

.fab {
  font-size: 30px;
}

.socialbar__links {
  display: flex;
  height: 78px;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}

.socialbar__links a:hover {
  transition: 0.1s;
  border-bottom: 2px solid var(--background);
}
</style>
