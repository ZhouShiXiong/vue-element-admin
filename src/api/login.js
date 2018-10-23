import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: 'http://localhost:3001/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  console.log('有无' + token + '~~~~')
  return request({
    url: 'http://localhost:3001/info',
    method: 'get',
    params: { token }
  })
}

export function loginSignup(username, password) {
  console.log('走到了这')
  const data = {
    username,
    password
  }
  return request({
    url: 'http://localhost:3001/signup',
    method: 'post',
    data
  })
}
