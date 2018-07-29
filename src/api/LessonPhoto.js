import Base from './Base'
import request from '../utils/request'

class LessonPhoto extends Base {
    constructor(req, url) {
        super(req, url)
    }
}

export default new LessonPhoto(request, '/lessonPhoto')