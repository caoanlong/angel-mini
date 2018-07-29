import Base from './Base'
import request from '../utils/request'

class HealthRecord extends Base {
    constructor(req, url) {
        super(req, url)
    }
}

export default new HealthRecord(request, '/healthRecord')