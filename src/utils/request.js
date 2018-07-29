import Fly from 'flyio/dist/npm/wx'
const fly = new Fly

fly.config.baseURL = process.env.BASE_API
fly.interceptors.request.use(request => {
    const token = wx.getStorageSync('token')
    token && (request.headers['X-Access-Token'] = token)
    return request
})

fly.interceptors.response.use(
    response => {
        if (response.data.code != 0) {
            if (response.data.code == 101
                || response.data.code == 102
                || response.data.code == 103
                || response.data.code == 104) {
                wx.clearStorage()
                wx.showToast({
                    title: response.data.msg,
                    icon: 'error',
                    duration: 2000
                })
                wx.redirectTo({
                    url: '/pages/login/main'
                })
                return Promise.reject('error')
            }
            wx.showToast({
                title: response.data.msg,
                icon: 'error',
                duration: 2000
            })
            return
        }
        return response
    },
    err => {
        wx.showToast({
            title: err.message.toString(),
            icon: 'error',
            duration: 2000
        })
        return
    }
)

export default fly