import api from './api'

const userCreate = (ajax) => {
  const user = {}
  // 登录
  user.login = params => (
    ajax.get(api.login, { params })
  )
  // 发送验证码
  user.sendMsg = params => (
    ajax.get(api.sendMsg, { params })
  )
  return user
}

export default userCreate
