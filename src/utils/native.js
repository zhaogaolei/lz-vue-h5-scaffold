/**
 * 获取原生app userAgent中追加的信息
 * 定义和zm app追加信息保持一致 【_apptype/ios _appverno/6.5 _appvercode/400 _uid/4514792】
 */
const DEVICETYPE = {
  IOS: 'ios',
  ANDROID: 'android', // flutter
  ANDROID2: 'android2' // 原生webview
}
const getZmInfo = () => {
  console.log(navigator.userAgent)
  const agent = navigator.userAgent
  const zmDeviceStr = agent.substr(agent.indexOf('_apptype'))
  const zmDeviceInfoArr = zmDeviceStr.split(' ')
  const appType = zmDeviceInfoArr[0].split('/')
  const appVerNo = zmDeviceInfoArr[1].split('/')
  const appVerCode = zmDeviceInfoArr[2].split('/')
  const uid = zmDeviceInfoArr[3].split('/')
  return {
    appType, appVerNo, appVerCode, uid
  }
}
const zmDevice = {}

zmDevice.isMobileApp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

zmDevice.isZmApp = /_apptype/i.test(navigator.userAgent)

zmDevice.isIos = zmDevice.isZmApp ? getZmInfo().appType[1] === DEVICETYPE.IOS : false

zmDevice.isAndroid = zmDevice.isZmApp ? [DEVICETYPE.ANDROID, DEVICETYPE.ANDROID2].includes(getZmInfo().appType[1]) : false

zmDevice.isAndroid1 = zmDevice.isZmApp ? [DEVICETYPE.ANDROID].includes(getZmInfo().appType[1]) : false

zmDevice.isAndroid2 = zmDevice.isZmApp ? [DEVICETYPE.ANDROID2].includes(getZmInfo().appType[1]) : false

zmDevice.appVerNo = zmDevice.isZmApp ? getZmInfo().appVerNo[1] : ''

zmDevice.appVerCode = zmDevice.isZmApp ? getZmInfo().appVerCode[1] : ''

zmDevice.currentUserId = zmDevice.isZmApp ? getZmInfo().uid[1] : ''

/**
 * ios android 交互
 */
zmDevice.postMessageToApp = (method, param) => {
  console.log('postMessageToApp====>', method, param)
  param = JSON.stringify(param)
  try {
    if (zmDevice.isIos || zmDevice.isAndroid1) {
      window[method].postMessage(param)
    }
    if (zmDevice.isAndroid2) {
      window.whotel[method](param)
    }
  } catch (error) {
    console.log(error)
  }
}

export default zmDevice
