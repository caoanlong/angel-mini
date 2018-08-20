import Base from './Base'
import request from '../utils/request'

class Weixin extends Base {
    constructor(req, url) {
        super(req, url)
    }
    getOpenId(data) {
        return this.req.get(this.url + '/getOpenId', data)
    }
}

export default new Weixin(request, '/weixin')