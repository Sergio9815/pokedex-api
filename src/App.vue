<template>
  <main id="app">
    <pd-header />
    <router-view />
  </main>
</template>

<script>
import PdHeader from '@/components/PdHeader'

export default {
  name: 'App',
  components: { PdHeader },
}
</script>

<style>
:root {
  --red: #cc405c;
  --white: #ffff;
  --main: #2b28466b;
  --yellow: #ffea96;
  --background: #19142a;
}

@font-face {
  font-family: 'Barlow Semi Condensed';
  src: local('Barlow Semi Condensed'),
    url('./assets/fonts/BarlowSemiCondensed-Regular.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Cantora One';
  src: local('Cantora One'),
    url('./assets/fonts/CantoraOne-Regular.ttf') format('truetype');
  font-weight: 400;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--background);
  color: var(--white);
}
</style>
