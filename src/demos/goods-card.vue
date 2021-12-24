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

<style scoped>
.water-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px;
}
</style>
