import { PageParams, PageResult, GoodsItem } from '@/types/global';
import { BannerItem, CategoryItem, HotItem } from '@/types/home';
import { http } from '@/utils/http'

// GuessItem 和 GoodsItem 类型相同
export type GuessItem = GoodsItem

/**
 * 首页-广告区域-小程序
 * @param distributionSite 活动 banner 位置，1 代表首页，2 代表商品分类页，默认为 1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-前台分类-小程序
 */
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

/**
 * 猜你喜欢-小程序
 */
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
