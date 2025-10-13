<script setup lang="ts">
import { onMounted } from 'vue'
import { getQuery } from '../../packages'

onMounted(() => {
  console.log(getQuery('http://example.com/?name=John Doe&age1=30+123&age=30+++'))
})
</script>

<template>
  <div class="page"></div>
</template>

<style scoped>
.page {
  height: 200vh;
}
button {
  margin: 200vh 0 50vh 0;
}
</style>
