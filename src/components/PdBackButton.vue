<template>
  <div>
    <div class="main__back">
      <a class="main__back-text" @click="toggleButton" href="">
        <i class="fas fa-arrow-left back"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleButton() {
      this.$emit('goBack')
    },
  },
}
</script>

<style scoped>
.main__back {
  width: 80%;
  margin: auto;
}

.main__back-text {
  z-index: 0;
  display: flex;
  padding: 6px;
  position: absolute;
  margin-top: 33px;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  color: var(--background);
  border-radius: 2px;
}

.main__back-text:hover {
  color: var(--red);
}

.main__back-text {
  font-size: 15px;
  color: var(--background);
}

@media only screen and (max-width: 1035px) {
  .main__back-text {
    margin-top: 36px;
    margin-left: -48px;
  }
}

@media only screen and (max-width: 980px) {
  .main__back-text {
    margin-top: 36px;
    margin-left: -40px;
  }
}

@media only screen and (max-width: 805px) {
  .main__back-text {
    margin-top: 38px;
    margin-left: -37px;
  }
}

@media only screen and (max-width: 800px) {
  .main__back-text {
    margin-top: 49px;
    margin-left: -37px;
  }
}

@media only screen and (max-width: 700px) {
  .main__back-text {
    margin-top: -167px;
    margin-left: -27px;
    color: white;
  }

  .main__back-text {
    font-size: 20px;
  }
}
</style>
