<script setup lang="ts">
import { getMemberProfileAPI, putMemberProfileAPI } from '@/services/login';
import { useMemberStore } from '@/stores';
import { Gender, ProfileDetail } from '@/types/login';
import { onLoad } from '@dcloudio/uni-app';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const { profile } = storeToRefs(useMemberStore())

onLoad(() => {
  getMemberProfileData()
})

// 获取个人信息，修改个人信息需要提供初始值
const userInfo = ref({} as ProfileDetail)
const getMemberProfileData = async () => {
  try {
    const { result } = await getMemberProfileAPI()
    userInfo.value = result
  } catch (err) {

  }
}

// 修改头像
const onAvatarChange = async () => {
  // #ifdef MP-WEIXIN
  // 调用拍照/选择图片
  uni.chooseMedia({
    count: 1, // 选择的文件个数, 最多可支持9个文件
    mediaType: ['image'],  // 文件类型
    success: (res) => {
      // 本地路径
      const { tempFilePath } = res.tempFiles[0]
      uploadFile(tempFilePath)
    },
  })
  // #endif

  // #ifdef H5 || APP-PLUS
  uni.chooseImage({
    count: 1, // 选择的文件个数, 最多可支持9个文件
    mediaType: ['image'],  // 文件类型
    success: (res) => {
      // 本地路径
      const tempFilePath = res.tempFilePaths[0]
      uploadFile(tempFilePath)
    },
  })
  // #endif
}
// 文件上传 封装
const uploadFile = (tempFilePath: string) => {
  // 文件上传
  uni.uploadFile({
    url: '/member/profile/avatar',
    name: 'file', // 后端数据字段名
    filePath: tempFilePath, // 新头像
    success: (res) => {
      // 判断状态码是否上传成功
      if (res.statusCode === 200) {
        // 提取头像
        const { avatar } = JSON.parse(res.data).result
        // 当前页面更新头像
        userInfo.value!.avatar = avatar
        // 更新 Store 头像
        profile!.value!.avatar = avatar
        uni.showToast({ icon: 'success', title: '更新成功' })
      } else {
        uni.showToast({ icon: 'error', title: '出现错误' })
      }
    },
  })
}
// 修改性别
const onGenderChange: UniHelper.RadioGroupOnChange = (e) => {
  userInfo.value!.gender = e.detail.value as Gender
}
// 修改生日
const onBirthdayChange: UniHelper.DatePickerOnChange = (e) => {
  userInfo.value!.birthday = e.detail.value
}
// 修改城市
let fullLocationCode: [string, string, string] = ['', '', '']
const onFullLocationChange: UniHelper.RegionPickerOnChange = (e) => {
  // 修改前端界面
  userInfo.value!.fullLocation = e.detail.value.join(' ')
  // 提交后端更新
  fullLocationCode = e.detail.code!
}

// 点击保存提交表单
const onSubmit = async () => {
  try {
    const { nickname, gender, birthday, profession } = userInfo.value
    const { result } = await putMemberProfileAPI({
      nickname,
      gender,
      birthday,
      profession,
      provinceCode: fullLocationCode[0],
      cityCode: fullLocationCode[1],
      countyCode: fullLocationCode[2]
    })
    // 更新Store昵称
    profile!.value!.nickname = result.nickname
    uni.showToast({ icon: 'success', title: '保存成功' })
    setTimeout(() => {
      uni.navigateBack()
    }, 500)
  } catch (err) {

  }
}
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view class="avatar-content" @tap="onAvatarChange">
        <image class="image" :src="userInfo?.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ userInfo?.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="userInfo!.nickname" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="userInfo?.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="userInfo?.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker class="picker" mode="date" start="1900-01-01" :end="new Date()" :value="userInfo.birthday"
            @change="onBirthdayChange">
            <view v-if="userInfo.birthday">{{ userInfo.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker class="picker" mode="region" :value="userInfo?.fullLocation?.split(' ')" @change="onFullLocationChange">
            <view v-if="userInfo?.fullLocation">{{ userInfo?.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" v-model="userInfo!.profession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onSubmit">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
