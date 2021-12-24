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
