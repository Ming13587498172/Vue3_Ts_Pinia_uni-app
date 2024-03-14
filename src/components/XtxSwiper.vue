<script setup lang="ts">
import { BannerItem } from '@/types/home';
import { ref } from 'vue';

// 高亮的下标
const activeIndex = ref(0)

// 当 swiper 下标发生变化时
// UniHelper 为 uniapp 提供事件类型
const onChage: UniHelper.SwiperOnChange = (ev) => {
  // !非空断言，主观上排除掉空值情况
  activeIndex.value = ev.detail!.current
}

// defineProps 接收数据
defineProps<{
  list: BannerItem[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" @change="onChage">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text v-for="(item, index) in list" :key="item.id" class="dot" :class="{ active: index === activeIndex }"></text>
    </view>
  </view>
</template>

<style lang="scss">
:host {
  display: block;
  height: 280rpx;
}

@import '@/components/style/XtxSwiper.scss';
</style>
