## Banner

> 装修组件轮播图

### 用法

```html
<script>
  import Banner from '@xyfebaby/cms-uniapp/src/components/Banner'

  export default {
    components: {
      Banner,
    },
    data() {
      return {
        config: {
          extendInfo: {
            mt: 16,
            mb: 16,
            ml: 16,
            mr: 16,
          },
          content: [
            {
              imgUrl: '',
              linkType: 'goods',
              linkTarget: '101',
            },
            {
              imgUrl: '',
              linkType: 'goods',
              linkTarget: '102',
            },
            {
              imgUrl: '',
              linkType: 'goods',
              linkTarget: '103',
            },
          ],
        },
      }
    },
  }
</script>

<template>
  <Banner :config="config" />
</template>
```

### Props

| prop     | 描述     | 类型      | 默认值  | 必须 |
| -------- | -------- | --------- | ------- | ---- |
| config   | 配置     | `object`  | -       | 否   |
| autoplay | 自动轮播 | `boolean` | `false` | 否   |

#### config

```ts
interface Config {
  extendInfo: {
    mt: string
    mb: string
    ml: string
    mr: string
  }
  content: {
    imgUrl: string
    linkType: string
    linkTarget: string
    shelfStartTime?: string // 开始展示时间
    shelfEndTime?: string // 结束展示时间
  }[]
}
```
