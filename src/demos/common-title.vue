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

