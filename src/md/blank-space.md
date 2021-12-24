## BlankSpace

> 空白占位组件

### 用法

```html
<script>
  import BlankSpace from '@xyfebaby/cms-uniapp/src/components/BlankSpace'

  export default {
    components: {
      BlankSpace,
    },
    data() {
      return {
        config: {
          extendInfo: {
            height: 30,
            backgroundColor: '#ffffff',
          },
        },
      }
    },
  }
</script>

<template>
  <BlankSpace :config="config" />
</template>
```

### Props

| prop   | 描述 | 类型     | 默认值 | 必须 |
| ------ | ---- | -------- | ------ | ---- |
| config | 配置 | `object` | -      | 否   |

#### config

```ts
interface Config {
  extendInfo: {
    height?: number
    backgroundColor?: string
  }
}
```
