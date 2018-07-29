import Base from './Base'
import request from '../utils/request'

class Lesson extends Base {
    constructor(req, url) {
        super(req, url)
    }
}

export default new Lesson(request, '/lesson')