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
/* --- --- -- COLORS -- --- --- */
:root {
  --red: #d9113a;
  --brown: #8b6c47;
  --blue: #2e65b8;
  --blue-light: #2e65b841;
  --gray: #333333;
  --white: #ffff;
  --white-: rgb(206, 255, 255);
  --purple: #7250b4;
  --pink: #c54a8a;
  --green: #8db87c;
  --black: #000000;
  --main: #232b3a5e;
  --yellow: #ffe476;
  --orange: #ffb94f;
  --background: #101620;
}

html {
  scroll-behavior: smooth;
}

/* --- --- -- LOCAL FONTS -- --- --- */

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

@font-face {
  font-family: 'Josefin Sans';
  src: local('Josefin Sans'),
    url('./assets/fonts/JosefinSans-VariableFont_wght.ttf') format('truetype');
  font-weight: 400;
}

@font-face {
  font-family: 'Roboto';
  src: local('Roboto'),
    url('./assets/fonts/Roboto-Regular.ttf') format('truetype');
  font-weight: 400;
}

/* --- --- -- MAIN STYLES -- --- --- */

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--white);
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #919191;
}

::-webkit-scrollbar-track {
  background-color: var(--white);
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
}

::-webkit-scrollbar-thumb {
  background-color: var(--blue-light);
  /* background-image: -webkit-linear-gradient(90deg,rgba(255, 255, 255, .2) 25%,transparent 25%,transparent 50%,rgba(255, 255, 255, .2) 50%,rgba(255, 255, 255, .2) 75%,transparent 75%,transparent) */
}
</style>
