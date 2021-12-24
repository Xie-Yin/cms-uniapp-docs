## ShopCard

> 店铺卡片

### 用法

```html
<script>
  import ShopCard from '@xyfebaby/cms-uniapp/src/components/ShopCard'

  export default {
    components: {
      ShopCard,
    },
    data() {
      return {
        config: {
          logo: '',
          name: '老黄DIY金牌店铺',
          tags: [{ name: '百亿补贴' }, { name: '满200减30' }],
          spuList: [
            {
              icon: '',
              name: 'RTX3080显卡 超白金 12G',
              type: 1,
              currentPrice: 7299,
              originalPrice: 12599,
              shopName: '老黄DIY金牌店铺',
              salesVolume: 123657,
            },
          ],
          countiesName: '余杭区',
          distance: '1.5km',
          desc: '东半球最好的外科商家',
        },
      }
    },
  }
</script>

<template>
  <div style="background: var(--x-cms-color-g6)">
    <div class="container">
      <ShopCard :config="config" :template="1" />
    </div>
    <div class="container">
      <ShopCard :config="config" :background="false" :template="2" />
      <ShopCard :config="config" :background="false" :template="2" />
    </div>
    <div class="water-container">
      <ShopCard :config="config" :background="false" :template="3" />
      <ShopCard :config="config" :background="false" :template="3" />
    </div>
    <div class="container">
      <ShopCard :config="config" background :template="2" />
    </div>
  </div>
</template>
```

### Props

| prop       | 描述       | 类型      | 默认值  | 必须 |
| ---------- | ---------- | --------- | ------- | ---- |
| config     | 店铺信息   | `object`  | -       | 否   |
| background | 是否带背景 | `boolean` | `false` | 否   |
| template   | 卡片类型   | `number`  | `1`     | 否   |

#### config

| prop         | 描述                     | 类型     |
| ------------ | ------------------------ | -------- |
| logo         | 店铺图片                 | `string` |
| name         | 店铺名称                 | `string` |
| tags         | 标签列表                 | `Array`  |
| spuList      | 商品列表（参考商品卡片） | `Array`  |
| countiesName | 店铺城区名称             | `string` |
| distance     | 店铺距离                 | `string` |
| desc         | 店铺描述                 | `string` |

**tag 完整配置**

```
{ name: '', label: '', border: false, bgColor: '', nameStyle:'', labelStyle:'' }
```

### Events

| eventName | 描述     | 参数    |
| --------- | -------- | ------- |
| click     | 点击行为 | `Event` |
