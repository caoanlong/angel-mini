import Base from './Base'
import request from '../utils/request'

class TeacherAdvice extends Base {
    constructor(req, url) {
        super(req, url)
    }
}

export default new TeacherAdvice(request, '/teacherAdvice')