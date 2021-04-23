<template>
  <div class="main">
    <div class="main__content">
      <pd-main />
    </div>
  </div>
</template>

<script>
import PdMain from '@/components/PdMain'

export default {
  name: 'Home',
  components: { PdMain },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.main {
  width: 90%;
  height: 30rem;
  margin: auto;
  display: flex;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  background-color: #2833466b;
}

.main__content {
  width: 80%;
  /* background-color: lightgoldenrodyellow; */
}
</style>
