import Base from './Base'
import request from '../utils/request'

class AngelRemark extends Base {
    constructor(req, url) {
        super(req, url)
    }
}

export default new AngelRemark(request, '/angelRemark')