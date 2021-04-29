<template>
  <div>
    <div class="main__back">
      <a class="main__back-text" @click="toggleButton" href="">
        <i class="fas fa-arrow-left"></i> Volver
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
  display: flex;
  width: 100px;
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
  color: var(--pink);
}

.main__back-text i {
  font-size: 14px;
}

@media only screen and (max-width: 1035px) {
  .main__back-text {
    margin-top: 0px;
  }
}
</style>
