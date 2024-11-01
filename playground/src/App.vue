<script setup lang="ts">
import { onMounted } from 'vue'
import { getQuery, removeQuery } from '../../packages'

onMounted(() => {
  console.log(getQuery('http://example.com/?name=John Doe&age1=30+123&age=30+++'))

  // console.log(
  //   removeQuery(
  //     'code',
  //     'https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234&name=%E9%A3%9E%E5%A4%A9%E6%95%A6%E7%85%8C&code=78944'
  //   )
  // )

  // console.log(
  //   removeQuery(
  //     'code',
  //     'https://vas-emp.wgbx51.cn/mall/microPage?id=4396&channelCode=WX202013231523&siteId=SITE_8494713615671234&name=飞天敦煌&code=78944'
  //   )
  // )
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
