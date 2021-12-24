<script>
import ShopCard from '@xyfebaby/cms-uniapp/src/components/ShopCard'

export default {
  components: {
    ShopCard,
  },
  data() {
    return {
      config: {
        icon: '',
        name: '老黄DIY金牌店铺',
        tags: [{ name: '百亿补贴' }, { name: '满200减30', label: '劵' }],
        spuList: [
          {
            icon: '',
            name: 'RTX3080显卡 超白金 12G',
            tags: [{ name: '百亿补贴' }, { name: '满200减30', label: '劵' }],
            type: 1,
            currentPrice: 7299,
            originalPrice: 12599,
            shopName: '老黄DIY',
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

<style scoped>
.container {
  padding: 16px;
}
.water-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px;
}
</style>
