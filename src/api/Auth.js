import Base from './Base'
import request from '../utils/request'

class Auth extends Base {
    constructor(req, url) {
        super(req, url)
    }
    getUserInfo() {
        return this.req.get(this.url + '/info')
    }
    updateByToken(data) {
        return this.req.post(this.url + '/updateByToken', data)
    }
    updateMobile(data) {
        return this.req.post(this.url + '/updateMobile', data)
    }
    getSmsCode(data) {
        return this.req.post(this.url + '/getSmsCode', data)
    }
    login(data) {
        return this.req.post(this.url + '/login', data)
    }
}

export default new Auth(request, '/auth')