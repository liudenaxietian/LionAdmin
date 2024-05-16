import { login, getUserInfo } from '@/api/sys'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import md5 from 'md5'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default {
  namespace: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state: any, token: string) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state: any, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async login(context: any, userInfo: any) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            context.commit('/user/login', data.data.data.token)
            setTimeStamp()
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async getUserInfo(context: any) {
      const res = await getUserInfo()
      context.commit('/user/setUserInfo', res)
      return res
    },
    logout(context: any) {
      context.commit('/user/setToken', '')
      context.commit('/user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
