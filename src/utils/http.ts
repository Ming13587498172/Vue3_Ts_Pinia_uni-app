import { useMemberStore } from './../stores/modules/member'
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 请求超时，默认60s
    options.timeout = 10000
    // 添加小程序请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 添加token请求头标识
    const memberStor = useMemberStore()
    const token = memberStor.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 文件上传
uni.addInterceptor('uploadFile', httpInterceptor)

// 添加响应拦截器
interface Data<T> {
  code: string
  msg: string
  result: T
}
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 返回后端给的数据
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 清理用户信息，跳转登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          // 其它错误 -> 根据后端错误信息轻提示
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求错误',
            icon: 'none',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          title: '网络错误，换个网络试试',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}
