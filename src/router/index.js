import VueRouter from 'vue-router'

export const mdRoutes = [
  {
    path: '',
    name: 'home',
    meta: {
      title: '安装',
    },
    component: () => import('@/md/home.md'),
  },
  {
    path: 'config',
    name: 'config',
    meta: {
      title: '配置',
    },
    component: () => import('@/md/config.md'),
  },
  {
    path: 'common-title',
    name: 'common-title',
    meta: {
      title: '标题栏',
    },
    component: () => import('@/md/common-title.md'),
  },
  {
    path: 'common-image',
    name: 'common-image',
    meta: {
      title: '图片',
    },
    component: () => import('@/md/common-image.md'),
  },
  {
    path: 'goods-card',
    name: 'goods-card',
    meta: {
      title: '商品卡片',
    },
    component: () => import('@/md/goods-card.md'),
  },
  {
    path: 'shop-card',
    name: 'shop-card',
    meta: {
      title: '店铺卡片',
    },
    component: () => import('@/md/shop-card.md'),
  },
  {
    path: 'progress-bar',
    name: 'progress-bar',
    meta: {
      title: '进度条',
    },
    component: () => import('@/md/progress-bar.md'),
  },
  {
    path: 'banner',
    name: 'banner',
    meta: {
      title: '轮播图(CMS)',
    },
    component: () => import('@/md/banner.md'),
  },
  {
    path: 'blank-space',
    name: 'blank-space',
    meta: {
      title: '空白占位(CMS)',
    },
    component: () => import('@/md/blank-space.md'),
  },
]

export const demoRoutes = [
  {
    path: 'common-title',
    name: 'common-title',
    component: () => import('@/demos/common-title.vue'),
  },
  {
    path: 'common-image',
    name: 'common-image',
    component: () => import('@/demos/common-image.vue'),
  },
  {
    path: 'goods-card',
    name: 'goods-card',
    component: () => import('@/demos/goods-card.vue'),
  },
  {
    path: 'shop-card',
    name: 'shop-card',
    component: () => import('@/demos/shop-card.vue'),
  },
  {
    path: '*',
    name: 'empty',
    component: () => import('@/demos/empty.vue'),
  }
]

export const routes = [
  {
    path: '/',
    component: () => import('../components/Layout.vue'),
    children: mdRoutes,
  },
  {
    path: '/demo',
    component: () => import('../components/SimulatorLayout.vue'),
    children: demoRoutes,
  },
]

const router = new VueRouter({
  routes,
})

export default router
