<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search search">
        <view class="input input">
          <text class="icon-search sk-transparent sk-text-14-2857-981 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
        </view>
      </view>
      <view class="categories categories">
        <scroll-view :scroll-y="true" class="primary primary">
          <view class="item active sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-700 sk-text">居家</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-316 sk-text">美食</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-593 sk-text">服饰</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-727 sk-text">母婴</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-29 sk-text">个护</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-357 sk-text">严选</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-122 sk-text">数码</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-766 sk-text">运动</text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-376 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view :scroll-y="true" class="secondary secondary">
          <view is="components/XtxSwiper" class="banner banner">
            <view class="carousel XtxSwiper--carousel">
              <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                <swiper-item
                  style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
                <swiper-item
                  style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-26-6667-327 sk-text">居家生活用品</text>
              <navigator class="more sk-transparent sk-text-30-0000-981 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none">全部</navigator>
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-67 sk-text">法国年份雅文邑700毫升</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-663 sk-text">1480.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-632 sk-text">梅乃宿梅酒720毫升</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-874 sk-text">168.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-87 sk-text">多米尼加陈年朗姆酒700毫升</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-727 sk-text">238.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-723 sk-text">川味牛肉辣椒酱190克</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-821 sk-text">38.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-582 sk-text">全新升级，四川酸辣粉195克*6杯</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-14 sk-text">69.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-45 sk-text">极光限定 珠光蓝珐琅锅</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-314 sk-text">199.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-301 sk-text">钻石陶瓷涂层多用锅18cm 小奶锅</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-692 sk-text">149.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-611 sk-text">智利老牌名庄，梅洛干红750毫升</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-901 sk-text">98.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-813 sk-text">紫米410克</view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-656 sk-text">19.00</text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-981 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 39.2000rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-700 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-316 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-593 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-727 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-29 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-357 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-122 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-766 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-376 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-26-6667-327 {
  background-image: linear-gradient(transparent 26.6667%, #EEEEEE 0%, #EEEEEE 73.3333%, transparent 0%) !important;
  background-size: 100% 60.0000rpx;
  position: relative !important;
}

.sk-text-30-0000-981 {
  background-image: linear-gradient(transparent 30.0000%, #EEEEEE 0%, #EEEEEE 70.0000%, transparent 0%) !important;
  background-size: 100% 60.0000rpx;
  position: relative !important;
}

.sk-text-14-2857-67 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-663 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-632 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-874 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-87 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-723 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-821 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-582 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-14 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-45 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-314 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-301 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-692 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-611 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-901 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-813 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 30.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-656 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
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
