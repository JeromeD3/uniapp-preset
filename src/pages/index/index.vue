<script setup lang="ts">
//
const state = ref(1)
const change = () => {
  state.value++
}
</script>

<template>
  <uni-card title="基础卡片" sub-title="副标题" extra="额外信息"
    thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
    <text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
    {{ state }}2
  </uni-card>
  <uni-card>
    <text>这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。</text>
  </uni-card>
  <div class="flex justify-center items-center">
    <button class="btn flex w-full" @click="change">({{ state }})</button>
  </div>

  <div class="flex text-40px">unocss</div>
</template>

<style lang="scss">
//
</style>
