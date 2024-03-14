<template name="skeleton">
  <view class="sk-container">
    <scroll-view :scroll-y="true" class="viewport viewport" :enable-back-to-top="true">
      <view class="goods goods">
        <view class="preview preview">
          <swiper :circular="true" :current="0" :autoplay="false">
            <swiper-item
              style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
              <image mode="aspectFill" class="sk-image"></image>
            </swiper-item>
          </swiper>
          <view class="indicator indicator">
            <text class="current sk-transparent sk-opacity">1</text>
            <text class="split sk-transparent sk-opacity">/</text>
            <text class="total sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta meta">
          <view class="price price">
            <text class="symbol sk-transparent sk-opacity">¥</text>
            <text class="number sk-transparent sk-text-14-2857-63 sk-text">599.00</text>
          </view>
          <view class="name ellipsis sk-transparent sk-text-14-2857-735 sk-text">跟灯按弦超好玩碳纤维智能尤克里里</view>
          <view class="desc sk-transparent sk-text-0-0000-97 sk-text">指板亮灯，指引按弦。可视化学习，更高效！还有更多游戏闯关，超有乐趣，不知不觉学会弹琴。app
          </view>
        </view>
        <view class="action action">
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-795 sk-text">选择</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-888 sk-text"> 请选择商品规格 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-208 sk-text">送至</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-8 sk-text"> 请选择收获地址 </text>
          </view>
          <view class="item arrow sk-pseudo sk-pseudo-circle">
            <text class="label sk-transparent sk-text-14-2857-274 sk-text">服务</text>
            <text class="text ellipsis sk-transparent sk-text-14-2857-369 sk-text"> 无忧退 快速退款 免费包邮 </text>
          </view>
        </view>
      </view>
      <view class="detail detail panel panel">
        <view class="title title">
          <text class="sk-transparent sk-text-0-0000-718 sk-text">详情</text>
        </view>
        <view class="content content">
          <view class="properties properties">
            <view class="item item">
              <text class="label sk-transparent sk-text-25-0000-865 sk-text">适用年龄</text>
              <text class="value sk-transparent sk-text-25-0000-118 sk-text">12岁以上</text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar toolbar" style="padding-bottom:34px">
      <view class="icons icons">
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle">
          <text class="icon-heart sk-pseudo sk-pseudo-circle"></text>收藏</button>
        <button class="icons-button sk-transparent sk-button sk-pseudo sk-pseudo-circle" open-type="contact">
          <text class="icon-handset sk-pseudo sk-pseudo-circle"></text>客服 </button>
        <navigator class="icons-button sk-transparent" open-type="switchTab">
          <text class="icon-cart sk-pseudo sk-pseudo-circle"></text>购物车
        </navigator>
      </view>
      <view class="buttons buttons">
        <view class="addcart sk-transparent sk-text-31-9444-197 sk-text" style="background-position-x: 50%;"> 加入购物车
        </view>
        <view class="buynow sk-transparent sk-text-31-9444-124 sk-text" style="background-position-x: 50%;"> 立即购买 </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.sk-transparent {
  color: transparent !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-63 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 78.4000rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-735 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-0-0000-97 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 24.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-795 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-888 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-208 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-8 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-274 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-369 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-0-0000-718 {
  background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
  background-size: 100% 28.0000rpx;
  position: relative !important;
}

.sk-text-25-0000-865 {
  background-image: linear-gradient(transparent 25.0000%, #EEEEEE 0%, #EEEEEE 75.0000%, transparent 0%) !important;
  background-size: 100% 52.0000rpx;
  position: relative !important;
}

.sk-text-25-0000-118 {
  background-image: linear-gradient(transparent 25.0000%, #EEEEEE 0%, #EEEEEE 75.0000%, transparent 0%) !important;
  background-size: 100% 52.0000rpx;
  position: relative !important;
}

.sk-text-31-9444-197 {
  background-image: linear-gradient(transparent 31.9444%, #EEEEEE 0%, #EEEEEE 68.0556%, transparent 0%) !important;
  background-size: 100% 72.0000rpx;
  position: relative !important;
}

.sk-text-31-9444-124 {
  background-image: linear-gradient(transparent 31.9444%, #EEEEEE 0%, #EEEEEE 68.0556%, transparent 0%) !important;
  background-size: 100% 72.0000rpx;
  position: relative !important;
}

.sk-button {
  color: #EFEFEF !important;
  background: #EFEFEF !important;
  border: none !important;
  box-shadow: none !important;
}

.sk-image {
  background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #EFEFEF !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
