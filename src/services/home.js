import api from './api'
const homeCreate = (ajax) => {
  const home = {}
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'// 'application/x-www-form-urlencoded'
  //   }
  // }
  // 获取首页信息
  home.getHomeList = params => (
    ajax.get(api.getHomeList, { params })
  )

  home.postDataToServe = postData => (
    ajax.post('api/postDataToServe', postData)
  )
  // ...依次追加其他接口

  return home
}

export default homeCreate
