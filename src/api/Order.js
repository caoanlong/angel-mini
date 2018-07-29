import Base from './Base'
import request from '../utils/request'

class Order extends Base {
    constructor(req, url) {
        super(req, url)
    }
}

export default new Order(request, '/order')