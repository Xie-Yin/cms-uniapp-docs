## 配置跳转

配置跳转行为

```js
import { linkConfig } from '@xyfebaby/cms-uniapp/src/core/link'

// 这里的跳转只是cms组件的，无关逻辑不要写在这里
linkConfig({
  // 商品详情或商品列表
  goods(payload) {},
  // 商品查看更多
  goodsList(payload) {},
  // 全部分类
  allCategories(payload) {},
  // 店铺
  shop(payload) {},
  shopList(payload) {},
  // h5
  H5(payload) {},
  // 优惠券
  coupon(payload) {},
  show(payload) {},
  // 品牌
  brand(payload) {},
  // 商品分组
  CommodityClassification(payload) {},
  // 秒杀
  flashSale(payload) {},
  // 秒杀跳转商品详情
  flashSale_formSeckill(payload) {},
  // activity(payload) {},
  couponCenter(payload) {},
  // 专题页
  specialSubject(payload) {},
  // 跳转小程序
  applet(payload) {},
  // // 保险
  insurance(payload) {},
  // 搜索
  search(payload) {},
  // 服务介绍页面
  plannerServiceIntroPage(payload) {},
  // 规划师主页
  plannerIntroPage(payload) {},
  // 规划师案例页
  plannerCasePage(payload) {},
  // 蜜糖说（蜜糖说，小程序不需要跳转）
  communityHoney(payload) {},
  // 话题帖子（蜜糖说，小程序不需要跳转）
  communityPost(payload) {},
  // 话题标签（蜜糖说，小程序不需要跳转）
  communityLabel(payload) {},
})
```
