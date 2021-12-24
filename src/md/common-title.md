## CommonTitle

### 用法

```html
<script>
import { CommonTitle  } from '@xyfebaby/cms-uniapp/src/index'

export default {
  components: {
    CommonTitle
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
    <CommonTitle title="商品分组" @more="onClickMore" />
    <br/>
    <CommonTitle title="商品分组" more="更多" @more="onClickMore" />
  </div>
</template>


```

### Props

| prop  | 描述         | 类型     | 默认值   | 必须 |
| ----- | ------------ | -------- | -------- | ---- |
| title | 标题内容     | `string` | `'标题'` | 否   |
| more  | 右侧操作文案 | `string` | `''`     | 否   |

### Events

| eventName | 描述         | 参数 |
| --------- | ------------ | ---- |
| more      | 点击右侧操作 | -    |
