## GoodsCard

> 商品卡片

### 用法

```html
<script>
  import GoodsCard from '@xyfebaby/cms-uniapp/src/components/GoodsCard'

  export default {
    components: {
      GoodsCard,
    },
    data() {
      return {
        config1: {
          icon: '',
          name: 'RTX3080显卡 超白金 12G',
          tags: [{ name: '百亿补贴' }, { name: '满200减30', label: '劵' }],
          type: 1,
          currentPrice: 7299,
          originalPrice: 12599,
          shopName: '老黄DIY',
          salesVolume: 123657,
          categoryName: '显卡',
        },
        config2: {
          icon: '',
          name: 'RTX3080显卡 超白金 12G',
          tags: [{ name: '百亿补贴' }, { name: '满200减30', label: '劵' }],
          type: 1,
          currentPrice: 7299,
          originalPrice: 12599,
          shopName: '老黄DIY',
          salesVolume: 123657,
          coverLabel: '11~11装机节',
        },
        config3: {
          icon: '',
          name: 'RTX3080显卡 超白金 12G',
          tags: [{ name: '百亿补贴' }, { name: '满200减30', label: '劵' }],
          type: 1,
          currentPrice: 7299,
          originalPrice: 12599,
          shopName: '老黄DIY',
          salesVolume: 123657,
        },
      }
    },
  }
</script>

<template>
  <div style="background: var(--x-cms-color-g6)">
    <div class="water-container">
      <GoodsCard :config="config1" :template="1" />
      <GoodsCard :config="config2" :template="1" />
    </div>
    <div class="water-container">
      <GoodsCard :config="config3" :template="1" />
    </div>
    <div class="water-container">
      <GoodsCard :config="config1" :template="2" />
      <GoodsCard :config="config2" :template="2" />
      <GoodsCard :config="config3" :template="2" />
    </div>
    <div class="water-container">
      <GoodsCard :config="config1" :template="3" />
      <GoodsCard :config="config1" :template="3" />
      <GoodsCard :config="config1" :template="3" />
    </div>
    <div class="water-container">
      <GoodsCard :config="config1" background :template="1" />
      <GoodsCard :config="config2" background :template="1" />
    </div>
    <div class="water-container">
      <GoodsCard :config="config3" background :template="1" />
    </div>
    <div class="water-container">
      <GoodsCard :config="config1" background :template="2" />
    </div>
    <div class="water-container">
      <GoodsCard :config="config2" background :template="2" />
    </div>
    <div class="water-container">
      <GoodsCard :config="config3" background :template="2" />
    </div>
    <div class="water-container">
      <GoodsCard :config="config1" background :template="3" />
      <GoodsCard :config="config1" background :template="3" />
      <GoodsCard :config="config1" background :template="3" />
    </div>
  </div>
</template>
```

### Props

| prop       | 描述       | 类型      | 默认值  | 必须 |
| ---------- | ---------- | --------- | ------- | ---- |
| config     | 商品信息   | `object`  | -       | 否   |
| background | 是否带背景 | `boolean` | `false` | 否   |
| template   | 卡片类型   | `number`  | `1`     | 否   |

#### config

| prop          | 描述     | 类型     |
| ------------- | -------- | -------- |
| icon          | 商品图片 | `string` |
| name          | 商品名称 | `string` |
| coverLabel    | 标签     | `string` |
| categoryName  | 分类名称 | `string` |
| tags          | 标签列表 | `Array`  |
| type          | 商品类型 | `number` |
| currentPrice  | 当前价格 | `number` |
| originalPrice | 划线价   | `number` |
| shopName      | 店铺名称 | `string` |
| salesVolume   | 销量     | `number` |
| coverLabel    | 横幅     | `string` |
| categoryName  | 分类     | `string` |

**tag 完整配置**

```
{ name: '', label: '', border: false, bgColor: '', nameStyle:'', labelStyle:'' }
```

### Events

| eventName | 描述     | 参数    |
| --------- | -------- | ------- |
| click     | 点击行为 | `Event` |
