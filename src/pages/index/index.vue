<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'
import PageSkeleton from '@/pages/index/components/PageSkeleton.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { XtxGuessInstance } from '@/types/component'

// 加载中的标记
const isLoading = ref(false)

onLoad(async () => {
  // getHomeBannerData()
  // getHomeCategoryData()
  // getHomePanelData()
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomePanelData()])
  isLoading.value = false
})

// 获取轮播图的数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  try {
    const { result } = await getHomeBannerAPI()
    bannerList.value = result
  } catch (err) {

  }
}

// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  try {
    const { result } = await getHomeCategoryAPI()
    categoryList.value = result
  } catch (err) {

  }
}

// 获取热门推荐数据
const hotPanelList = ref<HotItem[]>([])
const getHomePanelData = async () => {
  try {
    const { result } = await getHomeHotAPI()
    hotPanelList.value = result
  } catch (err) {

  }
}

// 获取猜你喜欢组件的实例类型
const guessRef = ref<XtxGuessInstance>()
// 滚动触底事件
const onScrolltolower = () => {
  // 调用猜你喜欢组件内的方法
  guessRef.value?.getMore()

}

// 当前下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启下拉动画
  isTriggered.value = true
  // 重置猜你喜欢组件的数据
  guessRef.value?.resetData()
  // 刷新时获取初始数据
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomePanelData(), guessRef.value?.resetData()])
  // 关闭下拉动画
  isTriggered.value = false
}
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar></CustomNavbar>
  <scroll-view refresher-enabled @refresherrefresh="onRefresherrefresh" :refresher-triggered="isTriggered" scroll-y
    @scrolltolower="onScrolltolower">
    <!-- 骨架屏 -->
    <PageSkeleton v-if="isLoading"></PageSkeleton>
    <!-- 真实页面 -->
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <!-- 分类面板 -->
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <!-- 热门推荐 -->
      <HotPanel :list="hotPanelList"></HotPanel>
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef"></XtxGuess>
    </template>

  </scroll-view>
</template>

<style lang="scss">
/* #ifdef APP-PLUS */
#app,
/* #endif */
page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
}

.scroll-view {
  flex: 1;
}
</style>
