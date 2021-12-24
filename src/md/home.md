## 快速开始

`cms-uniapp` 是一个 uni-app 生态下的业务组件库

### 安装

```bash
yarn add @xyfebaby/cms-uniapp
```

### 引入样式

```js
import '@xyfebaby/cms-uniapp/src/styles/index.less'
```

### 使用

_由于 uni-app 的限制，无法引入打包后的单文件组件，只能直接导入`.vue` 文件_

```html
<script>
import GoodsCard from '@xyfebaby/cms-uniapp/src/components/GoodsCard'

export default {
  components: {
    GoodsCard,
  },
  data() {
    return {
      config: {
        icon: '',
        name: 'RTX3080显卡 超白金 12G',
        tags: [
          { name: '百亿补贴' },
          { name: '满200减30' },
        ],
        type: 1,
        currentPrice: 7299,
        originalPrice: 12599,
        shopName: '老黄DIY',
        salesVolume: 123657,
      }
    }
  }
}
</script>

<template>
  <GoodsCard config="config" >
</template>
```