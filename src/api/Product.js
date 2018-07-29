import Base from './Base'
import request from '../utils/request'

class Product extends Base {
    constructor(req, url) {
        super(req, url)
    }
}

export default new Product(request, '/product')