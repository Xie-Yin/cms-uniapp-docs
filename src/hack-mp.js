// 模拟小程序api，只保证本文档能够正常使用uni-app组件
// 请不要在生产环境中使用
window.uni = {
  getSystemInfoSync() {
    return {
      "model": "iPhone 6/7/8",
      "pixelRatio": 2,
      "windowWidth": 375,
      "windowHeight": 619,
      "system": "iOS 10.0.1",
      "language": "zh_CN",
      "version": "8.0.5",
      "deviceOrientation": "portrait",
      "screenWidth": 375,
      "screenHeight": 667,
      "SDKVersion": "2.19.2",
      "brand": "devtools",
      "fontSizeSetting": 16,
      "benchmarkLevel": 1,
      "batteryLevel": 80,
      "statusBarHeight": 20,
      "bluetoothEnabled": true,
      "locationEnabled": true,
      "wifiEnabled": true,
      "cameraAuthorized": true,
      "locationAuthorized": true,
      "microphoneAuthorized": true,
      "notificationAuthorized": true,
      "safeArea": {
        "top": 20,
        "left": 0,
        "right": 375,
        "bottom": 667,
        "width": 375,
        "height": 647
      },
      "platform": "devtools",
      "enableDebug": false,
      "devicePixelRatio": 2
    }
  },
  createSelectorQuery() {
    return {
      in(ctx) {
        return {
          select(selector) {
            return {
              boundingClientRect(callback) {
                document.querySelector(selector).getBoundingClientRect(callback)
              }
            }
          }
        }
      }
    }
  }
}