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
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 0;
}

.main__back-text {
  z-index: 0;
  display: flex;
  padding: 6px;
  position: absolute;
  margin-top: 38px;
  width: 78%;
  cursor: auto;
  font-size: 15px;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  color: var(--background);
  border-radius: 2px;
}

.back {
  cursor: pointer;
}
.back:hover {
  color: var(--red);
}

.main__back-text {
  font-size: 15px;
  color: var(--background);
}

@media only screen and (max-width: 1035px) {
  .main__back-text {
    width: 75%;
  }
}
/* 
@media only screen and (max-width: 1030px) {
  .main__back-text {
    width: 70%;
  }
}

@media only screen and (max-width: 803px) {
  .main__back-text {
    margin-top: 50px;
    width: 87%;
  }
} */

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
