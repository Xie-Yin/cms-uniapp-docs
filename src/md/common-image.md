## CommonImage

> 在 h5 中部分特性(`mode`，`lazyLoad`)不支持

### 用法

```html
<script>
  import { CommonImage } from '@xyfebaby/cms-uniapp/src/index'

  export default {
    components: {
      CommonImage,
    },
    data() {
      return {
        form: {
          content: '',
        },
      }
    },
    methods: {
      onClickMore() {
        console.log('点击更多了')
      },
    },
  }
</script>

<template>
  <div>
    <CommonImage src="d" height="200px" width="140px" />
    <br />
    <CommonImage src="d" height="200px" width="240px" />
  </div>
</template>
```

### Props

| prop               | 描述                         | 类型      | 默认值         | 必须 |
| ------------------ | ---------------------------- | --------- | -------------- | ---- |
| src                | 图片地址                     | `string`  | -              | 是   |
| width              | 宽度                         | `string`  | `'200rpx'`     | 否   |
| height             | 高度                         | `string`  | `'200rpx'`     | 否   |
| mode               | 缩放模式（同小程序图片组件） | `string`  | `'aspectFill'` | 否   |
| loadingPlaceholder | 加载中占位图                 | `string`  | -              | 否   |
| errorPlaceholder   | 加载失败占位图               | `string`  | -              | 否   |
| style              | 图片样式                     | `string`  | -              | 否   |
| className          | 图片类名                     | `string`  | -              | 否   |
| lazyLoad           | 懒加载（同小程序图片组件）   | `boolean` | -              | 否   |
| ShowMenuByLongress | 长按行为（同小程序图片组件） | `boolean` | -              | 否   |
