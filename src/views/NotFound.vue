<template>
  <section class="main">
    <div class="header-decoration"></div>
    <pd-back-button v-if="!isLoading" v-on:goBack="goToHome" />

    <article class="main__error">
      <h5 class="main__error-title">POKÉMON NOT FOUND!</h5>
      <pd-default-icon class="main__error-image" />
    </article>
  </section>
</template>

<script>
import PdBackButton from '@/components/PdBackButton'
import PdDefaultIcon from '@/components/PdDefaultIcon'

export default {
  name: 'NotFound',
  components: { PdBackButton, PdDefaultIcon },
}
</script>
<style scoped>
.main__error {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  font-family: 'Josefin Sans';
  margin: auto;
  gap: 100px;
}

.main__error-title {
  font-size: 2rem;
}

@media only screen and (max-width: 1035px) {
  .main__error {
    flex-direction: column;
    gap: 0;
  }

  .main__error-title {
    text-align: center;
  }

  .main__error-image {
    width: 80%;
  }
}
</style>
