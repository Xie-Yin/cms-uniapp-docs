## ProgressBar

> 进度条

### 用法

```html
<script>
  import ProgressBar from '@xyfebaby/cms-uniapp/src/components/ProgressBar'

  export default {
    components: {
      ProgressBar,
    },
  }
</script>

<template>
  <ProgressBar :current="0.5" />
</template>
```

### Props

| prop          | 描述            | 类型     | 默认值    | 必须 |
| ------------- | --------------- | -------- | --------- | ---- |
| height        | 滚动条高度      | `number` | `4`       | 否   |
| value         | 当前进度（0-1） | `number` | `0`       | 否   |
| bgColor       | 背景颜色        | `string` | `#F6F7F9` | 否   |
| progressColor | 进度条颜色      | `string` | `#393C42` | 否   |
