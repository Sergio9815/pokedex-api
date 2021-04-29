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
  --red: #cc4040;
  --brown: #d19b5d;
  --blue: #2bd1ff;
  --grey: #9caeb3;
  --white: #ffff;
  --purple: #b691ff;
  --pink: #fe91ca;
  --green: #ade498;
  --black: #000000;
  --main: #2b28466b;
  --yellow: #ffe476;
  --orange: #ffb94f;
  --background: #19142a;
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
</style>
